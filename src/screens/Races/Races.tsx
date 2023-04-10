import React, { FC, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';

import { getRacesScheduleThunk } from '../../store/reducers/racesScheduleReducer/actions';

import TableHeaders from '../../components/TableHeaders/TableHeaders';
import ScheduleRacesCard from './components/ScheduleRacesCard/ScheduleRacesCard';

import { screenWidth } from '../../styles';
import { scheduleTableHeaders } from '../../config';

const listHeaderComponent = () => (
  <TableHeaders data={scheduleTableHeaders} />
);

const Races: FC = () => {
  const dispatch = useDispatch();
  const { schedule } = useSelector(state => state.schedule);

  useEffect(() => {
    dispatch(getRacesScheduleThunk());
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tableHeader}>
        <Text>Schedule Races</Text>
      </View>

      <FlatList
        data={schedule}
        ListHeaderComponent={listHeaderComponent()}
        contentContainerStyle={styles.flatlistInsets}
        renderItem={({ item }) => (
          <ScheduleRacesCard item={item} />
        )}
        keyExtractor={item => item.raceName}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
  },
  tableHeader: { 
    marginBottom: 20, 
    alignItems: 'center', 
  },
  flatlistInsets: {
    width: screenWidth, 
    justifyContent: 'space-between',
  }
});

export default Races;
