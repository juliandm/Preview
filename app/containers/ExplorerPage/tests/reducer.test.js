
import { fromJS } from 'immutable';
import explorerPageReducer from '../reducer';

describe('explorerPageReducer', () => {
  it('returns the initial state', () => {
    expect(explorerPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
