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

  it('should return false when the email is johnbrowngmailcom', function() {
    var result = isEmailValid('johnbrowngmailcom');
    expect(result).toBe(false);
  });

  it('should return true for you@example.com', function() {
    var result = isEmailValid('johnbrown@gmail.com');
    expect(result).toBe(true);
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
    var result = verifyPassword("asdsdsd");

    expect(result.isValid).toBe(false);    
  });

  it('should return isValid as false if the password is more than 15 characters', function() {
    var result = verifyPassword("dssdfsdfsddssffs");

    expect(result.isValid).toBe(false);    
  });


});