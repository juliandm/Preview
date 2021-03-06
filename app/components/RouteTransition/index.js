import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
//https://github.com/chenglou/react-motion/issues/287
const willEnter = () => ({
  opacity: 0,
  scale: 0.98
});

const willLeave = () => ({
  opacity: spring(0),
  scale: spring(1.02)
});

const getStyles = () => ({
  opacity: spring(1),
  scale: spring(1)
});

const RouteTransition = ({ children: child, pathname }) => (
  <TransitionMotion
    styles={ [{
      key: pathname,
      style: getStyles(),
      data: { child }
    }] }
    willEnter={ willEnter }
    willLeave={ willLeave }
  >
    { (interpolated) =>
      <div>
        { interpolated.map(({ key, style, data }) =>
          <div
            key={ `${key}-transition` }
            style={ {
              ...styles.wrapper,
              opacity: style.opacity,
              transform: `scale(${style.scale})`
            } }
          >
            { data.child }
          </div>
        ) }
      </div>
    }
  </TransitionMotion>
);

var styles = {
  wrapper: {
    position: 'absolute',
    width: '100%'
  }
};

export default RouteTransition;