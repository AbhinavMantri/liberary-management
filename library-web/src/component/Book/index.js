import React from 'react';
import { Link } from 'react-router-dom';

import withLoader from '../../hoc/withLoader';
import constants from '../../constants';

const Books = props => {
    const { books } = props || {};
    return (
        <div className="book-list-wrapper">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h4>Books</h4>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {books.map(d => {
                            return (
                                <li key={d.id} className="list-group-item">
                                    <span>{d.title}</span>
                                    <Link to={`${constants.NAVS.BOOK}/${d.id}`} className="btn btn-primary badge-pill">Open</Link>
                                </li>
                            );
                        })}
                    </ul>    
                </div>
            </div>
        </div>
    );
}

export default withLoader(Books);