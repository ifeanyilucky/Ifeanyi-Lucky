import React, { Component } from "react";
import Layout from "../Components/Layout";

import styled from "styled-components";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Layout title="Contact" text="Contact">
          <div className="col-12 mx-auto">
            <div className="container">
              <div className="mt-5">
                <h1 className="intro___text"> Contact.</h1>

                <div>
                  <p>
                    Get in touch or shoot me an email directly on{" "}
                    <strong>ifeanyilucky360@gmail.com.com</strong>
                  </p>
                </div>
                <div>
                  <Form>
                    <div className="field half">
                      <input
                        className="form__control"
                        type="text"
                        placeholder="Full Name"
                        aria-required="true"
                        required="true"
                      />
                    </div>

                    <div className="field half">
                      <input
                        className="form__control"
                        type="email"
                        placeholder="email"
                        aria-required="true"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        className="form__control"
                        rows="5"
                        cols="20"
                        placeholder="message"
                        aria-required="true"
                        required
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn Btn btn-default">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

const PageSection = styled.div`
  .intro___text {
    font-size: var(--);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
  }
`;

const Form = styled.form`
  .form__control {
    display: block;
    background-color: var(--bg-color) !important;
    margin-bottom: 2rem;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    outline: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &::placeholder {
      color: #6c757d;
    }
  }
  textarea {
    background: transparent;
    margin-bottom: 2rem;
    resize: none;
    box-shadow: none !important;
    padding: 24px 21px !important;
    border-color: var(--border-color) !important;
    height: auto;
  }
  .Btn {
    padding: 15px 40px;
    background-color: var(--border-color);
  }
`;

export default Contact;
