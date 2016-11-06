/**
 * Created by Nuwak on 06.11.2016.
 */
$(document).ready(function () {
    $('.course__box--footer label').on('click', function (e) {

        $(this).parent().parent().addClass('course__checked')

        var element = $(this);
        setTimeout(function () {
            element.parent().parent().parent().hide()
        }, 1000);
    })
});