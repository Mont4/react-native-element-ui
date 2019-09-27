import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

import variables from 'react-native-element-ui/element_variables';
import Text from './Text';

const styles = StyleSheet.create({
  base: {
    fontSize: variables.fontSizeH1,
  },
});

class H1 extends Component {
  render() {
    const style = StyleSheet.flatten([styles.base, this.props.style]);

    return (
      <Text {...this.props} style={style}>
        {this.props.children}
      </Text>
    );
  }
}

H1.propTypes = {
  bold: PropTypes.bool,
};

H1.defaultProps = {
  bold: false,
};

export default H1;
