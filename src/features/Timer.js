import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1); //counting backwards
  const [minutes, setMinutes] = useState(0);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={{ marginTop: spacing.xl }}>
        <Text style={styles.title}>Focus on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={{ marginTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ marginTop: spacing.lg, height: spacing.md }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            style={styles.buttonColor}
            title="Start"
            onPress={() => setIsStarted(true)}
          />
        )}

        {isStarted && (
          <RoundedButton
            style={styles.buttonColor}
            title="Pause"
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.clearSubjectWrapper}>
        <RoundedButton
          style={styles.backButton}
          size={70}
          title="Back"
          onPress={clearSubject}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontSize: fontSizes.xl,
    textAlign: 'center',
    margin: spacing.md,
  },
  contdown: {
    justifyContent: 'center',
    marginTop: spacing.xxl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: spacing.xxxl,
    marginBottom: spacing.xxxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backButton: {
    marginTop: spacing.md,
    backgroundColor: colors.buttonColor2,
    border: 'none',
  },
  buttonColor: {
    backgroundColor: colors.buttonColor2,
    border: 'none',
  },
});
