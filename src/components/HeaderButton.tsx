import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Button } from '../types/Button';
import { DropdownButton } from './DropdownButton';

interface DropdownProps {
    headerButton: Button;
}

const HeaderButton: React.FC<DropdownProps> = ({headerButton}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

    return (
        <ul>
            <li>
                <Link to={headerButton.route} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    { headerButton.title }
                </Link>
            </li>
            {headerButton.children !== undefined && isDropdownVisible && 
                <ul className='absolute'>
                    {headerButton.children.map(option => (
                        <DropdownButton key={option.title} button={option} />
                    ))}
                </ul>
            }
        </ul>
    )
}

export { HeaderButton }