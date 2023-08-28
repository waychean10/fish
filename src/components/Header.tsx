import { useState } from 'react';
import { HeaderButton } from './HeaderButton';
import { Button } from '../types/Button';

const Header: React.FC = () => {

    const test: Button = {
        title: 'test',
        route: '/'
    };

    return (
        <header >
            <nav className='p-8 max-h-80 bg-blue-500'>
                <HeaderButton headerButton={test} />
            </nav>
        </header>
    )
}

export { Header }