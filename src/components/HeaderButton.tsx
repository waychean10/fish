import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Button } from '../types/Button';
import { DropdownButton } from './DropdownButton';

interface DropdownProps {
    headerButton: Button;
}

const HeaderButton: React.FC<DropdownProps> = ({headerButton}) => {
    const [ display, setDisplay ] = useState('none');

    function handleClick() {
        setDisplay(display === 'none' ? 'block' : 'none');
    }

    return (
        <ul>
            <li><Link to={headerButton.route}>{ headerButton.title }</Link></li>
            {headerButton.children !== undefined && 
                <ul style={{display:display}}>
                    {headerButton.children.map(option => (
                        <DropdownButton button={option} />
                    ))}
                </ul>
            }
        </ul>
    )
}

export { HeaderButton }