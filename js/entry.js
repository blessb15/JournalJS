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
