/* eslint-disable react/prop-types */
import { useState } from 'react'
import Menu from '@/components/input_section/menu/Menu'
import WebcamComponent from '@/components/input_section/webcam_component/WebcamComponent'
import InputImage from '@/components/input_section/input_image/InputImage'
import ButtonCustom from '@/components/UI/ButtonCustom'
import { extractText } from '@/services/image.js'
import './InputSection.css'

const InputSection = ({ setOutput, loading, setLoading }) => {
    const [typeOption, setTypeOption] = useState('webcam')
    const [imgUrl, setImgUrl] = useState('')

    const handleOCR = async () => {
        setLoading(true)
        const result = await extractText({ image: imgUrl })
        setOutput(result.output)
        setLoading(false)
    }

    return (
        <section className = 'inputsection-wrapper'>
            <article className = 'inputsection-container'>
                <span className = 'inputsection-left'>
                    <Menu setImgUrl = {setImgUrl} setTypeOption = {setTypeOption} />
                    <ButtonCustom disabled = {imgUrl === '' || loading}
                                  variant = 'default' 
                                  text = 'Extract' 
                                  onClick = {handleOCR} />
                </span>

                <div className = { typeOption === 'webcam' || imgUrl !== '' ? 'inputsection-screen inputsection-screen-webcam' : typeOption === 'image' ? 'inputsection-screen inputsection-screen-image' :  'inputsection-screen'}>
                    { imgUrl !== '' ? 
                        <img style = {{ width: '100%', height: '100%' }} src = {imgUrl} alt = 'image' /> : 
                        typeOption === 'webcam' ? 
                            <WebcamComponent setImgUrl = {setImgUrl} /> : 
                            typeOption === 'image' && <InputImage setImgUrl = {setImgUrl} />
                    }
                </div>
            </article>
        </section>
    )
}

export default InputSection