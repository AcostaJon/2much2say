// react component
import Link from 'next/link';
// image component
import Logo from '@/app/components/images/logo';
// My components
// import Subscribe from './subscribe'

function Header() {
  return (
    // Navigation Bar
    <div className="navbar navbar-expand-md bg-transparent p-0">
      <div className='container' >
        {/* logo */}
        <Link className='navbar-brand' href="/"> <Logo /></Link>
        {/* nav links */}
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarScroll" className='collapse navbar-collapse flex-md-wrap justify-content-md-end '>
          <ul className='d-flex flex-column flex-md-row align-items-center'>
            <Link className='me-lg-3' href="/">Home</Link>
            <Link className='me-lg-3' href="/about">About</Link>
            <Link className='me-lg-3' href="/episodes">Episodes</Link>
            <Link className='me-lg-3' href="/reviews">Reviews</Link>
            <Link className='me-lg-3' href="/contact">Contact Us</Link>
            {/* <Subscribe /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;