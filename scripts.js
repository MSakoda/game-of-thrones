$(document).ready(function(){

// $.get('http://www.anapioficeandfire.com/api/houses/17',function(rem){
//   console.log(rem);
// },'json')
// $.get('http://www.anapioficeandfire.com/api/houses/229',function(rem){
//   console.log(rem);
// },'json')
// $.get('http://www.anapioficeandfire.com/api/houses/362',function(rem){
//   console.log(rem);
// },'json')
// $.get('http://www.anapioficeandfire.com/api/houses/378',function(rem){
//   console.log(rem);
// },'json')

  $('#house-wrapper').on('click','img',function(){
    console.log("you clicked an image");
    $.get("http://www.anapioficeandfire.com/api/houses/"+$(this).attr('id'),function(rem){

      html_str = "";
      html_str += "<p id='name'> Name: "+rem.name+"</p>"
      html_str += "<p id='words'> Words: "+rem.words+"</p>"
      html_str += "<p id='titles'> Titles: "
      for (var i=0;i<rem.titles.length;i++){
      if (i === rem.titles.length-1){
        html_str += rem.titles[i];
        break;
      }
      html_str += rem.titles[i]+", ";
      };
      html_str += "<p>"

      $('#info').html(html_str);

    }, 'json');//end of get
  }); //end of click function


})// end of document.ready
