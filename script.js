$(document).ready(function(){
  $(".btn-find").addClass("animated bounce")
});
$('#more').click(function(e) {
    e.stopPropagation();
    $('h1').css({
        'height': 'auto'
    })
});

$(document).click(function() {
    $('h1').css({
        'height': '40px'
    })
})
