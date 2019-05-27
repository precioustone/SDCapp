import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo';
//import { Avatar } from 'react-native-elements';

export default class FirstScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome To SDC',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity 
         onPress={() => navigate('Details')}
         style={styles.touchable}>
          <LinearGradient
            colors={['#00b4db','#0083b0']}
            style={styles.gradient}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>NEW PATIENT</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigate('Details')}
          style={styles.touchable}>
          <View style={styles.buttonTwo}>
            <Text style={styles.buttonTextTwo}>RETURN PATIENT</Text>
          </View>
        </TouchableOpacity>
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
  touchable: {
    marginTop: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  button: {
    width: 260,
    alignItems: 'center',
  },
  buttonTwo: {
    width: 260,
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00b4db',
  },
  buttonText: {
    color: 'white',
    padding: 20,
  },
  buttonTextTwo: {
    color: '#0083b0',
    padding: 20,
  }
});
