import './index.scss'
import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const navigate= useNavigate();
    return (
        <div className='main-menu'>
            <div className='filter-buttons'>
            <div className='btn' onClick={()=>navigate('/')}> Voltar </div></div>
            <div className='title'> Menu </div>

            <div className='produtos-container'>

                <div className='produto'>
                    <div><img src="assets/img/sal.jpg" alt="" /></div>
                    <div>Salsichão</div>
                    <div>Ele é muito utilizado em preparos de pratos cheios de sabor e típicos da Alemanha, mas também foi adotado pelos brasileiros.
                    </div>
                </div>

            <div className='produto'>
                    <div><img src="assets/img/prete.jpg" alt="" /></div>
                    <div>Pretzel</div>
                    <div>pretzel é um pão tradicional alemão, em forma de nó, seco, estaladiço, habitualmente assado e salgado. Em língua alemã chama-se Brezel.
                    </div>
                </div>

                <div className='produto'>
                    <div><img src="assets/img/sonho.jpg" alt="" /></div>
                    <div>Sonho</div>
                    <div>Ele nasceu na guerra e conquistou as padarias: conheça a origem do sonho.
                    </div>
                </div>

                <div className='produto'>
                    <div><img src="assets/img/cookei.jpg" alt="" /></div>
                    <div>Lebkuchen</div>
                    <div>Em meio as luzes e enfeites tradicionais, um dos produtos que simboliza o Natal na Alemanha é o Lebkuchen.
                    </div>
                </div>

                <div className='produto'>
                    <div><img src="assets/img/pao.jpg" alt="" /></div>
                    <div>Pães Alemães</div>
                    <div>O pão é uma parte muito importante da dieta alemã. É um alimento básico no café da manhã (Frühstück), no lanche (Pausenbrot) e no jantar (Abendbrot). Os pães na Alemanha são de grande variedade e de natureza regional.
                    </div>
                </div>

                <div className='produto'>
                    <div><img src="assets/img/paodemel.jpg" alt="" /></div>
                    <div>Lebkuchen/Pão de Mel</div>
                    <div>Com especiarias, avelãs, amêndoas ou nozes, doce é parte essencial dos mercados de Natal alemães. Versão de Nurembergue, redonda e coberta de glacê ou chocolate, é uma das mais tradicionais.
                    </div>
                </div>

                <div className='produto'>
                    <div><img src="assets/img/sla.jpg" alt="" /></div>
                    <div>Gebrannte Mandeln</div>
                    <div> Tradicionalmente, as amêndoas torradas eram preparadas em caldeirões de cobre nos mercados de Natal ou na feira. O cobre é um excelente condutor e retém o calor. 
                    </div>
                </div>

            </div>
        </div>
    );

}