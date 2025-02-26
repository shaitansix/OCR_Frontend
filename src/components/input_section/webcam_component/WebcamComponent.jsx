import { useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
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
                <button className = 'webcamcomponent-btn' 
                        onClick = {() => handleCapture(getScreenshot)} 
                        ref = {btnRef}>
                    <div className = 'webcamcomponent-btn-text'>
                        Capture
                        <BorderElement className = {'webcamcomponent-border-top_left'} />
                        <BorderElement className = {'webcamcomponent-border-top_right'} />
                        <BorderElement className = {'webcamcomponent-border-bottom_left'} />
                        <BorderElement className = {'webcamcomponent-border-bottom_right'} />
                    </div>
                </button>
            ) }
        </Webcam>
    )
}

const BorderElement = ({ className }) => {
    return (
        <div className = {className} />
    )
}

export default WebcamComponent