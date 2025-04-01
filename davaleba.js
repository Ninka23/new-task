

//Დაბეჭდეთ რიცხვები 2 დან 8 მდე

/*
for (let i=2; i<=8; i++){
    console.log(i);
}*/

//5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი 
// (უნდა დაიბეჭდოს 5,9,13…)

/*
for(let i=5; i<=35; i+= 4) {
    console.log(i);
}*/


//დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
/*let ნამრავლი=1
for (let i=3; i<=8; i++){
    ნამრავლი*=i
}
 console.log(ნამრავლი); */


 //Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age 
 // და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)

 /*let person={
    firstname: "ნინო",
    lastname: "ბენიძე",
    age: 27
 };
 console.log(person.firstname+""+person.lastname)*/


 //დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 

 /*let person={
    firstname:'ნინო',
    lastname:'ბენიძე',
    age:27
 };
 for (let key in person){
    console.log(person[key]);
 }*/

 //დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; 
//დაბეჭდეთ მასივის თითოეული წევრი.

/*let fruits = ['apple','banana','orange'];
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}*/


//დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
/*let fruits = ['apple','banana','orange'];
fruits.unshift('grapes');
fruits.push('pineapple');
console.log(fruits);*/


//დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი

/*let ჯამი=0;
for(let i =1; i<=34; i++){
    ჯამი+=i;
}
console.log(ჯამი);*/