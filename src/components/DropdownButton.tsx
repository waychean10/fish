import { Button } from '../types/Button';

const DropdownButton: React.FC<{button:Button}> = ({button}) => {

    return (
        <div>
            <a href='button.link'>
                { button.title }
            </a>
        </div>
    )
}

export { DropdownButton }