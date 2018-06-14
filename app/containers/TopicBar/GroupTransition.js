import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
import TopicBarTab from "components/TopicBarTab"
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

const GroupTransition = ({ children }) => (
  <TransitionMotion
    styles={children.map((child,i)=>{return {key:child,data: child, style: getStyles()} } )}
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

            {data}
          </div>
        ) }
      </div>
    }
  </TransitionMotion>
);

const styles = {
  background: "black",
  flex: 1,
  height: "10px",
  margin: "0 5px",
  color: "white"
}

export default GroupTransition;