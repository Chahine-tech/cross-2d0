import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {Button} from 'native-base'

class Profile extends Component {
    render() {
        return (
            <View style={{height: 667, backgroundColor: "#B8D8DE"}}>
                <View style={stylings.mainBody}>
                    <Image style={stylings.imgProfile} source={require("")}></Image>
                    <Text style={stylings.name}>Chahine</Text>
                    <Text style={stylings.userName}>Bibi</Text>
                    <View>
                        <Text style={stylings.birthDate}></Text>
                    </View>
                    <View>
                        <Text style={stylings.Gender}></Text>
                    </View>
                    <Button onPress={this.myValidate} style={stylings.buttonLogOut} block>
                        <Text style={stylings.labelbtn}>Log Out</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const stylings = {
    mainBody: {
        marginTop: 30,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 70,
    },
    imgProfile: {

    },
    name: {
        color: "white",
        fontSize: 22,
        marginLeft: 100,
        marginTop: 12,
    },
    userName: {
        color: white,
        fontSize: 16,
        marginLeft: 110,
        marginTop: 4,
    },
    birthDate: {

    },
    Gender: { 

    },
    buttonLogOut: {
        width: 300,
        height: 50,
        marginLeft: 14,
        marginTop: 40,
        backgroundColor: "",
    },
    labelbtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },
}

export default Profile