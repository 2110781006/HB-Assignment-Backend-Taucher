const assert = require('assert');
const mathematics = require('../src/mathematics');

describe('Sum check if parameter is a array', () => {
    it('should return \'not an array\'', () => {
        assert.equal(mathematics.sumOfValues(), 'not an array');
        assert.equal(mathematics.sumOfValues(1), 'not an array');
    });
});

describe('Sum of positive values', () => {
    it('should return 70', () => {
        assert.equal(mathematics.sumOfValues([10,20,40]), 70);
    });
});

describe('Sum of negative values', () => {
    it('should return -70', () => {
        assert.equal(mathematics.sumOfValues([-10,-20,-40]), -70);
    });
});

describe('Sum of mixed values', () => {
    it('should return -30', () => {
        assert.equal(mathematics.sumOfValues([-10,20,-40]), -30);
    });
});

describe('Avg check if parameter is a array', () => {
    it('should return \'not an array\'', () => {
        assert.equal(mathematics.avgOfValues(), 'not an array');
        assert.equal(mathematics.avgOfValues(1), 'not an array');
    });
});

describe('Avg of positive values', () => {
    it('should return 70', () => {
        assert.equal(Math.round(mathematics.avgOfValues([10,20,40])), 23);
    });
});

describe('Avg of negative values', () => {
    it('should return -70', () => {
        assert.equal(Math.round(mathematics.avgOfValues([-10,-20,-40])), -23);
    });
});

describe('Avg of mixed values', () => {
    it('should return -10', () => {
        assert.equal(mathematics.avgOfValues([-10,20,-40]), -10);
    });
});
    