import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
//https://github.com/chenglou/react-motion/issues/287


class GroupTransition extends React.Component {

  render() {
    console.log("RENDER GROUP", this.props.id)
    const { children, data, attributes, wrapperStyles={}, childWrapperStyles={} } = this.props
    const enterObj = {}, leaveObj={}, stylesObj={}
    attributes.forEach((id,i) => {
      enterObj[id] = data[0][i]
      leaveObj[id] = spring(data[1][i])
      stylesObj[id] = spring(data[2][i])
    });
    const willEnter = () => enterObj;
    
    const willLeave = () => leaveObj;

    return <TransitionMotion
      styles={children.map((child,i)=>{return {key:child.key, data: {child}, style: stylesObj} } )}
      willEnter={ willEnter }
      willLeave={ willLeave }
    >
      { (interpolated) =>
        <div style={wrapperStyles} >
          { interpolated.map(({ key, style, data }) =>
            <div
              key={ `${key}-transition` }
              style={ {
                ...childWrapperStyles,
                opacity: style.opacity,
                height: `${style.height}px`,
                width: `${style.width}%`,
                transform: `scale(${style.scale})`
              } }
            >
              {data.child}
            </div>
          ) }
        </div>
      }
    </TransitionMotion>
  }
};

const styles = {
  background: "black",
}

export default GroupTransition;