import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { goToAuth } from './navigation';
import {Navigation} from 'react-native-navigation';
import Service from './Service';

import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginManager } from 'react-native-fbsdk';

const myIcon = (<Icon name="rocket" size={30} color="#900" />);

export default class Home extends Component {
  logout = () => {
    Service.removeItem("USER_KEY")
      .then((result) => {
        console.log(result);
        goToAuth();
      })
      .catch((error) => {
        console.log(error);
      });
    LoginManager.logOut();
  }
  render() {
    console.log('props; ', this.props)
    return (
      <View style={styles.container}>
        <Text>Hola desde Home screen.</Text>
        <Button
          onPress={this.logout}
          title="Cerrar Sesión"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
                options: {
                  topBar: {
                    title: { 
                      text: 'Screen2', 
                      alignment: 'center' 
                    },
                  },
                },
              }
            });
          }}
          title="Ver siguiente screen"
        />
        {myIcon}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})