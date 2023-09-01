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
            <nav className='max-h-50 bg-blue-500 flex' role='navigation'>
                <svg xmlns="http://www.w3.org/2000/svg" className="inline p-2" width="48" height="48" viewBox="0 0 26 26" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <title>Fish Logo</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 7s-5.646 10 -12.308 10c-3.226 .025 -6.194 -1.905 -7.692 -5c1.498 -3.095 4.466 -5.025 7.692 -5c6.662 0 12.308 10 12.308 10"></path>
                </svg>
                <ul className='flex'>
                    <HeaderButton headerButton={test} />
                    <HeaderButton headerButton={test} />
                </ul>
            </nav>
        </header>
    )
}

export { Header }