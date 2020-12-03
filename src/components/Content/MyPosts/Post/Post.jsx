import { useLayoutEffect } from 'react';
import classes from './Post.module.css';

const Post = (props) => {
return (

        <div className={classes.post_n}>
            <span></span>
            <p>{props.message}</p> 
            <p>like {props.like}</p>
        </div>



);

}

export default Post;