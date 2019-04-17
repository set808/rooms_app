$(function() {
  $('#new_room_message').on('ajax:success', function(a, b, c) {
    $(this).find('input[type="text"]').val('');

    $('.timestring').each(function() {
        this.textContent = moment($(this).attr("date-time")).fromNow();
    });
  });
  
  $(document).ready(function () {
    $('.timestring').each(function(e) {
    this.textContent = moment($(this).attr("date-time")).fromNow();
    });
  });
});