import React, { FC } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const DetailsRacer: FC = ({ route }) => {
  const racer = route.params;
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>DetailsRacer - {racer.givenName} {racer.familyName} </Text>
      <Text style={styles.text}>PermanentNumber: {racer.permanentNumber}</Text>
      <Text style={styles.text}>Nationality: {racer.nationality}</Text>
      <Text style={styles.text}>Dob: {racer.dateOfBirth}</Text>
      <Text style={styles.text}>Information: {racer.url}</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 15,
  }
});

export default DetailsRacer;
