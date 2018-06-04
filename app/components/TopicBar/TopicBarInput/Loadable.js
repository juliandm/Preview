/**
 *
 * Asynchronously loads the component for TopicBarInput
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
