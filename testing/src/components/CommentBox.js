import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import * as actions from '../actions';

const CommentBox = () => {
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
            <button id='fetch-comments-button' onClick={() => dispatch(actions.fetchComments())}>
                Fetch Comments
            </button>
        </div>
    );
}

CommentBox.propTypes = {};

CommentBox.defaultProps = {};

export default CommentBox;
