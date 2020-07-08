import React from 'react';
import './FollowerList.css';

class Follower extends React.Component {

    render() {
        return <p className='follower'>{this.props.data.login}</p>
    };

};

export default Follower;