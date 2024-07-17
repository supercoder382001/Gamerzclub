import React from 'react'
import Head from 'next/head'
import { useState } from 'react';

function submit() {
  const queryParams = new URLSearchParams(window.location.search);
  const value = queryParams.get('userRef');
    try {
      const response = fetch('https://pnoizevucqxgvlcqzaib.supabase.co/rest/v1/rpc/insertuserreferred', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBub2l6ZXZ1Y3F4Z3ZsY3F6YWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMTUxMjYsImV4cCI6MjAyNDY5MTEyNn0.1hr4XhNCNEj83q_y19Wk6egirYCCDqgVjx4l3a4Tt6I',
          'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBub2l6ZXZ1Y3F4Z3ZsY3F6YWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMTUxMjYsImV4cCI6MjAyNDY5MTEyNn0.1hr4XhNCNEj83q_y19Wk6egirYCCDqgVjx4l3a4Tt6I'
        },
        body: JSON.stringify({
          name: namer.value,
          mobilenumber: mobile.value,
          gender: gender.value,
          email: email.value,
          referid:value,
          userid: 12345
        })
      })   
      if (!response.ok) {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1pWdnzvDjT-ciCaeYvvztKDpNOqoReQRP';
      } else {
        console.error('Error:', response);
      }  } 
    catch (error) {
      console.error('Error:', error);
    }  
  } 
const Form = (props) => {
  const [namer, setNamer] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setmobile] = useState('');
  const [gender, setGender] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'namer') {
      setNamer(value);
    } else if (id === 'mobile') {
      setmobile(value);
    } else if (id === 'gender') {
      setGender(value);
    }
  };

  return (
    <>
      <div className="form-container">
        <Head>
          <title>form - Gamerzclub</title>
          <meta property="og:title" content="form - Gamerzclub" />
        </Head>
        <div className="form-container1">
          <img
            alt="image"
            src="/external/untitled%20design%20(6)-1500w.png"
            className="form-image"
          />
          <div className="form-container2">
            <span className="form-text">
              <span className="form-text1">Enter your email Id</span>
              <br></br>
            </span>
            <input
            type="email"
            required={true}
            placeholder="Enter your email id"
            value={email}
            id="email"
            className="email"
            onChange={handleInputChange}
            />
          </div>
          <div className="form-container3">
            <span className="form-text3">Enter your Name</span>
            <input
            type="text"
            required={true}
            placeholder="Enter your Name"
            id="namer"
            value={namer}
            className="namer"
            onChange={handleInputChange}
            />
          </div>
          <div className="form-container4">
            <span className="form-text4">Enter your Mobile Number</span>
            <input
            type="number"
            max="10"
            required={true}
            placeholder="Enter your Mobile Number"
            value={mobile}
            id="mobile"
            className="mobile"
            onChange={handleInputChange}
            />
          </div>
          <div className="form-container5">
            <span className="form-text5">Select Gender</span>
            <select
            name="Gender"
            required={true}
            id="gender"
            className="gender"
            value={gender}
            onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-container6" onClick={submit}>
            <div className="form-container7">
              <span className="form-text6">Submit</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .form-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .form-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-image {
            width: 200px;
            object-fit: cover;
          }
          .form-container2 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-container3 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-container4 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-container5 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .form-container7 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 767px) {
            .form-container {
              background-color: #303030;
            }
            .form-container1 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              height: 100%;
            }
            .form-image {
              width: 100%;
              height: 413px;
              object-fit: initial;
            }
            .form-container2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text {
              color: var(--dl-color-custom-neutral-light);
              font-size: 19px;
              font-style: normal;
              font-weight: 700;
            }
            .form-text1 {
              color: var(--dl-color-custom-neutral-light);
              font-size: 19px;
              font-style: normal;
              font-weight: 700;
            }
            .form-textinput {
              width: 95%;
              height: 50px;
            }
            .form-container3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text3 {
              color: var(--dl-color-custom-neutral-light);
              font-size: 19px;
              font-style: normal;
              font-weight: 700;
            }
            .form-textinput1 {
              width: 95%;
              height: 50px;
            }
            .form-container4 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text4 {
              color: var(--dl-color-custom-neutral-light);
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .form-textinput2 {
              width: 95%;
              height: 50px;
            }
            .form-container5 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text5 {
              color: var(--dl-color-custom-neutral-light);
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .form-select {
              width: 95%;
              height: 50px;
            }
            .form-container6 {
              justify-content: center;
            }
            .form-container7 {
              gap: 35px;
              width: var(--dl-size-size-xxlarge);
              height: 55px;
              align-items: center;
              border-radius: var(--dl-radius-radius-radius8);
              justify-content: center;
              background-color: #0e0e0e;
            }
            .form-text6 {
              color: rgb(255, 255, 255);
            }
          }
          @media (max-width: 479px) {
            .form-container {
              background-color: #303030;
            }
            .form-container1 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              height: 100%;
            }
            .form-image {
              width: 100%;
              height: 413px;
            }
            .form-container2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text {
              color: var(--dl-color-custom-neutral-light);
            }
            .form-textinput {
              width: 95%;
              height: 50px;
            }
            .form-container3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text3 {
              color: var(--dl-color-custom-neutral-light);
              font-size: 19px;
              font-style: normal;
              font-weight: 700;
            }
            .form-textinput1 {
              width: 95%;
              height: 50px;
            }
            .form-container4 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text4 {
              color: var(--dl-color-custom-neutral-light);
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .form-textinput2 {
              width: 95%;
              height: 50px;
            }
            .form-container5 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-left: var(--dl-space-space-halfunit);
            }
            .form-text5 {
              color: var(--dl-color-custom-neutral-light);
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            }
            .form-select {
              width: 95%;
              height: 50px;
            }
            .form-container6 {
              justify-content: center;
            }
            .form-container7 {
              gap: var(--dl-space-space-twounits);
              width: var(--dl-size-size-xxlarge);
              height: 50px;
              align-items: center;
              border-radius: var(--dl-radius-radius-radius8);
              justify-content: center;
              background-color: #0e0e0e;
            }
            .form-text6 {
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

export default Form
