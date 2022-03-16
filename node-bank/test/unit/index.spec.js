/*
 * Unit tests for lib/calculator.js
 */

describe('isEmailValid', function() {

  // SET UP: do something before each 'it' test aka unit test
  beforeEach(function() {
    
  });

  // TEAR DOWN: do something after each
  afterEach(function() {
    
  });

  it('should return false when the email is abc', function() {
    var result = isEmailValid('abc');
    expect(result).toBe(false);
  });

  it('should return true for you@example.com', function() {
    var result =isEmailValid('you@example.com');
    expect(result).toBe(true);
    //expect(result).toBeFalsy();
  });

});
  
describe('verifyPassword', function() {
  beforeEach(function() {
    var pass = "12345678";
  });

  it('should ...', function() {
    var result =verifyPassword("");
    expect(result.isValid).toBe(false);
  });

  it('should ...', function() {
    var result =verifyPassword("12345678");
    expect(result.isValid).toBe(true);
  });

});

