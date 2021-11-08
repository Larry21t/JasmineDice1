class RandomNumberGenerator {
    value = undefined
    min = undefined
    max = undefined

    constructor(min, max){
        this.min = min;
        this.max = max;
    }

    perform(){
        this.value= 1+ Math.floor(Math.random() *(this.max-this.min+1));
    }

    getValue(){
        return this.value
    }
}