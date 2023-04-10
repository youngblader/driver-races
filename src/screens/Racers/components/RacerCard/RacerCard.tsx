import React, { FC } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RacerCardProps } from './types';

const RacerCard: FC<RacerCardProps> = ({ item, onPress }) => {

  const onPressNavigate = (screen: string) => {
    onPress(screen, item);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => onPressNavigate('DetailsRacer')}>
        <Text style={styles.infoStyle}>{item.givenName}</Text>
      </TouchableOpacity>

      <Text style={styles.infoStyle}>{item.nationality}</Text>
      <Text style={styles.infoStyle}>{item.dateOfBirth}</Text>
      <TouchableOpacity onPress={() => onPressNavigate('Races')}>
        <Text numberOfLines={1} style={styles.infoStyle}>{item.url}</Text>
      </TouchableOpacity>
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

export default RacerCard;