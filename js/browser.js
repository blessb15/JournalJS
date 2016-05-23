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
