import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class FirstScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome To SDC',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.row}>
          <View style={styles.container}>
            <Button
              title= "New Patient"
              onPress={() => navigate('Details')}
            />
          </View>
          <View style={styles.container}>
            <Button
              title= "Old Patient"
              onPress={() => navigate('Old')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});
