/*
 * Unit tests for lib/calculator.js
 */

describe('isEmailValid2', function() {

    // SET UP: do something before each 'it' test aka unit test
    beforeEach(function() {
      
    });
  
    // TEAR DOWN: do something after each
    afterEach(function() {
      
    });
  
    it('should return true when the email is abc', function() {
      var result = isEmailValid2('you@example.com');
      expect(result).toBe(false);
    });
  
    // it('should return true for you@example.com', function() {
    //   var result = isEmailValid('you@example.com');
    //   expect(result).toBe(true);
    //   //expect(result).toBeFalsy();
    // });
  
});