import { HeaderButton } from './HeaderButton';
import { Button } from '../types/Button';

const Header: React.FC = () => {

    const test: Button = {
        title: 'test',
        route: '/',
        children: [
            {
                title: 'test1',
                route: '/'
            },
            {
                title: 'test2',
                route: '/'
            }
        ]
    };

    return (
        <header >
            <nav className='max-h-50 bg-blue-500' role='navigation'>
                <ul className='flex'>
                    <HeaderButton headerButton={test} />
                    <HeaderButton headerButton={test} />
                </ul>
            </nav>
        </header>
    )
}

export { Header }