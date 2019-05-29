import React from 'react';
import { Button, TextInput,ScrollView,StyleSheet, Text, View } from 'react-native';


import { Icon } from 'react-native-elements';


import TextInput from '../components/textInputs.js';

export default class DetailScreen extends React.Component {

  static navigationOptions = {
    title: 'PLEASE ENTER DETAILS',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <TextInput
           placeholder= 'Fullname' 
            icon={<Icon
              name='user'
              type='font-awesome' 
            />}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {

  },
});
