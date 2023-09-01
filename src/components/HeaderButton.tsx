import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Button } from '../types/Button';
import { DropdownButton } from './DropdownButton';

interface DropdownProps {
    headerButton: Button;
}

const HeaderButton: React.FC<DropdownProps> = ({headerButton}) => {

    return (
        <li className='block group py-2 px-4'>
            <Link className='relative top-0.5' to={headerButton.route}>
                { headerButton.title }
            </Link>
            {headerButton.children !== undefined && 
            <ul className='hidden group-hover:block pt-4 absolute'>
                {headerButton.children.map(option => (
                    <DropdownButton key={option.title} button={option} />
                ))}
            </ul>
        }
        </li>
    )
}

export { HeaderButton }