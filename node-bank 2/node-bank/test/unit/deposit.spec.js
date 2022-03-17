describe('checkDeposit', function() {

    // SET UP: do something before each 'it' test aka unit test
    beforeEach(function() {
      
    });
  
    // TEAR DOWN: do something after each
    afterEach(function() {
      
    });
    it('should return false when the deposit amount is empty', function() {
        var result = checkDeposit("");
        expect(result.isValid).toBe(false);
      });
    it('should return false when the deposit is negative', function() {
      var result = checkDeposit('-200');
      expect(result.isValid).toBe(false);
    });
    it('should return false when the deposit has nonnumerical characters', function() {
      var result = checkDeposit('ab9?!c');
      expect(result.isValid).toBe(false);
    });

  });