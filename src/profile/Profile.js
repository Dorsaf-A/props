import React from "react";
import PropTypes from 'prop-types';

function Alert(a){
    alert(`${a.details.fullName}`)
}

const Profile = (props) => {
return(<>
    <div>
        {Alert(props)}
        {props.children}
    </div>
    <h2 style={{textDecoration:"underline"}}>{props.fullName}</h2>
    <p className="specification">Bio:</p><p> {props.bio}</p>
    <p className="specification">Profession: </p><p>{props.profession}</p>
    </>
    )
}

Profile.defaultProps = {
    fullName : "Mark Zuckerberg",
    bio : "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder",
    profession : "Software developper, Computer scientist, entrpreneur..."
}


Profile.PropTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}

export default Profile;