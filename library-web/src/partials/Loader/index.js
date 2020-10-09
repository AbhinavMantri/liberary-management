import React from 'react';

import loader from './loader.gif';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader">
                <img src={loader} alt="loader" />
            </div>
        </div>
    );
}

export default React.memo(Loader);