import React from 'react'
import Head from 'next/head'

const Refer = (props) => {
  return (
    <>
      <div className="refer-container">
        <Head>
          <title>refer - Gamerzclub</title>
          <meta property="og:title" content="refer - Gamerzclub" />
        </Head>
        <div className="refer-container1">
          <img
            alt="image"
            src="/external/untitled%20design%20(6)-1500w.png"
            className="refer-image"
          />
          <div className="refer-container2">
            <img
              alt="image"
              src="/external/google-removebg-preview-200h.png"
              className="refer-image1"
            />
            <span className="refer-text">Sign in with Google</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .refer-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .refer-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .refer-image {
            width: 200px;
            object-fit: cover;
          }
          .refer-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .refer-image1 {
            width: 200px;
            object-fit: fill;
          }
          @media (max-width: 767px) {
            .refer-container {
              justify-content: flex-start;
              background-color: #303030;
            }
            .refer-container1 {
              gap: var(--dl-space-space-fiveunits);
              width: 100%;
              align-items: center;
            }
            .refer-image {
              width: 100%;
              height: 357px;
            }
            .refer-container2 {
              gap: 35px;
              width: var(--dl-size-size-xxlarge);
              height: 55px;
              align-items: center;
              border-radius: var(--dl-radius-radius-radius8);
              justify-content: center;
              background-color: #0e0e0e;
            }
            .refer-image1 {
              width: 35px;
              height: 39px;
            }
            .refer-text {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 479px) {
            .refer-container {
              justify-content: flex-start;
              background-color: #303030;
            }
            .refer-container1 {
              gap: var(--dl-space-space-sixunits);
              width: 100%;
              height: 100%;
              align-items: center;
            }
            .refer-image {
              width: 100%;
              height: 474px;
              padding-bottom: 0px;
            }
            .refer-container2 {
              gap: var(--dl-space-space-twounits);
              width: var(--dl-size-size-xxlarge);
              height: 50px;
              align-items: center;
              border-radius: var(--dl-radius-radius-radius8);
              justify-content: center;
              background-color: #0e0e0e;
            }
            .refer-image1 {
              width: 33px;
              height: 34px;
            }
            .refer-text {
              color: rgb(255, 255, 255);
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

export default Refer
