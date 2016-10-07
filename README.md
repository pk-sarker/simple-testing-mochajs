# **T**esting with **M**ocha
- - -


## Installation
You need nodejs and npm installed. If you don't have nodejs installed then check https://nodejs.org/en/ for installation.
Then you need to install mocha
```sh
npm install mocha -g --save
```
More info: http://mochajs.org/#installation

Then install *C*hai. Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. More info: http://chaijs.com/

```sh
npm install chai -g --save
```



#### Directory Structure
You can have your own of structuring the source and test files. Here i have created two directories, ./source and ./test for source file and test files. I have a simple test file ./test/product-spec.js . To run this test just go the test directory and run the following command.

```sh
mocha --reporter=nyan product-spec.js
```
