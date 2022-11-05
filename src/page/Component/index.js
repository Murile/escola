import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function Cabecalho (){
    const Navigate = useNavigate();
    return(
        <main className='main-cabecalho'>
            <div className='div-img'>
                <img src="assets/img/picwish (1).png" alt="" width="135px" />
            </div>

            <div className='div-space'>

                        
                    <div className='div-infos'>


                        <h4> Cultura </h4>
                        <h4> Igreja </h4>
                        <h4> Pedra Histórica </h4>
                        <h4> Brooklin  </h4>             
                        <h4> Oktoberfest </h4>
                        
                     </div>

                <div className='div-menu' onClick={() => Navigate('/menu')}>

                    <button> Menu </button>

                </div> 

            </div>
             

        </main>
    )
}