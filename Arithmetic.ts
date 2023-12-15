class   Arithmetic {
    Number1 : number;
    Number2 : number;


    constructor (num1: number,
 num2: number) {
        this.Number1 = num1;
        this.Number2= num2;
    
 }

 Addition(): number {
    return this.Number1+this.Number2
 }

 Subtraction(): number {
      return this.Number1-this.Number2
 }

 Multiplication(): number {
    return this.Number1*this.Number2
 }

 Division(): number {
    if(this.Number2 !==0){
        return this.Number1/this.Number2
    }else{
        throw new
    Error("Division by zero is not allowed");

        
    }
 }
    
}


const object1 = new Arithmetic(25,42);
const object2 = new Arithmetic(17,15);


console.log("Addition:",object1.Addition());
console.log("Subtraction:",object1.Subtraction());
console.log("Multiplication:",object2.Multiplication());
console.log("Division:",object2.Division());



