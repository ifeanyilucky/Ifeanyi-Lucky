import Head from "next/head";
import style from "../styles/Home.module.css";
import React, {Component} from "react";
import Layout from "../Components/Layout";
import Link from "next/link";

const Index =()=>{
  return(
    <>
<Layout>
    <Head>
      <title>Ifeanyi Lucky</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
    <link rel="preload" href="../public/font/GT-Walsheim-Medium.woff2" as="font" crossorigin=""/>
    </Head>
    <div>
    <div className={style.helloParent}>
    <div className={style.hello}>HELLO</div></div>
    <div>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className={style.intro}>

        <h1 className="h1">I am <span style={{color: "teal"}}>Ifeanyi</span> Lucky</h1>
        <div className={style.role}>Frontend Developer</div>
        <p className="mx-auto mt-3" >Frontend developer and Javascript engineer based in Lagos, practicing minimalist, and Hiphop Music & Jazz lover in search of flow.</p> <br/>
        <p style={{lineHeight: "30px"}}>Working with my hands to make magic happen on the internet. View my <span className="link">Projects</span>, <span className="linkk">Articles</span>, <span className="link">Resumé</span>, <span className="link">Contact</span> me, or send me an email at <span className="link">ifeanyilucky360@gmail.com</span>.</p>
     
     
      </div>
      <div className="mt-5">
<p><Link href="/pages/about"><a>See more about me</a></Link></p>
      </div>

        </div>
      </div>
      
    </div>
    </div>
   </Layout>
    </>
  )
}

export default Index