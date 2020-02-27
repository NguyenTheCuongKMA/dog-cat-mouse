const chalk = require('chalk');
function Dog(name){
    this.name = name ; 
    this.stomach = []; 
}

Dog.prototype.eat = function(){
    this.stomach.push(Cat) ;
}
 Dog.prototype.sayHi = function(name){
     console.log('hi,my name is'+ chalk.yellow(name)) ; 
 }
 module.exports = Dog ;