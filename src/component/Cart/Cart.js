import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { donateKid } = props.donate;
    const totalReducer = (previous, kid) => previous + kid.donate;
    const total = props.donate.reduce(totalReducer, 0)

    return (
        <div>
            <h3 className="text-center"><FontAwesomeIcon icon={faUser} /> Children: {props.donate.length}</h3>
            <h4 className="text-center my-3">Total Donation : {total}</h4>
            {/* <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button> */}

            {/* <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div> */}


        </div>
    );
};

export default Cart;