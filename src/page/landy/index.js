import './index.scss';

export default function Landy() {
  return (
    <div className='main'>
    <div className="fx-one">
        <div className="one-nav">
            <div className="one-nav-width">
                <div className="one-nav-text">
                    <img src={logoNav} alt=""/>
                    <Link className='hidden' to='/'>HOME</Link>
                    <Link className='hidden' to='/menu'>MENU</Link>
                </div>
            </div>
        </div>
        <div className="one-hero-section">
            <motion.div 
                className="one-hero-text"
                initial={{ x : -450, opacity: 0 }}
                transition={{duration: .8}}
                animate={{ x : 0, opacity: 1 }}
                >
                <h1>QUEM SOMOS</h1>
                <p>Somos uma cafeteria que está há 33 anos, trazendo um cardápio completo e delicioso,
                    que tem como foco proporcionar aos nossos clientes
                    momentos agradáveis dentro do nosso estabelecimento
                </p>

                <div>
                </div>
            </motion.div>
            <motion.div 
                class="one-hero-image"
                initial={{ x : 450, opacity: 0 }}
                transition={{duration: .8}}
                animate={{ x : 100, opacity: 1 }}
                >
                <img src={ heroCoffer } alt=""/>
            </motion.div>
        </div>
    </div>

    <div className="fx-two">
        <div className="fx-two-hero">
            <div className="two-hero-images">
                <motion.div 
                    className="cro"
                    initial={{scale: 1}}
                    transition={{duration: .3}}
                    whileHover={{scale: 1.05}}
                    >
                    <img src={ croasaint }alt=""/>
                </motion.div>
                <motion.div 
                    className="cafe"
                    initial={{scale: 1}}
                    transition={{duration: .3}}
                    whileHover={{scale: 1.05}}
                    >
                    <img src={ torta } alt=""/>
                    <img src={ cafe } alt=""/>
                </motion.div>
            </div>
            <div className="two-hero-text">
                <h1>PRINCIPAIS PEDIDOS</h1>
                <p>Café, croissant, sonho, não importa o que peça temos certeza que vai sair daqui com um gostinho
                    de quero mais, alguns dos nossos principais pedidos que fazem jus ao nome GREEN VALLEY
                </p>

                <motion.div 
                    class="two-button"
                    transition={{duration: .5}}
                    whileHover={{scale : 1.2}}
                    whileTap={{scale: .9}}
                    >
                    <Link to='/menu'>MENU</Link>
                </motion.div>
            </div>
        </div>
    </div>
    <div className="fx-three">
        <div className="three-hero">
            {canRotate && 
                <motion.div 
                    className="three-hero-ingredientes"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                    }}
                    >
                    <h1>INGREDIENTES</h1>
                    <img src={ grao } alt=""/>
                    <p>Nossos ingredientes são de otima qualidade, frescos. Utilisamos os melhores produtos para o
                        melhor cliente, você.
                        Igrediuentes profissionais, um toque especial em cada produto.</p>
                </motion.div>
            }
            {canRotate && 
                <motion.div 
                    className="three-hero-entrega"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                    }}
                    >
                    <h1>ENTREGA NA HORA</h1>
                    <img src={ iconCafe } alt=""/>
                    <p>Não gostamos da palavra atraso, entregamos no prazo, com muita qualidade e profissionalismo.
                        Atraso para nós, não é nada profissional, e nada conveniente para o cliente.</p>
                </motion.div>
            }
            {canRotate && 
                <motion.div 
                    className="three-hero-bolo"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                    }}
                    >
                    <h1>BOLOS FRESCOS</h1>
                    <img src={ bolo } alt=""/>
                    <p>O bolo fresco tem um grande diferencial, o sabor, quando você come, percebe-se que foi feito na
                        hora, com Amor e alegria.
                        Um bolo não feito na hora, perde muito a qualidade.</p>
                </motion.div>
            }
        </div>
    </div>
    <div className="fx-four">
        {canGoDown && 
            <motion.div 
                className="fx-four-hero"
                initial={{y : -700, opacity: 0}}
                transition={{duration: 1}}
                animate={{y : 0, opacity: 1}}
                >
                <div className="fx-four-text">
                    <h1>GALERIA</h1>
                    <p>ALGUNS DOS PRODUTOS MAIS CONSUMIDOS EM NOSSO ESTABELECIMENTO</p>
                </div>
                <div className="fx-four-images">
                    <div className="linha-1">
                        <img className='one' src={row_img_1} alt=""/>
                        <img className='two' src={row_img_2} alt=""/>
                        <img className='three' src={row_img_3} alt=""/>
                    </div>

                    <div className="linha-2">
                        <img className='for' src={row_img_4}alt=""/>
                        <img className='five' src={row_img_5} alt=""/>
                        <img className='six' src={row_img_6} alt=""/>
                    </div>

                    <div className="linha-3">
                        <img className='seven' src={row_img_7 } alt=""/>
                        <img className='oito' src={row_img_8} alt=""/>
                        <img className='nine' src={row_img_9 } alt=""/>
                    </div>

                    <div className="fx-four-coffee">
                        <img src={grao_flutuante} alt=""/>
                    </div>
                    <div className="fx-four-coffee2">
                        <img src={grao_flutuante} alt=""/>
                    </div>
                    <div className="fx-four-coffee3">
                        <img src={grao_flutuante} alt=""/>
                    </div>
                </div>
            </motion.div>
        }
    </div>
    <div className="fx-five">
        <div className="fx-five-title">
            <p>LOCALIZAÇÃO</p>
        </div>
        <div className="fx-five-hero">
            <div className="fx-five-local">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29244.298021389503!2d-46.681379899999996!3d-23.620923299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50bd429b622d%3A0x765782eb2710bbb2!2sBrooklin%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1667407995009!5m2!1sen!2sbr" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="endereco">
                <p>
                Brooklin
