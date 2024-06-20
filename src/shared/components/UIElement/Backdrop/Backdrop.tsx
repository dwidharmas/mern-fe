import React from 'react';
import ReactDOM from 'react-dom';
import { BackdropProps } from './backdrop.interface';

import './Backdrop.css';

const Backdrop = (props: BackdropProps) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook') as Element
  );
};

export default Backdrop;
