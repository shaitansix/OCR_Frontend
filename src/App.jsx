import { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import AboutSection from '@/sections/about_section/AboutSection'
import InputSection from '@/sections/input_section/InputSection'
import OutputSection from '@/sections/output_section/OutputSection'
import Modal from '@/components/UI/Modal'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(true)
  const [output, setOutput] = useState('Output text...')

  return (
    <main className = 'app-wrapper'>
      <section className = 'app-container'>
        <MainLayout>
          <AboutSection />
          <InputSection setOutput = {setOutput} />
          <OutputSection output = {output} />
        </MainLayout>

        { showModal && <Modal title = 'Camera Mode' 
                              body = 'By selecting the "Cam" mode, you can take a shot by clicking on the "Capture" button or pressing the "p" key.' 
                              textBtn = 'Get Started' 
                              setShowModal = {() => setShowModal(false)} />
        }
      </section>
    </main>
  )
}

export default App