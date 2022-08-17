import randomGoblin from '../js/app';

test('randomGoblin test', () => {

  expect(String(randomGoblin())).toMatch(/\d+/);
});
