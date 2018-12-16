import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';


export default class List extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch(this.props.postUrl).then(response => response.json())
            .then(responseJson => this.setState({ data: responseJson })
            )
            .catch(error => console.log(error)
            )
    }
    render() {
        let renderList = this.state.data.map(d => {
            return (
                <View  key={d.ID}>
                    <Text onPress={() => this.props.onClickDisease(d.Name,d.Description)} style={styles.disease}>{d.Name}</Text>
                </View>
            )
        })

        if (renderList.length == 0){
            renderList = <Text style={{...styles.disease,textAlign:'center'}} >No results!</Text>;
        }
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Diseases
                    </Text>
                </View>
                <View style={styles.diseases}>
                    {renderList}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    disease: {
        color: 'white',
        fontSize: 20,
        padding: 4,
        marginBottom:8,

    },
    diseases: {
        flex:4,
        borderTopWidth: 2,
        borderColor: '#fff',
        padding: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    title: {
        color: '#fff',
        fontSize: 42,
      },
})