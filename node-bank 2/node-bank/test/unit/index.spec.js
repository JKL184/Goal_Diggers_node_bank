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
    var result = isEmailValid('you@example.com');
    expect(result).toBe(true);
    //expect(result).toBeFalsy();
  });

});
  
describe('verifyPassword', function() {
  var pass;
  beforeEach(function() {
    pass = "123";
  });

  it('should return isValid as false if the password is empty', function() {
    var result = verifyPassword("");

    expect(result.isValid).toBe(false);
    //expect(result.message).toBe("Password is empty");
    //verifyPassword(pass);
  });

  it('should return isValid as false if the password is less than 8 characters', function() {
    var result = verifyPassword(pass);

    expect(result.isValid).toBe(false);    
  });

  it('should return isValid as false if the password is more than 15 characters', function() {
    var result = verifyPassword(pass);

    expect(result.isValid).toBe(false);    
  });


});