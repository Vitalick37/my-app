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
        <li className={s.message_item}>{props.messageItem}</li>
    )
}

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Mihael' },
        { id: 3, name: 'Andre' },
        { id: 4, name: 'Anna' },
        { id: 5, name: 'Nikolya' },
        { id: 6, name: 'Margo' },
    ]

    let dialogsElement = dialogsData.map(element => <DialogItem name={element.name} id={element.id} />);

    let messageData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you?' },
        { id: 3, message: 'i`m fine' },
    ]

    let messageElement = messageData.map(el => <MessageItem messageItem={el.message} />);



    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <div className={s.name}>
                    <ul className={s.name_list}>
                        {/* <Route path='/numberUser' component={DialogItem} /> */}
                        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                        <DialogItem name='Mihael' id='2' />
                        <DialogItem name='Andre' id='3' />
                        <DialogItem name='Anna' id='4' />
                        <DialogItem name='Nikolya' id='5' />
                        <DialogItem name='Margo' id='6' /> */}

                        { dialogsElement }
                    </ul>
                </div>
                <div className={s.message}>
                    <ul className={s.message_list}>
                        {/* <Route path='/numberMessage' component={MessageItem} /> */}
                        {/* <MessageItem messageItem={messageData[0].message} />
                        <MessageItem messageItem='how are you?' />
                        <MessageItem messageItem='i`m fine' /> */}

                        {messageElement}
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    );

}



export default Dialogs;