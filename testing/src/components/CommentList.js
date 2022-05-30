import React from 'react';
import {useSelector} from "react-redux";


const CommentList = () => {
    const comments = useSelector(state => state.comments)

    const renderComments = () => {
        return comments.map(comment => {
            return <li key={comment}>{comment}</li>
        })
    }
    return (
        <div data-testid="CommentList">
            <ul>{renderComments()}</ul>
        </div>
    );
}

CommentList.propTypes = {};

CommentList.defaultProps = {};

export default CommentList;
