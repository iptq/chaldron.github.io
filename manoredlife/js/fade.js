$(function() {
$('#fade img').each(function(i) {
$(this).delay((i++) * 125).fadeTo(1000, 1); })
});