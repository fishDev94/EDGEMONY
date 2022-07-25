import './index.css';

const FriendCard = ({profile}) => {

    return (
        <div className="FriendCard">
            <img className="avatar" src={profile.photo} alt="" />
            <h4>{profile.name}</h4>
        </div>

    )
}

export default FriendCard