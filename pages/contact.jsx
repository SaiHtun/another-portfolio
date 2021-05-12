import React from "react";
import styled from "styled-components";
import MainLayout from '../components/layouts/MainLayout';

export default function contact() {
  return (
    <MainLayout>
      <Container>
        <form className="form" action="https://formsubmit.co/f3345811c94fc79bfd074ec5b1b8f29e" method="POST">
          <fieldset className="fieldset">
            <legend>Contact Sai</legend>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="message"
               rows="10"
              cols="5"
              placeholder="Enter messages"
              required
            ></textarea>
            {/* <input type="hidden" name="_captcha" value="false"></input> */}
            <input type="hidden" name="_autoresponse" value="Hello, thanks for reaching out, i'll be back to you shortly!"></input>
            <input type="hidden" name="_next" value="http://localhost:3000/thankyou"></input>
            <input type="submit" value="Send"></input>
          </fieldset>
        </form>
      </Container>

    </MainLayout>
  );
}



const Container = styled.div`
  padding: 0 8%;
  width: 100%;
  min-height: 80vh;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
        padding: 3%;
        margin-top: 10vh;
    }

  .form {
    min-width: 370px;
    width: 600px;
      input {
          width: 100%;
          padding: 10px 20px;
          margin: 10px;
          font-size: 100%;
          border: none;
          background-color: #e6e6e6;
          border-radius: 10px;
      }
      textarea {
        margin: 10px;
          width: 100%;
          padding: 10px 20px;
          font-size: 100%;
          border: none;
          background-color: #e6e6e6;
          border-radius: 10px;
      }

      input[type="submit"] {
          border: none;
          font-size: 18px;
          font-weight: 600;
          background-color: #e6e6e6;
          cursor: pointer;
          color: black;
          transition: all .3s ease-in-out;
          border-radius: 10px;

        :hover {
            background-color: #61dbfb;
            color: white;
        }

      }
  }

  .fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 40px 30px 20px;
    border-radius: 10px;
    
    legend {
        font-size: 24px;
        font-weight: 600;
    }
    
    @media only screen and (max-width: 500px) {
        padding: 10px 30px 10px 10px;
    }
    
    
  }

  
`;
