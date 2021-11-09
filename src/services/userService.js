//deger tutan ve operasyon tutan classlar
//bir class sadece bir iş yapar. 
export default class UserSevice{
constructor(loggerService){
    this.users=[]
    this.loggerService=loggerService
}
add(user){
    this.users.push(user)
    this.loggerService.log(user)
}
list(){
return this.users

}
getById(id){
return this.users.find(u=>u.id ===id)
}

}