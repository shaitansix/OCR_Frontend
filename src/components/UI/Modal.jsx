/* eslint-disable react/prop-types */
import ButtonCustom from '@/components/UI/ButtonCustom'
import './styles/Modal.css'

const Modal = ({ title, body, textBtn, setShowModal }) => {
    return (
        <section className = 'modal-container'>
            <article className = 'modal-card'>
                <span className = 'modal-info'>
                    <span className = 'modal-title'>{title}</span>
                    <span className = 'modal-body'>{body}</span>
                </span>

                <ButtonCustom variant = 'capture' 
                              text = {textBtn} 
                              onClick = {() => setShowModal()} />
            </article>
        </section>
    )
}

export default Modal