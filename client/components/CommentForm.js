import React from 'react';

const CommentForm = React.createClass({
    render() {
        return (
            <form className='comment-form' ref='commentForm'>
                <input type="text" ref='author' placeholder='author'/>
                <input type="text" ref='comment' placeholder='comment'/>
                <button type='submit' hidden/>
            </form>
        );
    }
});

export default CommentForm;