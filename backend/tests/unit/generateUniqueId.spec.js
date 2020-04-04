const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should be able to create a new ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
  });