import React, { Component } from "react";
import {StatusBar,YellowBox} from 'react-native'
//import HockeyApp, { AuthenticationType } from 'react-native-hockeyapp'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body, Button, Right } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {Actions} from 'react-native-router-flux'

//custom files 
// import AppStackNavigator from './AppStackNavigator'
import ListExpenses from './expenses/ExpensesList'
//import AddExpenses from "./expenses/AddExpenses";
//import Config from '../config/config'
// import Config from '../config/config'


export default class Drawer extends Component {

  constructor(props){
    super(props)
    YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      ]);
  }

  componentWillMount(){
   // HockeyApp.configure("72a4b34e3cb2480ca7a4d2a15b54536e", true);
    // HockeyApp.configure("e1de0e9abf4f4f13a9381f5571795307",true,AuthenticationType.Anonymous,)
  }

  componentDidMount(){
    // HockeyApp.start()
    // HockeyApp.checkForUpdate()
  }

  render() {
    return (
      <NavigationDrawer />
    )
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
    <StatusBar backgroundColor="#357ca5"></StatusBar>
      <Body>
        
        <Image
          style={styles.drawerImage}
          source={require('../assets/img/User_man_male_profile_account_person_people.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);


const NavigationDrawer = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  ExpensesList: {
    screen:ListExpenses
  },
//   AddExpenses: {
//     screen: AddExpenses
//   }
},
  {
    initialRouteName: 'ExpensesList',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    navigationOptions:{
      headerTintColor:"#FFFFFF"
    }
    
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 100,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 75,
    width: 75,
    borderRadius: 75
  }

})