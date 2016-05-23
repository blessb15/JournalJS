(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Entry = function(title, date, body){
  this.title = title;
  this.date = date;
  this.body = body;
};

exports.Entry.prototype.bodySize = function() {
  return this.body.length;
};

exports.Entry.prototype.read = function() {
  return "Title: " + this.title + "Date: " + this.date + "Body " + this.body + " Body Size:" + this.bodySize();
};


// function reverse(s) {
//   var o = '';
//   for (var i = s.length - 1; i >= 0; i--)
//     o += s[i];
//   return o;
// }

// exports.Entry.prototype.encode = function() {
//   return "Dear " + reverse(this.to) + ", " + reverse(this.EntryText) + " Yours truly, " + reverse(this.from);
// }

},{}],2:[function(require,module,exports){
var Entry = require('./Entry.js').Entry;

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var date = $('#date').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, date, body);
    console.log(newEntry.read());
  });
});

},{"./Entry.js":1}]},{},[2]);
