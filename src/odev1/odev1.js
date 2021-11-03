
function findPrime(...numbers) {


numbers.forEach(number => {
     
    let asal=true
   
    for (let j = 2; j <number; j++) {
          if (number%j==0) {
                asal=false 
                break    
            }  
        }
        if (asal==true){
           console.log(number + ":asal sayi")
        }
            
    })      
     
 
}

findPrime(3,9,11,13,25,88);

function friendNumbers(num1,num2) {

   
        let total1=0
        let total2=0    

    for (let i = 1; i < num1; i++) {
        if (num1%i==0){
            total1=total1+i
        }
    }
    for (let j = 1; j < num2; j++) {
        if (num2%j==0){
            total2=total2+j
        }
    }

    if (total1==num2 && total2==num1) {
        console.log("friends sayılar: "+num1 +"  " +num2)
       
    }
    else{
        console.log("friends sayılar değiller: "+num1 +"  " +num2)
    }
}

friendNumbers(220,284)

function perfectNumber() {
let list=[]

   
for (let i = 1; i < 1000; i++) {
    let total1=0 
  for (let j = 1; j <= i; j++) {
    if (i%j==0){
        total1=total1+j
    }
}
    if (total1==i*2) {
        list.push(i)
    }
 
}
console.log("Mükemmel Sayilar: "+list)
    
}

perfectNumber()

function asalSayilar() {
    let list=[]
    
    for (let i = 2; i < 1000; i++) {
        let asal=true
        for (let j=2;j<i;j++){
            if (i%j==0) {
                asal=false
                break
            }
        }
        if (asal==true) {
            list.push(i)
        }
                     
        }
        console.log("1000e kadar olan asal sayılar: "+list)
        
    }

    asalSayilar();


