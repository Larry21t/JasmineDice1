class DiceController{
    button = undefined;
    randomNumberGenerator = undefined;
    division = undefined;
    
    constructor(button, division, randomNumberGenerator){
        this.button = button;
        this.division = division;
        this.randomNumberGenerator = randomNumberGenerator;
        button.onClick(this.onButtonClicked);
    }

    onButtonClicked(){
        this.randomNumberGenerator.perform();
        this.division.setText(this.randomNumberGenerator.getValue());
        
    }


   

    
    

    
    
}

