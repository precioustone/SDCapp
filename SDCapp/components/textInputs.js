import React,  {Components}  from 'react';
import { AppRegistry, TextInput} from 'react-native';

import { Icon } from 'react-native-elements';

export default class DetailsInput extends Components{

    constructor(props){
        super(props)
        this.state = {
            text: this.props.placeholder,
        };
    }

    render(){
        return (
            <View style={styles.inputView}>
                {this.props.icon}
                <TextInput 
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    style={styles.input}
                />
            </View> 
        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
        borderColor: '#0e0e0e',
        borderRadius: 50,
    },
    input: {
        padding: 10,
        underlineColorAndroid: 'transparent',
    },
  });
  
