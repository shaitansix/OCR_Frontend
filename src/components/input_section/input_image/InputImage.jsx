/* eslint-disable react/prop-types */
import IconCustom from '@/components/UI/IconCustom'
import './InputImage.css'

const InputImage = ({ setImgUrl }) => {
    const handleFile = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgUrl(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <span className = 'inputimage-container'>
            <input className = 'inputimage-input' id = 'input-image' type = 'file' accept = 'image/*' onChange = {handleFile} />
            <label className = 'inputimage-label' htmlFor = 'input-image'>
                <IconCustom name = 'image' color = 'var(--primary-color-dark)' size = '160px' weight = {2} />
                <span>Find image to upload</span>
            </label>
        </span>
    )
}

export default InputImage