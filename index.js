/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2018
 * @license MIT
 */

var App = require('ghost-app');

var NeonPandaApp = App.extend({
    install: function () {
    },
    uninstall: function () {
    },
    activate: function () {
        console.log('Activating Neon Panda app.');
        this.ghost.helpers.register('panda_excerpt', this.pandaExcerpt);
    },
    deactivate: function () {
    },
    pandaExcerpt: function () {
        var excerpt = content.toString().match(/<p>.*?<\/p>/gi);
        var minLength = 20;
        var maxLength = 50;
        if (excerpt) {
            var stripHtml = excerpt[0].replace(/<(?:.|\n)*?>/gm, '');
            var words = stripHtml.split(' ');
            var length = Math.min(maxLength, Math.max(minLength, Math.round(words.length)));
            words = words.slice(0, length);
            if (words.length === length && !/.*?[?!.]$/i.test(words[words.length - 1])) {
                words[words.length - 1] = words[words.length - 1].replace(/[,;]$/gi, '') + '...';
            }
            return words.join(' ').trim();
        } else {
            return '';
        }
    },
});

module.exports = NeonPandaApp;
