$(function () {
    console.log('window loaded');
    var count = $('#called-count');

    setInterval(function() {
        var num = parseInt(count.text(), 10);
        count.text(num + 1);
        console.log('count: %s', num);
    }, (1000 * 60));
});
