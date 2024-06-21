import React from 'react';

export default function Loding() {
    return (
        <div className="loader-container">
            <div className="panWrapper">
                <div className="pan">
                    <div className="food"></div>
                    <div className="panBase"></div>
                    <div className="panHandle"></div>
                </div>
                <div className="panShadow"></div>
            </div>
        </div>
    )
}
