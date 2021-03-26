const wordToNumPt = require('./index');

test('um to equal 1', () => {
    const v = wordToNumPt.text2num('um')
    expect(v).toBe(1);
});

test('vinte to equal 20', () => {
    const v = wordToNumPt.text2num('vinte')
    expect(v).toBe(20);
});

test('vinte três to equal 23', () => {
    const v = wordToNumPt.text2num('vinte três')
    expect(v).toBe(23);
});

test('vinte três to equal 23', () => {
    const v = wordToNumPt.text2num('vinte três')
    expect(v).toBe(23);
});

test('cento e oito to equal 108', () => {
    const v = wordToNumPt.text2num('cento e oito')
    expect(v).toBe(108);
});

test('duzentos e nove to equal 209', () => {
    const v = wordToNumPt.text2num('duzentos e nove')
    expect(v).toBe(209);
});

test('duzentos e trinta e sete to equal 237', () => {
    const v = wordToNumPt.text2num('duzentos e trinta e sete')
    expect(v).toBe(237);
});

test('setecentos e trinta e oito mil to equal 738000', () => {
    const v = wordToNumPt.text2num('setecentos e trinta e oito mil')
    expect(v).toBe(738000);
});

test('setecentos e trinta e oito mil e novecentos e quarenta e sete to equal 738947', () => {
    const v = wordToNumPt.text2num('setecentos e trinta e oito mil e novecentos e quarenta e sete')
    expect(v).toBe(738947);
});

test('cento e vinte e seis milhões e setecentos e trinta e oito mil e novecentos e quarenta e sete to equal 126738947', () => {
    const v = wordToNumPt.text2num('cento e vinte e seis milhões e setecentos e trinta e oito mil e novecentos e quarenta e sete')
    expect(v).toBe(126738947);
});