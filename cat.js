function Cat(){
    this.stomatch = []; 
}

Cat.prototype.eat= function(Mouse){
    this.stomatch.push(Mouse) ;

}

Module.exports = Cat ;