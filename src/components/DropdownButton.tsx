import { Button } from '../types/Button';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const DropdownButton: React.FC<{button:Button}> = ({button}) => {

    return (
        <li className='py-2'>
            <Link to={button.route}>{ button.title }</Link>
        </li>
    )
}

export { DropdownButton }