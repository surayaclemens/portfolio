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
            <p className='modal__text'>HTML, CSS, Sass, JavaScript, TypeScript, React, Angular, Axios, RxJs, Express, Node, SQL, Firebase, Heroku</p>
            <h3 className='modal__subheader'>also a big fan of using</h3>
            <p className='modal__text'>Figma, Notion, Agile development methods</p>
        </main>

    );
}


export default Modal;