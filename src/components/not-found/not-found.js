import React from 'react';
import { useNavigate } from 'react-router-dom';
import './not-found.css';

export const NotFound = () => {
    const navigate = useNavigate();

    const onClick = () => navigate('/');

    return (
        <div className="not_found">
            <div className="content">
                <title className="text-error">404</title>
                <div className="error-info">
                    Page not found.
                </div>
                <button className="btn" onClick={onClick}>
                    Return to website
                </button>
            </div>
        </div>
    );
};