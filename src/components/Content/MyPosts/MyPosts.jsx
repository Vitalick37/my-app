import { useLayoutEffect } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, post: 'how are you?', like: 3},
        {id: 2, post: 'i`m fine', like: 7},
    ]

    let postElement = postData.map(el => <Post message={el.post} like={el.like} />)

    return (
        <div className={classes.my_posts}>
            <p>my posts</p>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            {/* <Post message={postData[0].post} like={postData[0].like} />
            <Post message={postData[1].post} like={postData[1].like} /> */}

            {postElement}
        </div>
    );

}

export default MyPosts;