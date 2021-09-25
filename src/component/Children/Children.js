import React from 'react';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import "./children.css"
const Children = (props) => {
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const instaIcon = <FontAwesomeIcon icon={faInstagram} />
    const { name, age, image, donate } = props.children
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card_image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">Name: {name}</h5>
                    <h5 className="tex">Age:{age}</h5>
                    <h5>Donate: {donate}</h5>
                    <button className="btn btn-success" onClick={() => props.handleAddDonate(props.children)}><FontAwesomeIcon icon={faDonate} />  Add to Donate</button>
                    <div className="fs-3 my-3"> {fbIcon} &nbsp;  &nbsp;  &nbsp; {instaIcon}</div>
                </div>
            </div>
        </div>


    );
};

export default Children;