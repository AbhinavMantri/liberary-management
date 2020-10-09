import React from 'react';
import { connect } from 'react-redux';
import { userAction, appAction } from '../../store/actions';

import { userActionType } from '../../store/actions/user';
import constants from '../../constants';

import  './login.css';


class LoginPage extends React.PureComponent {
    state = {
        email: "",
        password: "",
    };

    componentWillReceiveProps = newProps => {
        if(newProps.user.isLoggedIn && newProps.user.isLoggedIn !== this.props.user.isLoggedIn) {
            this.props.history.push(constants.NAVS.BOOK);
        }
    }

    onChange = (prop, value) => this.setState({ [prop]: value }); 

    onSubmit = event => {
        const {email, password } = this.state || {};
        this.props.userAction(userActionType.LOGIN, { email, password })
        .then(d => {

        });
        event.preventDefault();
    }


    render = () => {
        const { email, password } = this.state || {};

        return (
            <div className="page-view login-view">
                <div className="card login-box">
                    <div className="card-header">
                        <div className="card-title">
                            <h4>Login</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={e => this.onChange('email', e.target.value)}  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={e => this.onChange('password', e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = function({ app, user }) {
    return {
        app,
        user,
    }
}

export default connect(mapStateToProps, { appAction, userAction })(LoginPage);