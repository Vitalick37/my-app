import { useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
    
        <nav className={classes.sidebar}>
        <ul className={classes.list}>
        <li className={classes.item}><NavLink to="/content" activeClassName={classes.active} className={classes.link}>Profile</NavLink></li>
        <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}  className={classes.link}>Messages</NavLink></li>
        <li className={classes.item}><NavLink to="/news" activeClassName={classes.active}  className={classes.link}>News</NavLink></li>
        <li className={classes.item}><NavLink to="/music" activeClassName={classes.active}  className={classes.link}>Music</NavLink></li>
        <li className={classes.item}><NavLink to="/settings" activeClassName={classes.active}  className={classes.link}>Settings</NavLink></li>
        </ul>
        </nav>
            
    );
    
    }




export default Sidebar;