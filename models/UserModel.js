const mongoose = require('./connectDB')                

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

// UserModel.create({
//   username: 'Chiến'
// }).then( data => console.log(data))

