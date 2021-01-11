import { useLayoutEffect } from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (

        <header className={classes.header}>
            <div className={classes.logo}></div>
            <form action="#">
                <input type="text" className={classes.search} placeholder="поиск"/>
            </form>
        </header>

    );

}



export default Header;