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
      .then(user => res.json({status: user.email+ ' registred'}))
      .catch(err => {
        res.send('error ' + err)
      })
    }
    else{
      console.error('già registrato');
      
      res.json({error: 'Users alredy exists'})
    }
    
  })
  .catch(err => {
    res.send('error '+ err)
  })
}

//FUNZIONE ASINCRONA
// controllers.creating = async(req, res) =>  {
//   const response = await sequelize.sync().then(() => {
//         Users.create({
//             email:  req.query.email,      //FIX THIS
//             password: req.query.password   
//         });
//     })
//     .catch(err => {
//         return err;
//     });
//     res.json(response)}


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
    id_film: req.query.id_film,
    title_film: req.query.title_film,
    email: req.query.email,
    vote: req.query.vote,
  };
console.log(req.query)
  Votation.findOne({
    where: {
      id_film: req.query.id_film,
      email: req.query.email
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