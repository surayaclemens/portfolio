import './Modal.scss';
import CloseX from '../../Assets/close-x.svg';
import React from 'react';

function Modal ({ modal, hideStackModal }){

    const modalDisplayClass = modal ? "modal" : "modal--hidden"

    return (

        <main className={modalDisplayClass}>
            <div className='modal__x-wrap'>
                <img className='modal__x' src={CloseX} onClick={hideStackModal}/>
            </div>

            <h3 className='modal__subheader'>I'm comfortable developing with</h3>
            <p className='modal__text'>HTML, CSS, Sass, JavaScript, TypeScript, React, Angular, Express, Node, Firebase</p>
            <h3 className='modal__subheader'>and have experience with</h3>
            <p className='modal__text'> SQL, Axios, RxJs, Google Cloud Platform, Heroku, Docker, Meta Conversions API, Stripe API</p>
            <h3 className='modal__subheader'>also a big fan of using</h3>
            <p className='modal__text'>GitHub, Figma, Notion, Agile development methods</p>
        </main>

    );
}


export default Modal;