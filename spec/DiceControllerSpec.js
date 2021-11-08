describe("DiceController", function(){
    var button = undefined;
    var diceController = undefined;
    var randomNumberGenerator = undefined;
    var division = undefined;

    beforeEach(function(){
        button = jasmine.createSpyObj('Button', {
            onClick: undefined
        });
        randomNumberGenerator = jasmine.createSpyObj('RandomNumberGenerator', {
            perform: undefined,
            getValue: 5
        });
        division = jasmine.createSpyObj('Division', {
            setText: undefined
        });
        diceController = new DiceController(button, division, randomNumberGenerator);
    });

    it("muss erstellt werden können", function(){
        expect( diceController).toBeTruthy();
    });

    it("muss button.onClick() aufrufen", function(){
        expect(button.onClick).toHaveBeenCalledWith(diceController.onButtonClicked);
    });

    it("muss randomNumberGenerator.perform() aufrufen", function(){
        diceController.onButtonClicked()
        expect(randomNumberGenerator.perform).toHaveBeenCalled();
    });

    it("muss randomNumberGenerator.getValue() aufrufen", function(){
        diceController.onButtonClicked()
        expect(randomNumberGenerator.getValue).toHaveBeenCalled();
    });

    it("muss division.setText() aufrufen", function(){
        diceController.onButtonClicked()
        expect(division.setText).toHaveBeenCalledWith(5)
    });
    

})