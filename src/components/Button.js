import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({icon, styleConfigs, onPress, children}) => {
  // Determine whether to render text or an image based on 'children' and 'icon' props
  const renderContent = () => {
    if (children) {
      return <Text style={styles.text}>{children}</Text>;
    } else if (icon) {
      return <Image source={icon} style={styles.image} />;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{justifyContent: 'center', alignItems: 'center', ...styleConfigs}}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  image: {
    height: 25,
    width: 25,
    tintColor: '#fff',
  },
});
