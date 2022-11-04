import './index.scss'
import Header from '../../components/header';

export default function Qrcode() {
    return(
        <main className='qr-container'>
            <Header />
            <section className='qrcode'>
                <img src="assets/img/alemao.png" alt="" />
                <div>
                    <h1>qrcode pika</h1>
                    <img src="assets/img/prete.jpg" alt="" />
                </div>
            </section>
        </main>
    );
    
}