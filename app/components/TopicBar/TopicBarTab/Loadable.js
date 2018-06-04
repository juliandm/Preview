/**
 *
 * Asynchronously loads the component for TopicBarTab
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
