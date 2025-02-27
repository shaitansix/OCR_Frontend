/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import ButtonCustom from '@/components/UI/ButtonCustom'
import './WebcamComponent.css'

const WebcamComponent = ({ setImgUrl }) => {
    const btnRef = useRef(null)

    const videoConstraints = {
        width: 752, 
        height: 500,  
        facingMode: 'user'
    }

    const handleCapture = async (getScreenshot) => {
        const imageBase64 = getScreenshot()
        setImgUrl(imageBase64)
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'p') { 
                btnRef.current.click()
            }
        }
    
        window.addEventListener('keydown', handleKeyPress)
    
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [])
    
    
    return (
        <Webcam audio = {false} 
                width = {752}
                height = {500}
                screenshotFormat = 'image/jpeg'
                videoConstraints = {videoConstraints}>
            { ({ getScreenshot }) => (
                <ButtonCustom className = 'webcamcomponent-btn' 
                              variant = 'capture' 
                              text = 'Capture' 
                              width = '98px' 
                              onClick = {() => handleCapture(getScreenshot)}
                              btnRef = {btnRef} />
            ) }
        </Webcam>
    )
}

export default WebcamComponent