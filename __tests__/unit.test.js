// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Test isPhoneNumber
    test('isPhoneNumber1', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });
    test('isPhoneNumber2', () => {
        expect(functions.isPhoneNumber('626-420-7888')).toBe(true);
    });
    test('isPhoneNumber3', () => {
        expect(functions.isPhoneNumber('54654546')).toBe(false);
    });
    test('isPhoneNumber4', () => {
        expect(functions.isPhoneNumber('89')).toBe(false);
    });

// test isEmail
    test('isEmail1', () => {
        expect(functions.isEmail('kec022@ucsd.edu')).toBe(true);
    });
    test('isEmail2', () => {
        expect(functions.isEmail('kec022@eng.ucsd.edu')).toBe(false);
    });
    test('isEmail3', () => {
        expect(functions.isEmail('www.ucsd.edu')).toBe(false);
    });
    test('isEmail4', () => {
        expect(functions.isEmail('kx@')).toBe(false);
    });

// test isStrongPassword
    test('isStrongPassword1', () => {
        expect(functions.isStrongPassword('AAwer4154')).toBe(true);
    });
    test('isStrongPassword2', () => {
        expect(functions.isStrongPassword('Qsdf12334')).toBe(true);
    });
    test('isStrongPassword3', () => {
        expect(functions.isStrongPassword('1')).toBe(false);
    });
    test('isStrongPassword4', () => {
        expect(functions.isStrongPassword('pppppppppppppppppppppppppppppppppppppp')).toBe(false);
    });

// test isDate
    test('isDate1', () => {
        expect(functions.isDate('1/1/2002')).toBe(true);
    });
    test('isDate2', () => {
        expect(functions.isDate('11/11/2222')).toBe(true);
    });
    test('isDate3', () => {
        expect(functions.isDate('1/1/1')).toBe(false);
    });
    test('isDate4', () => {
        expect(functions.isDate('000/10000')).toBe(false);
    });

// test isHexColor
    test('isHexColor1', () => {
        expect(functions.isHexColor('#000000')).toBe(true);
    });
    test('isHexColor2', () => {
        expect(functions.isHexColor('#FFFFFF')).toBe(true);
    });
    test('isHexColor3', () => {
        expect(functions.isHexColor('#00000')).toBe(false);
    });
    test('isHexColor4', () => {
        expect(functions.isHexColor('#BBBBBBBBB')).toBe(false);
    });