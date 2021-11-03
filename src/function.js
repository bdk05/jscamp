function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi: ürün:  "+ productName + "  adet: " +quantity)

}
//npm run dev

addToCart()
addToCart("Yumurta")
addToCart(15)


let sayHello=()=>{    //() bunun ile sen fonk. diyoruz ve çağrıldığıında aşaıdaki gibi cvpmnver diuor
    console.log("hello world")
}

sayHello()

let sayHello2=function() {
    console.log("hello world 2")
    
}

sayHello2();


function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)

//objeler--referans tiplidir
let product1={productName:"Elma", unitPrice:10, quantity:5}
function addToCart3(product) {
    console.log("Ürün: " +product.productName)
    console.log("Adet: "+product.quantity)
}

addToCart3(product1)


let product2={productName:"Elma", unitPrice:10, quantity:5}
let product3={productName:"Elma", unitPrice:10, quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
}
//{} obje demek
let products=[
    {},
    {},
    {}
]

addToCart4(products)

function  add(...numbers) { //rest resti fonkda sona koy
    let total=0
    for (let i= 0; i < numbers.length; i++) {
       total=total+numbers[i]
        
    }
    console.log(total)
}

add(20,30)

//dizideki sayıların maxını bulma. rest kullanıyorz.
let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))

//dizi içindekilerin hepsini isimlendirme
let [icAnadolu,marmara, [icAnadoluSehirleri]]=[
    {name:"iç anadolu", population:"20M"},
    {name:"marmara", population:"30M"},[
        ["Ankara","Konya"],
        ["İstanbul", "Bursa"]
    
    ]  
]
console.log(icAnadoluSehirleri)


let {productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}={productName:"Elma", unitPrice:10, quantity:5}
console.log(newProductName)