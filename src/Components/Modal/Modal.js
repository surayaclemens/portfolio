import './Modal.scss';

import React from 'react';

function Modal ({ tags }){
        
    return (
        <main className='modal'>
            <h3 className='modal__subheader'>{tags}</h3>
        </main>
    );
}


export default Modal;