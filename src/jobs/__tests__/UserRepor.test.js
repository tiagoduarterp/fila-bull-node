const UserReport = require('../UserReport')

describe('UseReport dictionaries', () => {
    test('key dict', () => {
        expect(UserReport.key).toBe('UserReport')
    });

    test('options dict', () => {
        expect(UserReport.options).toStrictEqual({"delay": 5000})
    });

    test('handle dict', () => {
        expect(UserReport.handle('data')).toStrictEqual({})
    });
});