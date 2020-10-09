import React from 'react';
import { Redirect } from 'react-router-dom';
import constants from '../../constants';

const withPrivate = Component => props => {
    if(props.user.isLoggedIn) {
        return <Component {...props} />
    }

    return <Redirect to={constants.NAVS.LOGIN} />;
}

export default withPrivate;