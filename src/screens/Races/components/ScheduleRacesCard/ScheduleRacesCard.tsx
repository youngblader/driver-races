import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScheduleRacesCardProps } from './types';

const ScheduleRacesCard: FC<ScheduleRacesCardProps> = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.infoStyle}>{item.date}</Text>
      <Text style={styles.infoStyle}>{item.raceName}</Text>
      <Text style={styles.infoStyle}>{item.round}</Text>
      <Text style={styles.infoStyle}>{item.season}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    marginBottom: 2,
  },
  infoStyle: {
    width: 90,
  }
});

export default ScheduleRacesCard;