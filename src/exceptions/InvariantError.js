/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable comma-dangle */

const ClientError = require('./ClientError');

class InvariantError extends ClientError {
    constructor(message) {
        super(message);
        this.name = 'InvariantError';
    }
}

module.exports = InvariantError;