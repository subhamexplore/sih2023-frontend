import {Routes, Route} from 'react-router-dom'
import Main from '../pages/Main'
import LoginSignup from '../pages/LoginSignup'
import Category from '../pages/Category'
import Image_upload from '../pages/Image_upload'
import Vdo_upload from '../pages/Vdo_upload'
import WebcamStreamCapture from '../components/WebcamStreamCapture'

export default function Home({userDetails}){
    return(
        <Routes>
            <Route path='/' element={<Main userDetails={userDetails}/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/home' element={<Category userDetails={userDetails}/>}/>
            <Route path='/image' element={<Vdo_upload/>}/>
        </Routes>
    )
}