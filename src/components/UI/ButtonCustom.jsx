/* eslint-disable react/prop-types */
import './styles/ButtonCustom.css'

const ButtonCustom = ({ className, variant, text, width = 'fit-content', onClick, disabled = false, btnRef }) => {
    return (
        <>
            { variant === 'default' &&
                <button className = {`buttoncustom-container-variant_${variant} ${className}`} style = {{ width }} onClick = {onClick} disabled = {disabled}>
                    { text}
                </button>
            }

            { variant === 'capture' &&
                <button className = {`buttoncustom-container-variant_${variant} ${className}`} style = {{ width }} onClick = {onClick} disabled = {disabled} ref = {btnRef}>
                    <div>
                        {text}
                        <BorderElement className = {`buttoncustom-container-variant_${variant}-border-top_left`} />
                        <BorderElement className = {`buttoncustom-container-variant_${variant}-border-top_right`} />
                        <BorderElement className = {`buttoncustom-container-variant_${variant}-border-bottom_left`} />
                        <BorderElement className = {`buttoncustom-container-variant_${variant}-border-bottom_right`} />
                    </div>
                </button>
            }
        </>
    )
}

const BorderElement = ({ className }) => {
    return (
        <div className = {className} />
    )
}

export default ButtonCustom