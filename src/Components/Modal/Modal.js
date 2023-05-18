import './Modal.scss';
import CloseX from '../../Assets/yellow-close-x.svg';

import React from 'react';

function Modal ({ modal, hideStackModal, isDarkMode }){
        
    return (

        <main className={modal ? 'modal' : 'modal--hidden'}>
            <div className='modal__x-wrap'>
                <img className='modal__x' src={CloseX} onClick={hideStackModal}/>
            </div>

            <h3 className='modal__subheader'>I'm comfortable developing with</h3>
            <p className='modal__text'>HTML, CSS, Sass, JavaScript, TypeScript, Angular, React, Express, Node.js, Firebase, Git</p>
            <h3 className='modal__subheader'>and have experience with</h3>
            <p className='modal__text'>Flutter, Dart, SQL, Google Cloud Platform, AWS, Heroku, Docker, Meta Conversions API, Stripe API, RxJs</p>
            <h3 className='modal__subheader'>also a big fan of using</h3>
            <p className='modal__text'>GitHub, Figma, Notion, Agile development methods</p>
        </main>

    );
}


export default Modal;