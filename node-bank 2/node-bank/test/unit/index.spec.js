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
    expect(result).toBe(true);
  });

  it('should return true for you@example.com', function() {
    isEmailValid('you@example.com');
    expect(result).toBe(false);
    expect(result).toBeFalsy();
  });

});
  
describe('verifyPassword', function() {
  beforeEach(function() {
    var pass = "123";
  });

  it('should ...', function() {
    verifyPassword(pass);
  });

  it('should ...', function() {
    verifyPassword(pass);
  });

});