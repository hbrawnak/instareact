import React from 'react';

const CommentForm = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },

    render() {
        return (
            <form className="comment-form" ref="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" required placeholder="author"/>
                <input type="text" ref="comment" required placeholder="comment"/>
                <button type="submit" hidden/>
            </form>
        );
    }
});

export default CommentForm;