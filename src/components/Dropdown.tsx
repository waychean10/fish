import { useState } from 'react';
import { Button } from '../types/Button';
import { DropdownButton } from './DropdownButton';

interface DropdownProps {
    dropdownTitle: string;
    dropdownOptions: Array<Button>;
}

const Dropdown: React.FC<{props:DropdownProps}> = ({props}) => {
    const [ display, setDisplay ] = useState('none');
    const { dropdownTitle, dropdownOptions } = props;

    function handleClick() {
        setDisplay(display === 'none' ? 'block' : 'none');
    }

    return (
        <div>
            <div>
                { dropdownTitle }
            </div>
            <div style={{display:display}}>
                {dropdownOptions.map(option => (
                    <DropdownButton button={option} />
                ))}
            </div>
        </div>
    )
}

export { Dropdown }