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
        <Push />
      </Container>

    </MainLayout>
  );
}

const Push = styled.div`
  height: 10vh;
`;

const Container = styled.div`
  padding: 0 8%;
  width: 100%;
  height: 100%;
  font-size: 16px;
  margin-bottom: -10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
        padding: 3%;
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
          border-radius: 5px;
      }
      textarea {
        margin: 10px;
          width: 100%;
          padding: 10px 20px;
          font-size: 100%;
          border: none;
          background-color: #e6e6e6;
          border-radius: 5px;
      }

      input[type="submit"] {
          border: none;
          font-size: 18px;
          font-weight: 600;
          background-color: #e6e6e6;
          cursor: pointer;
          color: black;
          transition: all .3s ease-in-out;
          border-radius: 5px;

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
    border-radius: 5px;
    
    legend {
        font-size: 24px;
        font-weight: 600;
    }
    
    @media only screen and (max-width: 500px) {
        border: 0;
        padding: 0 5% 0 0;
        legend {
          display: none;
        }
    }
    
    
  }

  
`;
