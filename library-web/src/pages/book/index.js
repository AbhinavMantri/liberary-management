import React from 'react';
import { connect } from 'react-redux';

import withPrivate from '../../hoc/withPrivate';
import { bookAction, appAction } from '../../store/actions';
import { bookActionType } from '../../store/actions/book';
import Books from '../../component/Book';
import BookDetail from '../../component/Book/Detail';

import './book.css';

class BookPage extends React.PureComponent {

    componentDidMount = () => {
        const { match } = this.props || {};
        const { id } = match.params || {};
        
        if(id) {
            this.requestBook();
        } else {
            this.requestBooks();
        }   
    }

    componentWillReceiveProps = newProps => {
        if(newProps !== this.props) {
            const nParams = newProps.match.params || {};
            const { params } = this.props.match || {};

            if(nParams.id && nParams.id !== params.id) {
                this.requestBook(newProps);
            } else {
                this.requestBook();
            }
        }
    }

    requestBooks = () => {
        const { book } = this.props || {};

        if(!book.books)
            this.props.bookAction(bookActionType.GET_BOOKS, {});
    }

    requestBook = (props = this.props) => {
        const {  book, match } = props || {};
        const { id } = match.params || {};
        
        if(!book.detail[id])
            this.props.bookAction(bookActionType.GET_BOOK, { id });
    }

    render = () => {
        const { book, match } = this.props || {};
        const { books, detail } = book || {};
        const { id } = match.params || {};

        return (
            <div className="page-view book-view">
                {id ?
                <BookDetail show={detail[id]} book={detail[id]} />
                    :
                <Books show={books} books={books} />    
                }
            </div>
        );
    }
} 

const mapStateToProps = ({ app, user, book }) => {
    return { app, user, book };
}

export default connect(mapStateToProps, { appAction, bookAction })(withPrivate(BookPage));