import React, { Component } from 'react'
import { AsyncStorage, YellowBox, Text, View, Button, Image, TextInput, Label, StyleSheet, TouchableOpacity, Alert } from 'react-native'
 import { Actions } from 'react-native-router-flux';
// import expensesList from '../expenses/ExpensesList';
//import Home from '../Home';

//import Progress from '../utils/Progress'
class UserLogin extends Component {
  // static navigationOptions = {
  //   header: null
  // }
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      ]);
    this.state = {
      username: '',
      password: '',
      Error: '',
      validateUser: true,
      validatePassword: true,
      validateDomain: true,
      userValue: '',
      passwordValue: '',
      domainValue: '',
      progress: false
    };
  }

  // componentWillMount() {

  //   this.setState({ progress: true })

  //   AsyncStorage.getItem('jwt_token').then((value) => {
  //     this.setState({ progress: false })

  //     if (value != undefined || value != null) {
  //       // Alert.alert('You need to...'+value);
  //       Actions.Home({ type: 'reset' });
  //     }
  //     //Alert.alert('You need to...'+value);
  //   })
  // }

  // async setToken(username, user_id, jwt_token) {
  //   await AsyncStorage.setItem('username', username);
  //   await AsyncStorage.setItem('user_id', user_id);
  //   await AsyncStorage.setItem('jwt_token', jwt_token);
  //   return true
  // }

  saveToAsyncStorage(data) {
    AsyncStorage.setItem("jwt_token", data.jwt_token)
   // AsyncStorage.setItem("username", data.username)
    AsyncStorage.setItem("domainName", this.state.domainName)
   
    Actions.Home({ type: 'reset' });

  }

  async onLogin() {
    this.setState({ progress: true })
    // const { username, password } = this.state;
    let url = 'http://'+this.state.domainName+'/api/login';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    }).then(response => response.json())
      .then(responseJson => {
        this.setState({ progress: false })
        this.saveToAsyncStorage(responseJson)
      })
      .catch(err => {
        console.log(err);
        this.setState({ progress: false })
        this.setState({ Error: 'Enter currect username and password!' });
        console.log('err',err)
      })
  }

  userValidate(text) {
    this.setState({ validatePassword: true });
    this.setState({ validateDomain: true });
    if (text === '') {
      this.setState({ userValue: text });
      this.setState({ validateUser: false });
    } else {
      this.setState({ userValue: text });
      this.setState({ validateUser: true });
    }
  }
  passwordValidate(text) {
    if (this.state.userValue !== '') {
      this.setState({ passwordValue: text });
      this.setState({ validatePassword: true });
    } else {
      this.setState({ passwordValue: text });
      this.setState({ validateUser: false });
    }
    if (text !== '') {
      this.setState({ validatePassword: true });
    }
  }
  domainValidate(text) {
    if (this.state.userValue === '') {
      this.setState({ validateUser: false });
    }
    if (this.state.passwordValue === '') {
      this.setState({ validatePassword: false });
    }
  }

  render() {

    // if (this.state.progress) {
    //   return (<Progress />)
    // }

    return (
      <View style={styles.container}>
       
        <Text style={styles.error}>{this.state.Error}</Text>
        <TextInput style={[styles.inputStyle, !this.state.validateUser ? styles.Validateerror : null]}
          value={this.state.username}
          onChangeText={(username) => { this.userValidate(username), this.setState({ username }); this.setState({ Error: '' }); }}
          placeholder="Username" autoCorrect={false}
          validate={this.commonValidate}
          underlineColorAndroid='transparent' />

        <TextInput style={[styles.inputStyle, !this.state.validatePassword ? styles.Validateerror : null]}
          value={this.state.password}
          onChangeText={(password) => { this.passwordValidate(password), this.setState({ password }); this.setState({ Error: '' }); }}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid='transparent' />
        <TextInput style={styles.inputStyle}
          value={this.state.domainName}
          onChangeText={(domainName) => { this.domainValidate(domainName), this.setState({ domainName }); this.setState({ Error: '' }); }}
          placeholder="Domain Url"
          underlineColorAndroid='transparent' />
        <TouchableOpacity>
          <Text style={styles.btnText} onPress={this.onLogin.bind(this)}>Login</Text>
        </TouchableOpacity>
      </View>

    );
    // <expensesList token={this.state.token}/>
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    backgroundColor: '#26AE90',
  },
  inputStyle: {
    backgroundColor: '#fff',
    fontSize: 20,
    paddingLeft: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  btnText: {
    backgroundColor: '#ECEEF1',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20,
    marginTop: 25,
    color: '#26AE90',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
  },
  error: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000'
  },
  Validateerror: {
    borderColor: 'red',
    borderWidth: 2
  }


});


export default UserLogin