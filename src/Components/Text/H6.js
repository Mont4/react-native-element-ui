import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

import variables from 'react-native-element-ui/element_variables';
import Text from './Text';

const styles = StyleSheet.create({
  base: {
    fontSize: variables.fontSizeH6,
  },
});

class H6 extends Component {
  render() {
    const style = StyleSheet.flatten([styles.base, this.props.style]);

    return (
      <Text {...this.props} style={style}>
        {this.props.children}
      </Text>
    );
  }
}

H6.propTypes = {
  bold: PropTypes.bool,
};

H6.defaultProps = {
  bold: false,
};

export default H6;
