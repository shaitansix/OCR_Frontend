import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './MainLayout.css'

const MainLayout = ({ children }) => {
    return (
        <main className = 'mainlayout-wrapper'>
            <section className = 'mainlayout-container'>
                <Header />
                
                <article className = 'mainlayout-content'>
                    {children}
                </article>
            </section>
            
            <Footer />
        </main>
    )
}

export default MainLayout