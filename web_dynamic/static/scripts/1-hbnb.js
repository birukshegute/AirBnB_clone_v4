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
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });
});
