/**
 *
 * Asynchronously loads the component for TopicBarNavigation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
