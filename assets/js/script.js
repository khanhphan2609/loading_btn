$(document).ready(function () {
    $('#loadingBtn1').on('click', function () {
        Loader1();

        setTimeout(function () {
            Loader1();
        }, 2000);
    });
    $('#loadingBtn2').on('click', function () {
        Loader2();

        setTimeout(function () {
            Loader2();
        }, 2000);
    });
    $('#loadingBtn3').on('click', function () {
        Loader3();

        setTimeout(function () {
            Loader3();
        }, 2000);
    });
});

function Loader1() {
    $('.loader1').toggleClass('hide');
}

function Loader2() {
    $('.loader2').toggleClass('hide');
}

function Loader3() {
    $('.loader3').toggleClass('hide');
}