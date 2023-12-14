const { getUserInput, generateSVG } = require('../logogenerator');

describe('getUserInput', () => {
  it('should return user input object', async () => {
    const userInput = await getUserInput();
    expect(userInput).toEqual(expect.any(Object));
  }, 10000); // 10 seconds timeout

  describe('generateSVG', () => {
    it('should return SVG markup', () => {
      const userInput = {
        text: 'ABC',
        textColor: 'black',
        shape: 'circle',
        shapeColor: 'red',
      };
      const svgMarkup = generateSVG(userInput);
      expect(svgMarkup).toEqual(expect.stringContaining('<svg'));
      expect(svgMarkup).toEqual(expect.stringContaining('circle'));
      expect(svgMarkup).toEqual(expect.stringContaining('text'));
    });
  });
});
