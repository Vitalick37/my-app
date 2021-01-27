import { useLayoutEffect } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';



const Dialogs = (props) => {



    let dialogsElement = props.dialogsDat.dialogsData.map(element => <DialogItem name={element.name} id={element.id} />);

 

    let messageElement = props.messageData.map(el => <MessageItem messageItem={el.message} />);



    return (
        
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
        
    );

}



export default Dialogs;