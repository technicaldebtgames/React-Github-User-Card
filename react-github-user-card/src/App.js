import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

// using app as the main component and passing props to the rest for layout/styling
//
// in another version i might only have the data be pulled in to the user card, since the
// app will probably have better things to do in a real project.
class App extends React.Component {

  state = {
    acct: {},
    followers: []
  };

  // there are no real update considerations in this project so I will just do this on mount
  componentDidMount() {
    axios.get('https://api.github.com/users/garybot')
    .then(result1 => {
      // nesting api promises to consolidate the data in state in one pass, don't think the
      // api gives another way of doing this
      axios.get('https://api.github.com/users/garybot/followers')
      .then(result2 => {
        this.setState({
          acct: result1.data,
          followers: result2.data
        });
      })
      .catch(error => {
        console.log('Error fetching follower data.');
      });
    })
    .catch(error => {
      console.log('Error fetching user data.');
    });
  };

  render() {
    return (
      <div className="app-container">
        <UserCard acct={this.state.acct} followers={this.state.followers} />
      </div>
    );
  };
    
};

export default App;
