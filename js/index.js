$('#menu1').click(function () {
    $('#title').text("Portofolio");
    $('.personal').show();
    $('.personal').addClass("active");
    $('.rpl-upi').hide();
    $('.rpl-upi').removeClass("active");
    $('.kbk-rpl').hide();
    $('.kbk-upi').removeClass("active");
})

$('#menu2').click(function () {
    $('#title').text("RPL UPI Cibiru");
    $('.personal').hide();
    $('.personal').removeClass("active");
    $('.rpl-upi').show();
    $('.rpl-upi').addClass("active");
    $('.kbk-rpl').hide();
    $('.kbk-upi').removeClass("active");

})

$('#menu3').click(function () {
    $('#title').text("KBK RPL UPI Cibiru");
    $('.personal').hide();
    $('.personal').removeClass("active");
    $('.rpl-upi').hide();
    $('.rpl-upi').removeClass("active");
    $('.kbk-rpl').show();
    $('.kbk-rpl').addClass("active");
})

