import classNames from 'classnames';
import React, { PropTypes, Component } from 'react';


const propTypes = {
  /**
   * Adds `container-fluid` class.
   */
  fluid: PropTypes.bool,
  /**
   * You can use a custom element for this component
   */
  componentClass: PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
  ])
};

const defaultProps = {
  componentClass: 'div',
  fluid: false,
  clsPrefix: 'u-container'
};


class Con extends React.Component {
  render() {
    const { fluid, componentClass: Component, clsPrefix, className, ...others } =
      this.props;

    const tbclass = {
        [`${clsPrefix}`]: !fluid,
        [`${clsPrefix}-fluid`]: fluid
    };

    return (
      <Component
        {...others}
        className={classNames(tbclass, className)}
      >
      { this.props.children }
      </Component>
    );
  }
}

Con.propTypes = propTypes;
Con.defaultProps = defaultProps;

export default Con;
