import React, { FC } from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import { PaginationProps } from './types';

const Pagination: FC<PaginationProps> = ({ amount, offset, pagination }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i < (amount / offset); i++) {
    pageNumbers.push(i);
  }

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}>
      <View style={styles.paginationContainer}>
        {pageNumbers.map((item) => {
          return (
            <Button key={item} title={`${item}`} onPress={() => pagination(item)}/>
          )          
        })}
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexGrow: 1, 
    flexDirection: 'row',
  },
});

export default Pagination;