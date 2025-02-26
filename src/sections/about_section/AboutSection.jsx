import './AboutSection.css'

const AboutSection = () => {
    return (
        <section className = 'aboutsection-wrapper'>
            <article className = 'aboutsection-container'>
                <span>Text extraction with OCR</span>
                <span>
                    <span>OCR (Optical Character Recognition) is a technology that allows you to convert printed or handwritten text into images (such as scanned documents, photos or screenshots) into editable digital text. Its main objective is to automate the extraction of information without the need for manual transcription.</span>
                    <span>This process is based on computer vision algorithms and artificial intelligence that identify character patterns within an image. Uses techniques such as image processing, text segmentation and machine learning to improve recognition accuracy.</span>
                </span>
            </article>
        </section>
    )
}

export default AboutSection