import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Landy from './page/landy'
import Menu from './page/Menu'
import Qrcode from './page/Qrcode'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Landy/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/qrcode' element={<Qrcode/>} />
            </Routes>
        </BrowserRouter>
    )
}