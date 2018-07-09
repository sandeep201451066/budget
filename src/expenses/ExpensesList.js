import React, { Component } from 'react'
import { Image, View, Text, TouchableHighlight, TouchableOpacity, ActivityIndicator, StyleSheet, YellowBox, Alert, ScrollView, AsyncStorage } from 'react-native'
import { Container, Content, Item, Icon } from 'native-base';

//import loading from '../../assets/img/Loading_icon.gif';
//import Progress1 from 'react-native-progress/Bar';
class ExpensesList extends Component {

    constructor(props) {

        super(props);
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
        this.state = {
            ExpensesDataList: [],
            val: '',
            token: '',
            flag: false,
            img_var: false,
            imgPath: '',
            isModalVisible: false,
            progress: false,
            load: true
        };
    }

    // getToken() {
    //     return new Promise((resolve, reject) => {
    //         var didSucceed = resolve(AsyncStorage.getItem('jwt_token'));
    //         // resolve(this.setState({isModalVisible:false}));
    //         if (didSucceed) {
    //             resolve(this.setState({ token: value }));
    //         } else {
    //             reject('error');
    //         }

    //     })
    // }
    // getDomain() {
    //     return new Promise((resolve, reject) => {
    //         var didSucceed = resolve(AsyncStorage.getItem('domainName'));
    //         if (didSucceed) {
    //             resolve(this.setState({ domainName: value }));
    //         } else {
    //             reject('error');
    //         }

    //     })
    // }
    // // componentWillReceiveProps() {
    // //     let that = this
    //     // this.setState({progress:true})
    //     this.getDomain().then(Domain => this.getDomain()).then(Domain => {
    //         this.getToken().then(token => this.getToken()).then(token => {
    //             console.log(token)
    //             let url = 'http://'+Domain+'/api/transaction'
    //             fetch(url, {
    //                 method: "GET",
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',
    //                     'jwt_token': token
    //                 }
    //             }).then((response) => response.json()).then(responseJson => {
    //                 console.log('exp', JSON.stringify(responseJson));

    //                 that.setState({
    //                     ExpensesDataList: responseJson
    //                 });
    //                 that.setState({ flag: true });
    //                 //console.log("xyz " + JSON.stringify(responseJson))
    //             }).catch((error) => {
    //                 console.error(error);
    //             });
    //         }).catch(err => console.log('There was an error:' + err))
    //     });
    // }

    // componentWillMount() {
    //     let that = this
    //     this.getDomain().then(Domain => this.getDomain()).then(Domain => {
    //         this.getToken().then(token => this.getToken()).then(token => {
    //             console.log("tok", Domain);
    //             let url = 'http://'+Domain+'/api/transaction'
    //             fetch(url, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',
    //                     'jwt_token': token
    //                 }
    //             }).then((response) => response.json()).then(responseJson => {
    //                 console.log('exp', JSON.stringify(responseJson));

    //                 that.setState({
    //                     ExpensesDataList: responseJson
    //                 });
    //                 that.setState({ flag: true });
    //                 //console.log("xyz " + JSON.stringify(responseJson))
    //             }).catch((error) => {
    //                 console.error(error);
    //             });
    //         }).catch(err => console.log('There was an error:' + err))
    //     });
    // }


    // ShowExpenseImage(id) {

    //     this.setState({ imgPath: this.state.ExpensesDataList[id].image_location });
    //     this.setState({ isModalVisible: !this.state.isModalVisible });

    // }
    // closeModal() {
    //     this.setState({
    //         img_var: false
    //     });
    // }
    // _toggleModal = () =>
    //     this.setState({ isModalVisible: !this.state.isModalVisible });

    // modalBackPress() {
    //     if (this.state.isModalVisible) {
    //         this.setState({ load: true });
    //         this._toggleModal();
    //     } else {
    //         exit(0);
    //     }
    // }


    // componentDidMount() {
    //     this.getDomain().then(Domain => this.getDomain()).then(Domain => {
    //         this.getToken().then(token => this.getToken()).then(token => {
    //             console.log(token)
    //             let url = 'http://'+Domain+'/api/user/balance'
    //             fetch(url, {
    //                 method: "GET",
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',
    //                     'jwt_token': token
    //                 }
    //             }).then((response) => response.json()).then(responseJson => {

    //                 var res = JSON.stringify(responseJson)
    //                 var money = responseJson.income - responseJson.expense
    //                 // this.setState({ currentAmount: money });
    //                 AsyncStorage.setItem("RemainingBalance", money.toString())

    //             }).catch((error) => {
    //                 console.error(error);
    //             });
    //         }).catch(err => console.log('There was an error:' + err))
    //     });
    // }

    render() {
        let that = this

        // if (that.state.flag === false) {
        //     return (
        //         <Progress />
        //     )
        // } else {

            return (
               <View>
               <Text>hiiiiiiiiiiiii</Text>
               </View> 
            );
            // }

        

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },

    image: {
        flex: 1,
        resizeMode: 'stretch',
        borderRadius: 5,
    },
    image1: {

        borderRadius: 4,
        borderWidth: 2,
        backgroundColor: '#555'
    },
    image_view: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default ExpensesList