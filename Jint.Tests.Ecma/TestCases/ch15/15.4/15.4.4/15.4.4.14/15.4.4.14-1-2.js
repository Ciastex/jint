/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-1-2.js
 * @description Array.prototype.indexOf applied to null throws a TypeError
 */


function testcase() {
  try {
     Array.prototype.indexOf.call(null);
     return false;
  }
  catch (e) {
     return e instanceof TypeError;
     }
 }
runTestCase(testcase);
