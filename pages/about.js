import React, { Component } from "react";
import Layout from "../Components/Layout/index";
import Head from "next/head";
import Footer from "../Components/Footer";

class About extends React.Component {
  //     constructor(){
  //         super();
  //         this.state = {
  //             heading: "Hello World",
  //             button: "Click here",
  //             goBack: ""
  //         }
  //     }
  //   buttonClick(){
  //       this.setState({
  //           heading: "Thanks for cliking",
  //           button: "Button clicked",
  //           goBack: "Go back home"
  //       })
  //   }

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementFive() {
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
  }
  increase() {
    // this.setState({
    //         count: this.state.count + 1
    // }, () =>{console.log("callback value:", this.state.count)} )
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <Layout>
          <Head>
            <title>About Me | Ifeanyi Lucky | Codack</title>
          </Head>
          {/* <h1>{this.state.heading}</h1>
        <button className="link btn-primary btn" onClick={()=>{this.buttonClick()}}>{this.state.button}</button>
        <Link href="/"><a>{this.state.goBack}</a></Link>
 */}

          <div>{this.state.count}</div>
          <button
            onClick={() => {
              this.incrementFive();
            }}
          >
            Increment
          </button>
          <Footer firstName="Ifeanyi" lastName="Lucky" country="USA" />
        </Layout>
      </>
    );
  }
}

export default About;
