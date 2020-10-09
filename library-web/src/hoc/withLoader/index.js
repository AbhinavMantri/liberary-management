import React from 'react';

import Loader from '../../partials/Loader';

const withLoader = Component => props => {
    if(props.show) {
        return <Component {...props} />;
    }

    return <Loader />;
}

export default withLoader;