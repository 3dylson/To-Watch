import { HeaderStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Serie from '../components/Serie';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        {/* <Text style={styles.sectionTitle}>My series 😍 </Text> */}

        <View style={styles.items}>
          {/*This is where the series will go!*/}  
          <Serie text={'Serie 1'}/>
          <Serie text={'Serie 2'}/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
items:{},
});
