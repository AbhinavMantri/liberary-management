import React from 'react';
import withLoader from '../../../hoc/withLoader';

const BookDetail = props => {
    const { book } = props || {};
    return (
        <div className="book-detail-wrapper">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h4>{book.title}</h4>
                    </div>
                </div>
                <div className="card-body">
                    <p>{book.body}</p>
                </div>
            </div>
        </div>
    );
}

export default withLoader(BookDetail);