import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from './Themed';

const Serie = (props: any) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({

 item:{
     padding: 15,
     borderRadius: 10,
     backgroundColor: '#FFF',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginBottom: 20,
         
 },
 itemLeft:{
     flexDirection: 'row',
     alignItems: 'center',
     flexWrap: 'wrap',
 },
 square:{
     width: 24,
     height: 24,
     backgroundColor: '#55BCF6',
     opacity: 0.4,
     
 },
 itemText:{},
 circular:{},

})

export default Serie;