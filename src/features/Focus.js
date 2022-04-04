import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors.js';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { fontSizes } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Focus App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="I would you like to focus on ..."
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={60}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    margin: spacing.sm,
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    marginLeft: spacing.md,
  },
});
