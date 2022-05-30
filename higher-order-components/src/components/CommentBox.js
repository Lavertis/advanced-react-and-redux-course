import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import * as actions from '../actions';

const CommentBox = (props) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const handleChange = (event) => {
        setComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.saveComment(comment));
        setComment('');
    }

    return (
        <div data-testid="CommentBox">
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea
                    value={comment}
                    onChange={handleChange}
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button id='fetch-comments-button' onClick={props.fetchComments}>Fetch Comments</button>
        </div>
    );
}

CommentBox.propTypes = {};

CommentBox.defaultProps = {};

export default connect(null, actions)(CommentBox);
