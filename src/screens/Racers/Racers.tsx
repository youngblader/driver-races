import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getRacersThunk } from '../../store/reducers/racersReducer/actions';
import { IRacer } from '../../store/reducers/racersReducer/types';

import Pagination from './components/Pagination/Pagination';
import RacerCard from './components/RacerCard/RacerCard';
import TableHeaders from '../../components/TableHeaders/TableHeaders';

import { RacersProps } from './types';
import { headerTable } from '../../config';
import { screenWidth } from '../../styles';

const listHeaderComponent = () => (
 <TableHeaders data={headerTable} />
);

const Racers: FC<RacersProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { racers, total } = useSelector(state => state.racers);

  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(10);
  const offsetValue: number = page * offset;

  const onPress = (screen: string, item: IRacer) => {
    navigation.navigate(screen, item);
  };

  const onPagination = async (pageNumber: number) => {
    setPage(pageNumber);
    dispatch(getRacersThunk(25, offsetValue));
  };

  useEffect(() => {
    dispatch(getRacersThunk(25, offsetValue));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tableHeader}>
        <Text>Racers Table</Text>
      </View>
      
      <FlatList
        data={racers}
        ListHeaderComponent={listHeaderComponent()}
        contentContainerStyle={styles.flatlistInsets}
        renderItem={({ item }) => (
          <RacerCard 
            item={item} 
            onPress={onPress}
          />
        )}
        keyExtractor={item => item.driverId}
      />

      <Pagination 
        amount={total}
        offset={offset}
        pagination={onPagination}
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

export default Racers;
