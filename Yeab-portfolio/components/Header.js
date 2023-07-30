import Image from 'next/image'
import React from 'react'
// import { images } from '../../constants';

import profilePic from '../public/profile.jpg'
const Header = () => {
  return (
    <>
      <section id="home" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 header__flex">
              <div className="">
                <div >
                <h6 className="header__hello">Hello.  I&apos;m</h6>
                <h1 className="header__intro">Yeabtsega Behailu</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="profile-pic">
                <Image 
                className="img-fluid" 
                // src="../images/profile.png" 
                src={profilePic}
                alt="Yeabtsega Behailu"
                width={370}
                height={370} 
                priority={true} 
                rel="preload"  
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header