São Paulo - State of São Paulo
                </p>

                <div className="fx-five-button">
                    <img src={ping_img} alt=""/>
                    <a href="https://www.google.com.br/maps/place/Av.+Moaci,+416+-+Planalto+Paulista,+S%C3%A3o+Paulo+-+SP,+04083-000/@-23.6112776,-46.6664059,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5a0c2464805b:0x89a2a0fef31e3cf!8m2!3d-23.6112825!4d-46.6642172"><p>Como chegar</p></a>
                </div>
            </div>
        </div>

    </div>
    <div className="rodape">
        <div className="rodape-hero">
            <div className="sua-cafeteria">
                <h1>Sua Cafetaria!</h1>

                <p>Português do Brasil</p>
               
            </div>
            <div className="rodape-esquerda">
                <div class="produto">
                    <a href=""><b>Produto</b></a>
                    <a href="">Catalógo</a>
                    <a href="">Café da manhã</a>
                    <a href="">Bebidas</a>
                    <a href="">Salgados</a>
                    <a href="">Sobremesas</a>
                </div>

                <div className="produto1">
                    <a href=""><b>Empresas</b></a>
                    <a href="">Quem somos?</a>
                    <a href="">Nosso ideais</a>
                    <a href="">cardápio</a>
                    <a href="">Depoimentos</a>
                    <a href="">Galeria</a>
                    <a href="">Localização</a>
                    <a href="">Contatos</a>
                </div>
            </div>
            <div className="rodape-direita">
                <div className="produto2">
                    <a href=""><b>Recursos</b></a>
                    <a href="">Suporte</a>
                    <a href="">Segurança</a>
                    <a href="">Comentarios</a>
                </div>

                <div className="produto3">
                    <a href=""><b>Politíca</b></a>
                    <a href="">Termos</a>
                    <a href="">Privacidade</a>
                    <a href="">Cookies</a>
                    <a href="">Diretrizes</a>
                    <a href="">Licenças</a>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}


