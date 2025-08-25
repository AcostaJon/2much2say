'use client'
// my components
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function Reviews() {
  return (
    <>
    <Header />
      <main id='top'>
        {/* title */}
        <div className='container-fluid bg-secondary  bg-opacity-10'>
          <div className='container'>
            <div className='row my-5'>
              <div className='col text-center py-5'>
                <h1>Reviews</h1>
              </div>
            </div>
          </div>
        </div>

        {/* power commenting system */}
        <div className='container'>

        </div>
      </main>
      <Footer />
    </>
  );
}
