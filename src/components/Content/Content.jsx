import { useLayoutEffect } from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Content = (props) => {



    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts post={props.data}/>
        </div>

    );

}

export default Content;