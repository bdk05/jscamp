//component demek mesela ürün detayına gittiğinde onun için ayrı bir component var
//o da productdetail
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")
let logger1=new MongoLogger()
let userService=new UserService(logger1)

let user1=new User(1,"engin","demiroğ", "ankara")
let user2=new User(2,"baran","gökçekli", "muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))


let customer={id:1, firstName:"Engin"}

//prototyping
customer.lastName="Demiroğ"
console.log(customer.lastName)