import { useNavigate } from 'react-router-dom';
import './index.scss';

export default function Header() {

    const navigate = useNavigate();

    

    return(
        <main className='header-container'>
            <img src="/logo.jpg" height='100px' onClick={() => navigate('/')} />
        </main>
    );
}