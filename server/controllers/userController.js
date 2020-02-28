
var Users = require('../model/User');
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

controllers.creating = async (req, res) => {
    const response = await sequelize.sync().then(() => {
        Users.create({
            email:  req.params.email,      //FIX THIS
            password: req.params.password   
        });
    })
    .catch(err => {
        return err;
    });
    res.json(response)
}

controllers.get = async (req,res) => {
    const { email } = req.params.email;
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