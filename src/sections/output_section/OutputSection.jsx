/* eslint-disable react/prop-types */
import { useState } from 'react'
import IconCustom from '@/components/UI/IconCustom'
import './OutputSection.css'

const OutputSection = ({ output }) => {
    const [textBtn, setTextBtn] = useState('Copy')

    const handleCopy = async () => {
        if (textBtn === 'Copy') { 
            setTextBtn('Copied')
            setTimeout(() => {
                setTextBtn('Copy')
            }, 2000)
        }
        
        await navigator.clipboard.writeText(output)
    }

    return (
        <section className = 'outputsection-wrapper'>
            <article className = 'outputsection-container'>
                <span className = 'outputsection-header'>
                    <span>Output</span>
                    <button className = 'outputsection-btn-copy' onClick = {handleCopy}>
                        { textBtn === 'Copy' && <IconCustom name = 'copy' color = 'var(--primary-color-dark)' size = '16px' weight = {5} /> }
                        { textBtn === 'Copied' && <IconCustom name = 'check' color = 'var(--primary-color-dark)' size = '12px' weight = {6} /> }
                        <span>{textBtn}</span>
                    </button>
                </span>

                <div className = 'outputsection-output'>
                    { output === '' ? 'No text detected in the image.' : output }
                </div>
            </article>
        </section>
    )
}

export default OutputSection