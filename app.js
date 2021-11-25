const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.post("/",function(req,res){
  function palindrome(str) {
    var str='abc'
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

  )};
app.listen(8080,function(){
  )};
