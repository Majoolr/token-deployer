pragma solidity ^0.4.15;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/ThrowProxy.sol";
import "../contracts/[RENAME]Token.sol";
import "../contracts/TokenTestSpender.sol";

contract Test[RENAME]Token {
  RENAMEToken instance;
  ThrowProxy tokenThrow;
  TokenTestSpender spender;
  ThrowProxy spenderThrow;
  uint8 expectedDecimals = /*[TokenDecimals]*/;
  uint256 expectedSupply = /*[TokenSupply]*/;

  function beforeAll(){
    address ia = new [RENAME]Token(this, /*"[TokenName]"*/, /*"[TokenSymbol]"*/, /*[Decmials]*/, /*[SupplyWithZeros]*/, false);
    instance = [RENAME]Token(ia);
    tokenThrow = new ThrowProxy(ia);
    address sa = new TokenTestSpender(instance);
    spender = TokenTestSpender(sa);
    spenderThrow = new ThrowProxy(sa);

  }

  function testInitialParams(){
    uint decimals = instance.decimals();
    uint256 supply = instance.totalSupply();

    Assert.equal(decimals, expectedDecimals, "Decimals should be initialized.");
    Assert.equal(supply,expectedSupply,"Total supply should be the amount of tokens initiated.");
  }

  function testBalanceOfFunction(){
    uint256 balance = instance.balanceOf(this);

    Assert.equal(balance,expectedSupply,"All tokens should be owned by the creating account");
  }

  function testApproveFunction(){
    bool ret = instance.approve(spender, 1000000);

    Assert.isTrue(ret,"The owner should be able to approve any amount.");
  }

  function testAllowanceFunction(){
    uint256 expectedAllowance = instance.allowance(this,spender);

    Assert.equal(expectedAllowance,1000000,"The spender should be authorized 20 tokens");
  }

  function testTransfer(){
    bool sendToProxy = instance.transfer(tokenThrow, 8);
    [RENAME]Token(address(tokenThrow)).transfer(spender, 20);
    bool firstTry = tokenThrow.execute.gas(200000)();
    [RENAME]Token(address(tokenThrow)).transfer(spender, 5);
    bool secondTry = tokenThrow.execute.gas(200000)();

    Assert.isFalse(firstTry,"The owner cannot spend more tokens than she owns");
    Assert.isTrue(secondTry,"The owner should be able to spend owned tokens");
  }

  function testTransferFrom(){
    TokenTestSpender(address(spenderThrow)).spend(this, 1500000);
    bool firstTry = spenderThrow.execute.gas(200000)();
    TokenTestSpender(address(spenderThrow)).spend(this, 200000);
    bool secondTry = spenderThrow.execute.gas(200000)();

    Assert.isFalse(firstTry,"The spender cannot spend more tokens than the owner has");
    Assert.isTrue(secondTry,"The spender should be able to spend authorized tokens");
  }

  function testChangeOwnerFunction(){
    bool ret = instance.changeOwner(spender);
    address owner = instance.owner();

    Assert.equal(address(spender), owner, "The spender should now be the owner");

    [RENAME]Token(address(tokenThrow)).changeOwner(this);
    bool co = tokenThrow.execute.gas(200000)();

    Assert.isFalse(co, "The proxy contract cannot change owners.");
  }
}
