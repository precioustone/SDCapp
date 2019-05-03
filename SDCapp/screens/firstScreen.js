import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Avatar } from 'react-native-elements';

export default class FirstScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome To SDC',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <LinearGradient
        colors= {['#00b4db', '#0083b0']}
        style={styles.gradient}>
        <View style={styles.container}>

        <Avatar
          rounded
          source={require('../assets/sdc.jpg')}
        />


          <View style={styles.row}>
            <View style={styles.container}>
              <Button
                title= "New Patient"
                onPress={() => navigate('Details')}
              />
            </View>
            <View style={styles.container}>
              <Button
                style= {{color: '#f00'}}
                title= "Old Patient"
                onPress={() => navigate('Old')}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  container: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  row: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});
