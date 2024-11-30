'use client'
// image components
import PhoneandCoffee from '@/app/components/images/phoneCoffee';
import Logo from '@/app/components/images/logo';
import LisiAvatar from '@/app/components/images/lisi';
// my components
import Subscribe from '@/app/components/subscribe'
import LatestEpisodes from '@/app/components/episode/latestEpisodes';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

 export default function About(props) {
  return (
    <>
    <Header />
      <main id='top'>
        {/*Introduction Section - About our podcast */}
        <div className='container my-3 py-3'>
          <div className='row d-flex flex-column-reverse flex-md-row'>
            <div className='col d-flex flex-column align-items-center align-items-md-start my-4 '>
              <h1>About Our <span className="text-info">Podcast</span></h1>
              <p  className='my-3 mx-2 mx-md-0'>Trane is the most popular podcast network in North America. We've been nominated to 23 Poddy awards and our creators are best in class.</p>
              <button type='btn' href='/episodes' variant='info' size='lg'>All Episodes</button>
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
                <h1 className='mx-3'>The Only Podcast I Want To Listen To</h1>
                <div className='container'>
                  <Logo />
                  <p>Real Conversations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Episodes Section */}
        <LatestEpisodes episodes={props.latestEp} />

        {/* Our Team Section */}
        <div className='conatiner my-5 py-3'>
          <div className='row' >
            <div className='col'>
              <h1>Our Team</h1>
              <p>This is brought to you by these awesome people</p>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col'>
              <h3>Host</h3>
              <h1>
                Leslie Acosta
              </h1>
            </div>
            <div className='col'>
              <LisiAvatar />
              <h3>Host</h3>
              <h1>
                Lysandra Colon
              </h1>
            </div>
          </div>
        </div>

        {/*Subscribe Section - join the part */}
        <div className='container-fluid' id='jointheParty'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col'>
                <h1>Join the Party</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p className='m-auto my-4 w-50'>Our community is what drives us forward. We couldn't have done it without your support! We work hard to produce the best content we possible can.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
   );
 }

