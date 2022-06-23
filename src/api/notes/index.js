/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, {
        service,
        validator
    }) => {
        const notesHandler = new NotesHandler(service, validator);
        server.route(routes(notesHandler));
    },
};