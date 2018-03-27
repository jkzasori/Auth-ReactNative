import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {loggedIn: null};

	componentWillMount(){
		firebase.initializeApp({
	    apiKey: 'AIzaSyCw6lSqexl-iY6lLFG7kj8mzw80pFXXO5o',
	    authDomain: 'auth-580be.firebaseapp.com',
	    databaseURL: 'https://auth-580be.firebaseio.com',
	    projectId: 'auth-580be',
	    storageBucket: 'auth-580be.appspot.com',
	    messagingSenderId: '855033987449'
	  });

	  firebase.auth().onAuthStateChanged((user) => {
	  	if (user) {
	  		this.setState({ loggedIn: true });
	  	}else {
	  		this.setState({ loggedIn: false });
	  	}
	  });
	}

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        	<Card>
        		<CardSection>
	        		<Button onPress={() => firebase.auth().signOut()}>
	            	Log Out
	          	</Button>
        		</CardSection>
        	</Card>
          
        );
      case false:
        return <LoginForm />;
      default:
        return (
        	<Card>
        		<CardSection>
	        		<Spinner size="large" />
        		</CardSection>
        	</Card>)
    }
  }

	render(){
		return(
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
			)
	}

}
export default App;