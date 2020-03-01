var Users = require('../model/User');
var Votation = require('../model/Votation');
var sequelize = require('../model/mysql');

const controllers = {}

controllers.test = (req,res) => {
  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }
  console.log("Fatta un'azione per test");
  res.json(data);

};

controllers.testdata = async ( req, res) => {
    const response = await sequelize.sync().then(function() {
       const data =  Users.findAll()
       return data;
    })
    .catch(err => {
      return err;
    });
    res.json(response)
}
  
controllers.list = async (req, res) => {        //cambiare la lista da users a films
    const data = await Users.findAll()
    .then(function(data){
        return data;
    })
    .catch(error => {
        return error;
    }); 

    res.json({success : true, data : data});
}

//REGISTRAZIONE UTENTE
controllers.creating = (req, res) => {
  const information = {
    email: req.body.params.email,
    password: req.body.params.password
  };
console.log(req.body.params)
  Users.findOne({
    where: {
      email: req.body.params.email
    }
  })
  .then(user => {
    if (!user){
      Users.create(information)
      .then(user => {
        res.json({status: user.email+ ' registred'}) 
      })
      .catch(err => {
        res.send('error ' + err)
      })
    }
    else{  
      res.json({error: 'Users alredy exists'})
    }
    
  })
  .catch(err => {
    res.send('error '+ err)
  })
}

//LOG IN DELL'UTENTE
controllers.enter = (req, res) => {

  Users.findOne({
    where: {
      email: req.query.email,
      password: req.query.password
    }
  })
  .then(user => {
    if (user){
      res.json({status: user.email + ' entrato'})
    }
    else{
      res.json({error: 'Password o email errate' })
    }
  })
  .catch(err => {
    res.send('error '+ err)
  })
};

//VOTAZIONE FILM
controllers.votation = (req, res) => {

  const information = {
    id_film: req.body.params.id_film,
    title_film: req.body.params.title_film,
    email: req.body.params.email,
    vote: req.body.params.vote,
  };
  
  Votation.findOne({
    where: {
      id_film: req.body.params.id_film,
      email: req.body.params.email
    }
  })
  .then(alredyexist => {
    if (!alredyexist){
      Votation.create(information)
      .then(vote => res.json({status: `${vote.email} ha dato ${vote.vote} a ${vote.title_film}`}))
      .catch(err => {
        res.send('error ' + err)
      })
    }
    else{
      res.json({error: 'This user has alredy voted this film'})
    }
    
  })
  .catch(err => {
    res.send('error '+ err)
  })
};


controllers.scores = (req, res) => {
  var finale = [];
  Votation.findAll()
  .then(data => {
    data = JSON.parse(JSON.stringify(data));
    // console.log(data)
    id = [];
    data.map(votation => {
      var trovato = false;
      for(i=0; i < finale.length; i++){
        if(finale[i][0] == votation.id_film){
          trovato = true;
          // console.log(finale[i])
          finale[i] = [votation.id_film, votation.title_film, votation.vote + finale[i][2], 1 + finale[i][3]]
          // console.log(finale[i])
        }
      }
      if(trovato == false){
        finale.push([votation.id_film, votation.title_film, votation.vote, 1]);
      }
    })
    finale.sort((a, b) => { //ordino la lista in ordine decrescente
      mediaA = a[2]/a[3];
      mediaB = b[2]/a[3];
      if(mediaA > mediaB){
        return -1;
      }else if(mediaA < mediaB){
        return 1;
      }else{
        return 0;
      }
    })
    res.json({data: finale})
  })
  .catch(err => console.log(err))
};


controllers.get = async (req,res) => {
    const { email } = req.query.email;
    const data = await Users.findAll({
        where: { email: email },
    })
    .then(function(data){
      return data;
    })
    .catch(error =>{
      return error;
    })
    res.json({ success: true, data: data });
  }



module.exports = controllers;