$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const list_name = [];
    const id = [];
    $('input[type=checkbox]:checked').each(function () {
      list_name.push($(this).attr('data-name'));
      id.push($(this).attr('data-id'));
    });
    if (list_name.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(list_name.join(', '));
    }
    console.log(id);
  });
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json',
  success: function (json) {
    $('#api_status').addClass('available');
  },

  error: function (xhr, status) {
    console.log('error ' + status);
  }

});
