import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ResultsScreen from './Results'
import List from './List';
import DiseaseInfo from './DieseaseInfo';




class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(){
    super()
    this.change = this.change.bind(this)
    this.alert = this.alert.bind(this)
    this.switchScreen = this.switchScreen.bind(this)
    this.state = {
      input: '',
    }
  }

  alert(){
  }

  switchScreen(){
    const {navigate} = this.props.navigation;
    navigate('Results', {
      symptom: this.state.input,
    });
  }

  change(text){
    this.setState({input: text})
  }

  render() {
    

    return (
      
      <View style={styles.container}>
        <Text style={styles.title}>Syngine</Text>
        <Text style={styles.description}>Search by your symptoss.</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons onPress={this.switchScreen} name="search" size={28} style={styles.search} />
          <TextInput onChangeText={this.change} style={styles.textInput} length={50} editable={true}/>
        </View>
      </View>
    );
  }
}



const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Results: {screen: ResultsScreen},
  DiseaseInfo: {screen: DiseaseInfo}
})

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#160c6b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 140,
  },
  textInput: {
    backgroundColor: '#fff',
    width: '100%',
  },
  title: {
    color: '#fff',
    position: 'absolute',
    top: '18%',
    fontSize: 42,
  },
  description: {
    color: '#fff',
    marginBottom: 18,
    fontSize: 22,
  },
  inputContainer: {
    width: '75%',
    position: 'relative',
  },
  search:{
    color: 'black',
    position:'absolute',
    right:0,
    bottom: 0,
    zIndex: 100,
  }
});
