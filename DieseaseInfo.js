import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';

export default class DiseaseInfo extends React.Component {
    constructor(){
        super()
    }
    static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return ({
        title: params?params.title:"Title",
    })
    };

    componentWillMount(){

    }
    render() {
      const {navigation} = this.props;
      let title = navigation.getParam('title');
      let body = navigation.getParam('body');
      return (
        <View style={styles.container}>
        <Text style={styles.header}>
            {title}
        </Text>
        <Text style={styles.body}>
            {body}
        </Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#160c6b',
      padding:18,
    },
    header: {
        color:'white',
        fontSize: 42,
        marginBottom:18,
    },
    body: {
        fontSize:20,
        color: 'white',
    }
  })