/* eslint-disable react/prop-types */
import './styles/Modal.css'

const Modal = ({ title, body, textBtn, setShowModal }) => {
    return (
        <section className = 'modal-container'>
            <article className = 'modal-card'>
                <span className = 'modal-info'>
                    <span className = 'modal-title'>{title}</span>
                    <span className = 'modal-body'>{body}</span>
                </span>
                <button className = 'modal-btn' onClick = {() => setShowModal()}>
                    {textBtn}
                </button>
            </article>
        </section>
    )
}

export default Modal