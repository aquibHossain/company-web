import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ children }) => {
    return (
        <div >
            <a href="#" className="btn btn-sm animated-button victoria-one">{children}</a>
        </div>
    );
};

export default CustomButton;