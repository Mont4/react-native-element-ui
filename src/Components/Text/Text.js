import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, I18nManager, Text as RNText} from 'react-native';

import element_variables from 'react-native-element-ui/element_variables';
import {sizeNormalizer} from 'react-native-element-ui/src/helpers/sizeNormalizer';

const styles = StyleSheet.create({
  base: {
    // fontFamily: element_variables.fontFamily,
    fontSize: element_variables.fontSizeText,
    color: element_variables.color.text.primary,

    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',

    ...Platform.select({
      ios: {
        textAlign: 'justify',
      },
    }),
  },
  bold: {
    ...Platform.select({
      ios: {
        // fontFamily: element_variables.fontFamily,
        fontWeight: element_variables.boldFontWeight,
      },
      android: {
        // fontFamily: element_variables.fontFamilyBold,
      },
    }),
  },
});

class Text extends Component {
  render() {
    const style = StyleSheet.flatten([
      styles.base,
      this.props.style,

      // bold condition
      this.props.bold ? styles.bold : {},
    ]);

    if (element_variables.fontSizeCompatible) {
      style.fontSize = sizeNormalizer(style.fontSize);
    }

    return (
      <RNText {...this.props} style={style}>
        {this.props.children}
      </RNText>
    );
  }
}

Text.propTypes = {
  bold: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
};

export default Text;
