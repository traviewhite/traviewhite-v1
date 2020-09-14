$('document').ready(function(){
  var selector = '.filter span';

  $(selector).on('click', function(){
      $(selector).removeClass('active');
      $(this).addClass('active');
  });
});
