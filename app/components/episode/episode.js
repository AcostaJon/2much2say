'use client'
// image  component
import PhoneandCoffee from '../images/phoneCoffee';
// my component
import MediaPlayer from '@/app/components/mediaplayer/mediaPlayer';

const Episode = (props) => {

    // episode length in miliseconds
    let milliSeconds = props.length;
    // return episode time in correct format
    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        return hrs + ':' + mins + ':' + secs;
    }


    return (
        // Episode
        <div className='container'>
            <div className='row bg-secondary bg-opacity-10 border border-light-subtle rounded pb-2 ' >
                <div className='col-12 px-0'>
                    {/* episode image */}
                    <div className='image-container' >
                        <PhoneandCoffee />
                    </div>
                </div>
                <div className="col-12 py-2 flex-grow-1" >
                    {/* episode information */}
                    <div className='info-container text-center text-md-start  px-1'>
                        <div className='row episodeMetaData justify-content-between' >
                            <div className='col text-start '>
                                {/* date */}
                                <p>{props.date}</p>
                            </div>
                            <div className='col text-end'>
                                {/* length */}
                                <p>{msToTime(milliSeconds)}</p>
                            </div>
                        </div>
                        {/*  title */}
                        <h3 className='episodeTitle text-light'>{props.title}</h3>
                        {/*  description */}
                        <p className='episodeDesc'>{props.desc}</p>
                        {/* source */}
                        <MediaPlayer src={props.src} spotify={props.spotify} />
                    </div>

                </div>
            </div >
        </div>
    )
}

export default Episode;

