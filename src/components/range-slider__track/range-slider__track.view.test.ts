import { IRangeSliderState } from '../reducer';
import { getSliderValues } from './range-slider__track.view';

describe('range-slider__track', () => {
  describe('getSliderValues', () => {
    test('MAX: 10, MIN: 0, STEP: 0.4', () => {
      const MAX = 10;
      const MIN = 0;
      const STEP = 0.4;
      const PREFIX = '';

      const result = getSliderValues({
        min: MIN,
        max: MAX,
        step: STEP,
        prefix: PREFIX,
      } as IRangeSliderState);
      expect(result.length).toBeGreaterThan(0);
    });
  });
});