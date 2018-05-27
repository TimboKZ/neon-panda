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
        return 'Hello Pandas!';
    },
});

module.exports = NeonPandaApp;
