import React, {useState} from 'react';


const CommentBox = () => {
    const [comment, setComment] = useState('');

    const handleChange = (event) => {
        setComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setComment('');
        console.log(comment);
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
        </div>
    );
}

CommentBox.propTypes = {};

CommentBox.defaultProps = {};

export default CommentBox;
