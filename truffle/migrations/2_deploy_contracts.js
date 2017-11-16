var BasicMathLib = artifacts.require("./BasicMathLib.sol");
var Array256Lib = artifacts.require("./Array256Lib.sol");
var TokenLib = artifacts.require("./TokenLib.sol");
var [RENAME]Token = artifacts.require("./[RENAME]Token.sol");

module.exports = function(deployer, network) {
  deployer.deploy(BasicMathLib,{overwrite: false});
  deployer.deploy(Array256Lib, {overwrite: false});
  deployer.link(BasicMathLib, TokenLib);
  deployer.deploy(TokenLib, {overwrite: false});
  deployer.link(TokenLib, [RENAME]Token);

  if(network == "development"){// for testrpc or ganache
    deployer.deploy([RENAME]Token,
                    /*"0xTokenOwnerAddressHere"*/,
                    /*"[TokenNameHere]"*/,
                    /*"[TokenSymbolHere]"*/,
                    /*[DecimalsHere]*/,
                    /*[TokenSupplyHere be sure to add all decimal zeros]*/,
                    false);//minting generally false
  }

  if(network == "live"){// network 1
    deployer.deploy([RENAME]Token,
                    /*"0xTokenOwnerAddressHere"*/,
                    /*"[TokenNameHere]"*/,
                    /*"[TokenSymbolHere]"*/,
                    /*[DecimalsHere]*/,
                    /*[TokenSupplyHere be sure to add all decimal zeros]*/,
                    false);//minting generally false
  }

  if(network == "ropsten"){//network 3
    deployer.deploy([RENAME]Token,
                    /*"0xTokenOwnerAddressHere"*/,
                    /*"[TokenNameHere]"*/,
                    /*"[TokenSymbolHere]"*/,
                    /*[DecimalsHere]*/,
                    /*[TokenSupplyHere be sure to add all decimal zeros]*/,
                    false);//minting generally false
  }

  if(network == "rinkeby"){// network 4
    deployer.deploy([RENAME]Token,
                    /*"0xTokenOwnerAddressHere"*/,
                    /*"[TokenNameHere]"*/,
                    /*"[TokenSymbolHere]"*/,
                    /*[DecimalsHere]*/,
                    /*[TokenSupplyHere be sure to add all decimal zeros]*/,
                    false);//minting generally false
  }
};
