const test = require('tap').test;
const InvalidValue = require('../../src/lib/InvalidValue');

test('InvalidValue is a custom error', (t) => {
    t.isA(new InvalidValue(), 'object');
    t.isA(new InvalidValue(), 'Error');
    t.isA(new InvalidValue(), Error);

    t.end();
});

test('InvalidValue has a default meessage', (t) => {
    t.equals( (new InvalidValue()).message, 'Invalid value.');

    t.end();
});

test('InvalidValue can have a custom message', (t) => {
    t.equals( (new InvalidValue('Nope')).message, 'Nope');

    t.end();
});

