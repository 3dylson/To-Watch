import { HeaderStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, } from 'react-native';

import { View } from '../components/Themed';
import Serie from '../components/Serie';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function ListScreen() {
  const [serie, setSerie] = React.useState();

  const handleAddSerie = () => {
    console.log(serie);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/*This is where the series will go!*/}  
          <Serie text={'Jujutsu Kaisen'}/>
          <Serie text={'Attack on Titan'}/>
        </View>

      </View>

      {/*Write a serie*/}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'What are you watching?'} value={serie} 
          onChangeText={(text:any) => setSerie(text)}/>

          <TouchableOpacity onPress={() => handleAddSerie()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

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
items:{
  marginTop: 30,
},
writeTaskWrapper:{
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
},
input:{
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper:{
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,

},
addText:{},

});
