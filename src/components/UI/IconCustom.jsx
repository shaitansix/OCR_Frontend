/* eslint-disable react/prop-types */
import { WebcamIcon, ImageIcon, CopyIcon, CheckIcon } from '@/icons/Icons'

const IconCustom = ({ name, size, color, weight }) => {
    return (
        <>
            { name === 'webcam' && <WebcamIcon style = {{ 
                fill: color, 
                stroke: color, 
                width: size, 
                height: 'fit-content', 
                strokeWidth: weight }} /> 
            }

            { name === 'image' && <ImageIcon style = {{ 
                fill: color, 
                stroke: color, 
                width: size, 
                height: 'fit-content', 
                strokeWidth: weight }} /> 
            }

            { name === 'copy' && <CopyIcon style = {{ 
                stroke: color, 
                width: 'fit-content', 
                height: size, 
                strokeWidth: weight }} /> 
            }

            { name === 'check' && <CheckIcon style = {{ 
                stroke: color, 
                width: size, 
                height: 'fit-content', 
                strokeWidth: weight }} /> 
            }
        </>
    )
}

export default IconCustom