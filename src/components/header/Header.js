import React from 'react';
import {Wrapper, Picture, Navbar} from '../index';
import logoPic from '../../assets/images/icons/Logotype.png';
import navItems from './navItemsData';

const Header = () => {
    return (
        <Wrapper 
            width="100%" 
            flex 
            column 
            align="center"
            mt="40px"
            mb="20px"
        >
            <Picture 
                src={logoPic} 
                alt="logotype"
                setWidth="183px"
                setHeight="84px"
            />
            <Navbar items={navItems} />
        </Wrapper>
    );
};

export default Header;
