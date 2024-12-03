'use client'
// image components
import PhoneandCoffee from '@/app/components/images/phoneCoffee';
import Logo from '@/app/components/images/logo';
import LisiAvatar from '@/app/components/images/lisi';
// my components
import Subscribe from '@/app/components/subscribe'
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function About() {
  return (
    <>
      <Header />
      <main id='top'>
        {/*Introduction Section - About our podcast */}
        <div className='container my-3 py-3'>
          <div className='row d-flex flex-column-reverse flex-md-row'>
            <div className='col d-flex flex-column align-items-center align-items-md-start my-4 '>
              <h1>About Our <span className="text-info">Podcast</span></h1>
              <p id="aboutMessage"  className='mb-3 mx-4 mx-md-0 text-center text-md-start '>2much2say is the most popular podcast network in North America. We've been nominated for awards and our creators are best in class.</p>
              <a href='/episodes' className='btn btn-info'>All Episodes</a>
            </div>
            <div className="col">
              <PhoneandCoffee />
            </div>
          </div>
        </div>

        {/* Only podcast I would listen to */}
        <div className='container-fluid' id='theonlyPodcast'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col'>
                <h1 className='w-75 mx-auto'>The Only Podcast I Want To Listen To</h1>
                <div className='container'>
                  <Logo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className='conatiner w-75 mx-auto my-5 py-3'>
          <div className='row' >
            <div className='col text-center'>
              <h3 className='fs-4'>Our Team</h3>
              <h1 className='fs-3  mt-2'>This is brought to you by these awesome people</h1>
            </div>
          </div>
          <div className='row text-center mt-3'>
            <div className='col'>
              <h1 className='fs-4'>Host</h1>
              <p className='fs-6'>
                Leslie Acosta
              </p>
            </div>
            <div className='col'>
              <LisiAvatar />
              <h1 className='fs-4'>Host</h1>
              <p className='fs-6'>
                Lysandra Colon
              </p>
            </div>
          </div>
        </div>

        {/*Subscribe Section - join the part */}
        <div className='container-fluid' id='jointheParty'>
          <div className='container text-center'>
          <div className='col text-center'>
                <h3 className="fs-2">Join the Party</h3>
                <h1 className="fs-1">Subscribe to The Show</h1>
                <p id="subscribeMessage"  className=' mx-auto mb-4'>
                Our community is what drives us forward. We couldn't have done it without your support! We work hard to produce the best content we possible can.</p>
                <Subscribe />
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

