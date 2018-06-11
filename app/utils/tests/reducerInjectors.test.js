/**
 * Test injectors
 */

import { memoryHistory } from 'react-router-dom';
import identity from 'lodash/identity';

import configureStore from '../../configureStore';

import getInjectors, {
  injectReducerFactory,
} from '../reducerInjectors';

// Fixtures
