(function(module) {


function setTeasers(){
  $('.aboutme  *:nth-of-type(n+2)').hide();
  $('.aboutme').on('click', 'a.readmore', function(event) {
       event.preventDefault();
       $('.aboutme *').fadeIn();
       $(this).hide();
     });}
  $(document).ready(function() {
    setTeasers();
    $(".btn-find").addClass("animated bounce")
  });
})(window);
