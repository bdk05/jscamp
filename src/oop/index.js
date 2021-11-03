class Customer{
   constructor(id, customerNumber){
 //jsde class yok aslında fonk. oluştuuryor arkada.
 //prototyping yaptık. instance aslında this. bunu yapmadan sınıf dışından çağıramıyoruz.
 this.id=id
 this.customerNumber=customerNumber
   }

}

let customer=new Customer(1,"12345");
console.log(customer.customerNumber)

//prototyping
customer.name="Berna"
console.log(customer.name)

Customer.bisey="bişey"
console.log(Customer.bisey)

class IndividualCustomer extends Customer{
constructor(firstName,id,customerNumber){
    super(id,customerNumber)
    this.firstName=firstName
}
   
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}


//MAP

let products = [
  {id:1, name: "Acer Laptop", unitPrice:15000},
  {id:2, name: "Asus Laptop", unitPrice:16000},
  {id:3, name: "HP Laptop", unitPrice:13000},
  {id:4, name: "Dell Laptop", unitPrice:12000},
  {id:5, name: "Casper Laptop", unitPrice:17000},
]
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

products.map(product=>{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
}   )
//FILTER : filter eyeni bir array oluşturuyor.
let filteredProducts=products.filter(product=>product.unitPrice>12000)
console.log(filteredProducts)

//REDUCE

let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal)

let carTotal2=products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{p.unitPrice=p.unitPrice*1.18  
                    return p})
                .reduce((acc,p)=>acc+p.unitPrice,0)   

