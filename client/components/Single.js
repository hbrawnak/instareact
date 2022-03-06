import React from 'react';
import Photo from './Photo';

const Single = React.createClass({
    render() {
        const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
        const post = this.props.posts[index];
        console.log(post);
        return (
            <div className='single-photo'>
                <Photo {...this.props} post={post} index={index}/>
            </div>
        );
    }
});

export default Single;