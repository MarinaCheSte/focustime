import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.title}>Things you've focused on will be here</Text>
    );

  const renderItem = ({ item }) => {
    return <Text style={styles.item}> - {item}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you've focused on:</Text>

      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: spacing.xxl,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginLeft: spacing.md,
  },
});
