pragma solidity ^0.4.15;

import "./[RENAME]Token.sol";

contract TokenTestSpender{

  [RENAME]Token t;

  function TokenTestSpender(address testContract) {
    t = [RENAME]Token(testContract);
  }

  function spend(address owner, uint256 amount) returns (bool){
    return t.transferFrom(owner, this, amount);
  }

  function changeOwnerBack(address newOwner) {
    t.changeOwner(newOwner);
  }

}
