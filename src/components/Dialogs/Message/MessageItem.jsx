import { useLayoutEffect } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import s from './../Dialogs.module.css';


const MessageItem = (props) => {
    return (
        <li className={s.message_item}>{props.messageItem}</li>
    )
}





export default MessageItem;