import { useLayoutEffect } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <li className={s.name_item}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.name_link}>{props.name}</NavLink>
        </li>
    )
}
const MessageItem = (props) => {
    return (
        <li className={s.message_item}>{props.messIt}</li>
    )
}

const Dialogs = () => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <div className={s.name}>
                    <ul className={s.name_list}>
                        {/* <Route path='/numberUser' component={DialogItem} /> */}
                        <DialogItem name='Dima' id='1' />
                        <DialogItem name='Mihael' id='2' />
                        <DialogItem name='Andre' id='3' />
                        <DialogItem name='Anna' id='4' />
                        <DialogItem name='Nikolya' id='5' />
                        <DialogItem name='Margo' id='6' />
                    </ul>
                </div>
                <div className={s.message}>
                    <ul className={s.message_list}>
                        {/* <Route path='/numberMessage' component={MessageItem} /> */}
                        <MessageItem messIt='hi'/>
                        <MessageItem messIt='how are you?'/>
                        <MessageItem messIt='i`m fine'/>
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    );

}



export default Dialogs;