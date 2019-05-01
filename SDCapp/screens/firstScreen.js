import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class FirstScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome To SDC',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View>
          <Button
            title= "New Patient"
            onPress={() => navigate('Details')}
          />
          <Button
            title= "New Patient"
          />
        </View>
      </View>
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
});
