jQuery(document).ready(function($) {
    var pageTitle = $("title").text();
    $('audio').on("play", function (me) {
        $("title").text($('.wp-playlist-item.wp-playlist-playing .wp-playlist-item-title').text() + $('.wp-playlist-item.wp-playlist-playing .wp-playlist-item-artist').text() + ' | ' + pageTitle);
    });
     $('audio').on("pause", function (me) {
        $("title").text(pageTitle);
    });   
});
