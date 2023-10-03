import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {COLORS} from '../constants/Colors';

const AlertModal = ({onClose, message, onPress, isVisible}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Alert !</Text>
          <Text
            style={
              styles.modalMessage
            }>{`Are you sure! You want to ${message}.`}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, {backgroundColor: COLORS.red}]}
              onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, {backgroundColor: COLORS.secondary11}]}
              onPress={onPress}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.secondary11,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    color: COLORS.secondary00,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
