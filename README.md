Token Deployer
=========================

This repo gives a complete example of deploying a token. The single most important thing to remember is **move systematically and do not cut corners.** This rule goes for ALL contract deployments. Copy and pasting without taking the time to go over every detail will result in a failed deployment, or worse, a successful deployment with hidden failures. There are numerous locations where the token name and parameters need to be set. Move from file to file, look over and touch each line. Do not deploy onto the live network until running `truffle test`. The only files that do not need to be touched are Lib files.

## Steps

Start in the `build` folder.   

1. Open `build/contracts`.
2. Ensure a clean start by deleting any non-lib .json file. **Leave all Lib.json files.**
3. Open `/contracts` folder.
4. Rename the token `.sol` file to `SomeNameToken.sol`.
5. Open the token `.sol` file.
6. Put the same `SomeNameToken` after `contract` on line 26.
7. Name the constructor function `function SomeNameToken` on line 31.
8. Open `TokenTestSpender.sol`.
9. Change to the name of your token on lines 3 and 7.
10. Open `/migrations` folder.
11. Change to the name of your token in two places on line 4, then also change to the name on lines 11, 14, 24, 34, and 44.
12. Within each block, set the parameters for the appropriate network. So for live, set the owner as the address you want to use on the live network, then set each parameter after. For testrpc, the owner needs to be one of the addresses generated at launch. When you launch testrpc (soon to be ganache), you can simply copy and paste one of the addresses into the owner field.
13. Open `test` folder.
14. Rename the token `.js` file to `SomeNameToken.js`.
15. Change to the name of your token in two places on line 1, then change on lines 3 and 8.
16. Set the appropriate assertion parameters on lines 25-29.
17. Rename the test token `.sol` file to `TestSomeNameToken.sol`.
18. Change to the name of your token on lines 6, 9, 18, 19, 55, 57, and 80.
19. Set the commented parameters on lines 14, 15, and 18.
20. For security, set truffle.js parameters in the `RenameTotruffle.js` file then rename to `truffle.js` before committing to any repo.
21. Open `RenameTotruffle.js`.
22. Set a random 12-word mnemonic on line 3 to use ropsten.
23. Set the appropriate addresses on lines 19 and 27.   

At this point you can `truffle test` by going into the `truffle` folder in a terminal and running `truffle test`.   

To deploy onto rinkeby.   

1. Start a local node connected to rinkeby
2. Unlock your primary account.
3. Go to https://faucet.rinkeby.io/ and follow the instructions to get ether.
4. Copy and paste the top `truffle.js` file with your info into the `truffle.js` file in the `/truffle` folder and save. **Do not git commit before reverting this change and removing your information.**
5. Run `truffle migrate --network rinkeby`.   

Your token is now on the Rinkeby network.
