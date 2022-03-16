describe('isWithdrawValid', function() {

    // SET UP: do something before each 'it' test aka unit test
    beforeEach(function() {
      
    });
  
    // TEAR DOWN: do something after each
    afterEach(function() {
      
    });
  
    it('should return false when the withdraw amount is negative', function() {
      var result = isWithdrawValid('-200','10000');
      expect(result.isValid).toBe(false);
    });
    it('should return false when the withdraw amount has characters besides numbers', function() {
      var result = isWithdrawValid('ab9?!c','10000');
      expect(result.isValid).toBe(false);
    });
    it('should return false when the withdraw amount is more than the available balance', function() {
      var result = isWithdrawValid('20000','10000');
      expect(result.isValid).toBe(false);
    });
    it('should return false when the withdraw amount has more than 2 decimal places', function() {
      var result = isWithdrawValid('9.333','10000');
      expect(result.isValid).toBe(false);
    });
  
    it('should return true for 9252.25', function() {
      var result =isWithdrawValid('9252.25','10000');
      expect(result.isValid).toBe(true);
      
    });
  
  });