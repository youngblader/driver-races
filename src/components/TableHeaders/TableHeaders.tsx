import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TableHeadersProps } from './types';

const TableHeaders: FC<TableHeadersProps> = ({ data }) => (
  <View style={styles.tableContainer}>
    {data.map((item => (
      <View key={item} style={styles.contentContainer}>
        <Text>{item}</Text>
      </View>
    )))}
  </View>
);

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, 
  },
  contentContainer: {
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 2, 
  }
});

export default React.memo(TableHeaders);