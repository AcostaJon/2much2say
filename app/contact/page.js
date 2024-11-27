'use client'
// Contact page
// bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                <Container fluid className='mt-5 py-5 bg-secondary  bg-opacity-10'>
                    <Row>
                        <Col className='text-center'>
                            <h1>Contact Us</h1>
                        </Col>
                    </Row>
                </Container>

                {/* Social Links Section */}
                <Container className='text-center my-5 p-4 '>
                    <Row xs={1} lg={3} className='justify-content-evenly'>
                        <Col className="border border-light my-4 py-3 ">
                            <a title='2much2say' href='https://www.instagram.com/2much_2say/' target="_blank"><h1>Instagram <i className="fa-brands fa-instagram"></i></h1></a>
                        </Col>
                        <Col className="border border-light py-3 ">
                            <a title='2much2say' href="mailto:someone@example.com"><h1>Email</h1></a>
                        </Col>
                    </Row>
                </Container>

                {/* Form Section */}
                <Container className='text-center py-5 px-md-5 px-md-6 my-3 '>
                    <Row>
                        <Col className='mx-lg-5'>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </main>
        <Footer />
        </>
    );
}

