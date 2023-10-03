import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({icon, styleConfigs, onPress, children}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{justifyContent: 'center', alignItems: 'center', ...styleConfigs}}>
      {children ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Image source={icon} style={styles.image} />
      )}
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
