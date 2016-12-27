import classNames from 'classnames';
import React, { PropTypes, Component } from 'react';


const propTypes = {
  componentClass: PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
  ])
};

const defaultProps = {
  componentClass: 'div',
  clsPrefix: 'u-row'
};


class Row extends Component {
  render() {
    const { componentClass: Component, clsPrefix, className, ...others } = this.props;

    const bsclass = `${clsPrefix}`;

    return (
      <Component
        {...others}
        className={classNames(bsclass, className)}
      >
      { this.props.children }
      </Component>
    );
  }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
