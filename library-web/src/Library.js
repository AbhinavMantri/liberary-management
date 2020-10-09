import React from 'react';
import Header from './partials/Header';
import Loader from './partials/Loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Library extends React.PureComponent {
    render = () => {
        const { app } = this.props || {};

    return (
            <div className="container">
                <Header />
                {this.props.children}
                {app.loading && <Loader />}
            </div>
        );
    }
}

const mapStateToProps = ({app, user}) => {
    return { app, user };
}

export default withRouter(connect(mapStateToProps, { })(Library));