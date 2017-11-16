var [RENAME]Token = artifacts.require("[RENAME]Token");

contract('[RENAME]Token', function(accounts) {
  it("should properly initialize token data", function() {
    var returnObj = {};
    var c;

    return [RENAME]Token.deployed().then(function(instance) {
      c = instance;
      return c.name.call();
    }).then(function(n){
      returnObj.name = n;
      return c.symbol.call();
    }).then(function(s){
      returnObj.symbol = s;
      return c.decimals.call();
    }).then(function(d){
      returnObj.decimals = d;
      return c.totalSupply.call();
    }).then(function(ts){
      returnObj.totalSupply = ts;
      return c.initialSupply.call();
    }).then(function(is){
      returnObj.initialSupply = is;
      assert.equal(returnObj.name.valueOf(), /*'TokenName'*/, "Name should be set to blank.");
      assert.equal(returnObj.symbol.valueOf(), /*'TokenSymbol'*/, "Symbol should be set to blank.");
      assert.equal(returnObj.decimals.valueOf(), /*Decimals*/, "Decimals should be set to blank.");
      assert.equal(returnObj.totalSupply.valueOf(), /*TotalSupply*/, "Total supply should reflect blank with decimals.");
      assert.equal(returnObj.initialSupply.valueOf(), /*InitialSupply*/, "Initial supply should reflect blank with decimals.");
    });
  });
});
