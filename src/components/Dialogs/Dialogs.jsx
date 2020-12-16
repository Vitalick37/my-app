import { useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
    
    <div className={s.wrapper}>
        <div className={s.name}>
            <ul className={s.name_list}>
                <li className={s.name_item}><NavLink to='/dialogs/1' activeClassName={s.active} className={s.name_link}>Dima</NavLink></li>
                <li className={s.name_item}><NavLink to='/dialogs/2' activeClassName={s.active} className={s.name_link}>Mihael</NavLink></li>
                <li className={s.name_item}><NavLink to='/dialogs/3' activeClassName={s.active} className={s.name_link}>Andre</NavLink></li>
                <li className={s.name_item}><NavLink to='/dialogs/4' activeClassName={s.active} className={s.name_link}>Anna</NavLink></li>
                <li className={s.name_item}><NavLink to='/dialogs/5' activeClassName={s.active} className={s.name_link}>Nikolya</NavLink></li>
                <li className={s.name_item}><NavLink to='/dialogs/6' activeClassName={s.active} className={s.name_link}>Margo</NavLink></li>
            </ul>
        </div>
        <div className={s.message}>
        <ul className={s.message_list}>
                <li className={s.message_item}>message</li>
                <li className={s.message_item}>message</li>
                <li className={s.message_item}>message</li>
            </ul>
        </div>
    </div>
            
    );
    
    }



export default Dialogs;