import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/Colors';

const CheckBox = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          {backgroundColor: checked ? COLORS.red : COLORS.secondary00},
        ]}>
        {checked && <Text style={styles.checkMark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: COLORS.primary00,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 3
  },
  checkMark: {
    color: 'white',
  },
});
