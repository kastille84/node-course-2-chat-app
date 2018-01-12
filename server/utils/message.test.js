var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('johnny D', "Your car is on fire");
        // assert from matches value we passed in
        expect(message.from).toBe('johnny D');
        // assert text matches value we passed in
        expect(message.text).toBe('Your car is on fire');
        // assert createdAt is a num
        expect(message.createdAt).toBeA('number');
       
    });
});