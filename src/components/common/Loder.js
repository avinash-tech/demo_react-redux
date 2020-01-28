import React, { Component } from 'react';
import {
    ClipLoader
} from 'react-spinners';

const Loader = (props) => {
    return (
        <div className="loader_wrapper"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    )
}
export default Loader;