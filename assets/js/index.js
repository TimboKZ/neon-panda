/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2018
 * @license MIT
 */

Prism.plugins.autoloader.languages_path = '/assets/js/prism/components/';

$(document).ready(function () {

    var postListElement = document.getElementById('post-list');
    if (postListElement) {
        $('.post-list-controls-button').click(function (event) {
            event.preventDefault();
        });
        var mixer = mixitup(postListElement, {
            selectors: {
                target: '.post-list-item-wrapper',
                control: '.post-list-controls-button',
            },
            animation: {
                effects: 'fade',
                duration: 400,
            },
        });
        mixer.filter('*');
    }

    var $body = $('body');
    if ($body.hasClass('post-template') || $body.hasClass('page-template')) {
        var $content = $('.content');

        // Make all links open in new windows,
        // except those prefixed with ~
        // var $postContentLinks = $content.find('a');
        // $.each($postContentLinks, function (index, link) {
        //     var $link = $(link);
        //     var text = $link.text();
        //     var href = $link.attr('href');
        //     if (/^~/.test(text)) {
        //         $link.text(text.substr(1));
        //     }
        //     if (!/^#/.test(href)) {
        //         $(link).attr('target', '_blank');
        //     }
        // });

        var $headings = $content.find('h1, h2');
        $.each($headings, function (index, heading) {
            var $heading = $(heading);
            var id = $heading.attr('id');
            var tag = $heading.prop('tagName');
            var symbol = tag === 'H1' ? '#' : '>';
            $heading.addClass('anchor');
            $heading.prepend('<a class="heading-anchor" href="#' + id + '">' + symbol + '</a> &nbsp;');
        });
    }

});

SocialShareKit.init();
