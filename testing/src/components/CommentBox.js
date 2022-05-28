import React from 'react';


const CommentBox = () => (
    <div data-testid="CommentBox">
        <form>
            <h4>Add a Comment</h4>
            <textarea/>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    </div>
);

CommentBox.propTypes = {};

CommentBox.defaultProps = {};

export default CommentBox;
