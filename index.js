/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2018
 * @license MIT
 */

const App = require('ghost-app');

const NeonPandaApp = App.extend({
    activate: () => {
        console.log('Activating Neon Panda app.');
        this.ghost.helpers.register('panda_excerpt', this.pandaExcerpt);
    },
    pandaExcerpt: () => 'Hello Pandas!',
});

module.exports = NeonPandaApp;
