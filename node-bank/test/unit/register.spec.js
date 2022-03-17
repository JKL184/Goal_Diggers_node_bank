/*
 * Unit tests for lib/calculator.js
 */

//Unit tests for Card Validation
describe('verifyCard', function() {
    // SET UP: do something before each 'it' test aka unit test
    var card;
    beforeEach(function() {
    card = "123";
});

//check empty Card number field
it('should return false when the cardnumber field is empty', function() {
    var result = verifyCard("");
    expect(result.isValid).toBe(false);
})
//check if Card number entered only contains numbers
it( 'should return false when the cardnumber entered contains nonnumerical characters', function(){
    var result = verifyCard("abc!");
    expect(result.isValid).toBe(false);
})
//check the # of digits in cardnumber to 16
it('should return false when the number of cardnumbers is not equal to 16 digits',function(){
    var result = verifyCard('1234');
    expect(result.isValid).toBe(false); 
});

});

