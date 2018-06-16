/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2018
 * @license MIT
 */

Prism.plugins.autoloader.languages_path = '/assets/js/prism/components/';

$(document).ready(function () {

    // Load the scripts and execute functions
    // defined in the post body
    var loadScripts = function (array, accumulator) {
        if (!accumulator) {
            accumulator = 0;
        }
        if (accumulator === array.length) {
            return;
        }
        var script = array[accumulator];
        if (typeof script === 'function') {
            script($);
            loadScripts(array, ++accumulator);
        } else if (typeof script === 'string') {
            $.getScript(script, function () {
                loadScripts(array, ++accumulator);
            });
        } else {
            throw new Error('Invalid script.');
        }
    };
    loadScripts(window.scripts);

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

    $('div.post-list-item-image-thumbnail').Lazy({
        threshold: 2000,
        thumbnailLoader: function (element) {
            var bgUrl = element.data('bg');
            if (!bgUrl) return;

            var image = new Image();
            image.onload = function () {
                element.css('background-image', 'url(' + bgUrl + ')');
                element.addClass('loaded');
            };
            image.src = bgUrl;
        },
    });

});

SocialShareKit.init();
