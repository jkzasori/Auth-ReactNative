import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firevase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
	    apiKey: 'AIzaSyCw6lSqexl-iY6lLFG7kj8mzw80pFXXO5o',
	    authDomain: 'auth-580be.firebaseapp.com',
	    databaseURL: 'https://auth-580be.firebaseio.com',
	    projectId: 'auth-580be',
	    storageBucket: 'auth-580be.appspot.com',
	    messagingSenderId: '855033987449'
	  });
	}
	render(){
		return(
			<View>
				<Header headerText="Authenticatiob" />
				<LoginForm />
			</View>
			)
	}

}
export default App;