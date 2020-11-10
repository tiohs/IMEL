const User = require('../model/Aluno');

exports.postSign = (req, res) => {
  const { name , password } = req.body;

  User.findOne({name})
      .then(user => {
        console.log(user);
      }).catch(err => {
        console.log(err);
      });
  
}