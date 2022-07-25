import './index.css';
import { useState, useEffect } from 'react';
import {GET} from '../../utils/api'

import FriendCard from '../FriendCard'

const FriendCardList = () => {

    const [profile, setProfile] = useState([]);
    
    useEffect(() => {
        GET('friends')
        .then(data => setProfile(data))
    },[])


    return (
        <div className="FriendCardList">
            {profile.map(profile => <FriendCard profile={profile} key={profile.id}/>) }
        </div>

    )
};

export default FriendCardList;