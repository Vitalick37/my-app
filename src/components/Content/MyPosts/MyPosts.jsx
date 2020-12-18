import { useLayoutEffect } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.my_posts}>
            <p>my posts</p>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <Post message='how are you?' like='3' />
            <Post message='i`m fine' like='7' />
        </div>
    );

}

export default MyPosts;