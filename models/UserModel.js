const mongoose = require('mongoose')                

mongoose.connect('mongodb://localhost/K20');       

const UserSchema = mongoose.Schema({               
  username: String,
  password: String,
  email: String,
  role: String,
  token: String,
  avatar: String
}, {collection: 'user'})                            

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel

