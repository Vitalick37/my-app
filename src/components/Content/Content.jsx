import { useLayoutEffect } from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
return (

    <div className={classes.content}>
    <div>ava + descr</div>
    <MyPosts />
    <div>new posts</div>
    <div>message</div>
    <div>new message</div>
    </div>

);

}

export default Content;