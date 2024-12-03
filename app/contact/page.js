'use client'
// my component
import ContactForm from '@/app/components/contactForm'
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function Contact() {
    return (
        <>
        <Header />
            <main id='top' >
                {/* title */}
                <div className='container-fluid py-3 py-md-4 bg-secondary  bg-opacity-10'>
                    <div className='row'>
                        <div className='col text-center'>
                            <h1 className='my-2'>Contact Us</h1>
                        </div>
                    </div>
                </div>

                {/* Social Links Section */}
                <div className='container text-center mt-2 mt-md-4  '>
                    <div className='row justify-content-evenly'>
                        <div className="col border border-light my-4 py-3 ">
                            <a title='2much2say' href='https://www.instagram.com/2much_2say/' target="_blank"><h1 className='my-1'>Instagram <i className="fa-brands fa-instagram"></i></h1></a>
                        </div>
                        <div className="col border border-light py-3 ">
                            <a title='2much2say' href="mailto:someone@example.com"><h1 className='my-1'>Email <i className="fa-solid fa-envelope"></i></h1></a>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className='container text-center  px-md-5 px-md-6 mt-3 mb-5 '>
                    <div className='row'>
                        <div className='col mx-lg-5'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
        </>
    );
}

