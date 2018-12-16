import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import List from './List';

export default class ResultsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
      const {params} = navigation.state;
      return({
        title: "Results of " + params.symptom,
      })
    };
    constructor(){
      super();
      this.swtichToDisease = this.swtichToDisease.bind(this)
    }

    swtichToDisease(title,body){
      this.props.navigation.navigate('DiseaseInfo', {
        title: title,
        body: body,
      })
    }

    render() {
      const {navigation} = this.props;
      let symptom = navigation.getParam('symptom');
      return (
        <View style={styles.container}>
          <List onClickDisease={this.swtichToDisease} postUrl={`http://192.168.35.2/react/get.php?symptom=${symptom}`} />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#160c6b',
  },
  })