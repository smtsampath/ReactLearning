$(document).ready(function () {
    $('label.tree-toggler').click(function () {
        $(this).parent().children('ul.tree').toggle(300);
    });
});
$(function () {
    $('#datepicker').datetimepicker({
      format: 'MM/DD/YYYY'
    });
});
$(function () {
   $('#timepicker').datetimepicker({
       format: 'LT'
   });
});
