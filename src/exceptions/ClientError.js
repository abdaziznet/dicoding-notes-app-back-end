/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable comma-dangle */

class ClientError extends Error {
   constructor(message, statusCode = 400) {
       super(message);
       this.statusCode = statusCode;
       this.name = 'ClientError';
   }
}
module.exports = ClientError;