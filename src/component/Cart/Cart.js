import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import MiniCard from './../MiniCard/MiniCard';


const Cart = (props) => {
  // Total Donation .............................
  const totalReducer = (previous, kid) => previous + kid.donate;
  const total = props.donate.reduce(totalReducer, 0)

  return (
    <div>
      <h3 className="text-center"><FontAwesomeIcon icon={faUser} /> Children: {props.donate.length}</h3>
      <h4 className="text-center my-3">Total Donation : {total}</h4>

      {/* Donation Mini Cart...................... */}
      {
        props.donate.map(child => <MiniCard child={child} />)
      }

    </div>
  );
};

export default Cart;