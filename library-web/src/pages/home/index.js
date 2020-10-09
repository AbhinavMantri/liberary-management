import React from 'react';
import { Redirect } from 'react-router-dom';
import constants from '../../constants';

class BookPage extends React.PureComponent {
    render = () => {
        return (
           <Redirect to={constants.NAVS.LOGIN} />
        );
    }
} 

export default BookPage;