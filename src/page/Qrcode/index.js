import { useNavigate } from 'react-router-dom';
import './index.scss'


export default function Qrcode() {

    const navigate = useNavigate();

    return(
        <main className='qr-container'>
            <div className='header-container'>
                <img src="/assets/img/picwish (1).png" width='150px' onClick={() => navigate('/')} />
            </div>
            <section className='qrcode'>
                <h1>Acesse pelo celular ou compartilhe o nosso catálogo com um amigo!</h1>
                <div>
                    <h1>qrcode pika</h1>
                    <img src="assets/img/prete.jpg" alt="" />
                </div>
            </section>
        </main>
    );
    
}