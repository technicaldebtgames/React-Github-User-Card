import React from 'react';
import Follower from './Follower';
import './FollowerList.css';

class FollowerList extends React.Component {

    render() {
        return (
            this.props.followers.map(follower => {
                return (
                <Follower data={follower} key={follower.id}/>
                )
            })
        );
    };

};

export default FollowerList;