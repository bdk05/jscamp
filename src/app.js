console.log("Merhaba Kodlama io")
//js type safe değildir
//dolarDun="Ankara"
let dolarBugun=9.30
let  dolarDun=9.20

{
let dolarDun=9.10

}


console.log(dolarDun)

const euroDun=11.2 //const ile verilen değer artık değişmez
//euroDun=11

console.log(euroDun)
//array dizi
//camelCasing
//PascalCasing
let konutKredileri=["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")

for(let i=0;i<konutKredileri.length;i++){
    console.log("<li>" +konutKredileri[i]+ "</li>")
}

console.log("</ul>")

function save(puan=10,konut) {
    console.log(konut,puan)
}

save(undefined,konutKredileri);

let student={id:1, name:"Berna"}
let students=["Mehmet","Yiğit","Memocan"]

let students2=[student,{id:2, name:"Cetin"},"Ankara", {city:"İstanbul"}]
console.log(students2);

//rest
//params
//varArgs
let showProducts=function(id,...products) {
    console.log(id)
    console.log(products)
    
}
//console.log(typeof showProducts)
showProducts(1, "elma", "karpuz")

//spread
let points=[1,2,3,4,60,30,45]
console.log(...points)
console.log(Math.max(...points))

console.log("ABC", "D", ..."EFG", "H")

//Destructuring : reactta çok kullanılıyor. Elinizdeki array in değerlerini değişkenlere atama

let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]]=populations


console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)

function someFunction([small1],number) {
    console.log(small1)
    
}
someFunction(populations)

let category={id:1, name:"içecek"}

//objeleri destruct etme
let {id,name}=category
console.log(id)
console.log(name)