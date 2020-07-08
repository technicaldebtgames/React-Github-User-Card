import React from 'react';
import FollowerList from './FollowerList';
import './UserCard.css';

class UserCard extends React.Component {

    render() {
        return (
            <div className='user-card-container'>
                <img src={this.props.acct.avatar_url} alt='Avatar' className='user-card-avatar'/>
                <h1 className='user-card-username'>User: {this.props.acct.login}</h1>
                <h2 className='user-card-name'>Name: {this.props.acct.name}</h2>
                <h3 className='follower-list-label'>Followers:</h3>
                <FollowerList followers={this.props.followers} />
            </div>
        );
    };

};

export default UserCard;