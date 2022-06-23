/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
    constructor(message) {
        super(message, 404);
        this.name = 'NotFoundError';
    }
}

module.exports = NotFoundError;