import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          style={styles.buttonColor}
          size={75}
          title="10"
          onPress={() => onChangeTime(0.1)}
        />
      </View>

      <View style={styles.timingButton}>
        <RoundedButton
          style={styles.buttonColor}
          size={90}
          title="15"
          onPress={() => onChangeTime(0.2)}
        />
      </View>

      <View style={styles.timingButton}>
        <RoundedButton
          style={styles.buttonColor}
          size={105}
          title="20"
          onPress={() => onChangeTime(0.3)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
  buttonColor: {
    color: colors.white,
    backgroundColor: colors.buttonColor,
    border: 'none',
  },
});
