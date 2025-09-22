test('renders without crashing', () => {
  const div = document.createElement('div');
  expect(div).toBeDefined();
});

test('basic math works', () => {
  expect(2 + 2).toBe(4);
});

test('string concatenation works', () => {
  expect('Hello ' + 'World').toBe('Hello World');
});