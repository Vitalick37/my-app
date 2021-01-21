import { useLayoutEffect } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <li className={s.name_item}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.name_link}>{props.name}</NavLink>
        </li>
    )
}



export default DialogItem;