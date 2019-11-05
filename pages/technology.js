import Header from "../components/Header"
import Footer from "../components/Footer"
import Subscripcion from "../components/Subscripcion"
import Newsletter from "../components/Newsletter"
import Link from 'next/link';
import '../custom.scss';
import React from 'react';

const Index = () => (
  <div>
    <Header/>
    <section className="container-fluit pt-5" id="Business-Cover">
        <div className="row py-5 m-0 mt-5">
          <div className="col-12 col-lg-2 py-5 my-5 d-none d-lg-block">
            <div className="col p-3">
              <p className="grades my-3"><a href="#" className="grades text-white col-12">Consumers</a></p>
          </div>
            <div className="col p-3">
              <p className="grades my-3"><a href="#" className="grades text-white col-12">Business</a></p>
           </div>
          </div>
          <div className="col-12 col-lg-8 py-5 my-5 text-center">
          <h1 className="display-3 text-white font-weight-bold">Create a Competative <br className="d-none d-lg-block" />
            Advantage with Trust and <br className="d-none d-lg-block" />
            Transparency</h1>
          <button type="button" className="border border-white bg-transparent text-white rounded-lg  px-5 py-2 my-2">Request Demo</button>
          </div>
          <div className="col-12 col-lg-2 p-5 my-5">
          </div>
      </div>
    </section>

    <section className="container-fluit text-center py-5 bg-light">
    <br />
    <br />
    <p className="container p-2 p-lg-5 m-auto">
      Retraced offers fashions brands the opportunity to gain <br className="d-none d-lg-block" /> strategic supply chain
      insights while sharing their story with <br className="d-none d-lg-block" />
      consumers.
    </p>
    <br />
    <br />
    <br />
    <br />
    </section>

    <section className="container-fluit ">
        <div className="container text-center py-5">
           <div className="row align-items-center">
             <div className="col-12 col-lg text-center text-lg-left">
               <h1 className="">
                 Supply Chain <br/>
                 Tracing Tool
                 </h1>
                   <p className="container py-5 m-0 px-0">
         With retraced’s advanced blockchain tracing system,
         brands are able to efficiently collect as much supply chain
         data  as possible - even down to the origin of the product’s
         raw materials.
         <br /><br />
         This information can be mapped digitally, helping provide
         supply chain visibility and oversight for management.
       </p>
           <button type="button" className="text-orange bg-transparent rounded-lg border-orange px-5 py-2 my-2">See Features</button>
             </div>
              <div className="col-12 col-lg py-4">
              <img className="img" src="../static/Mock-Up_-Iphone-X_3.4.png" alt="my image" />
              </div>

      </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>

    <section className="container-fluit text-center py-5 bg-light">
      <div className="container">
      <div className="row align-items-center">
              <div className="col-12 col-lg text-center text-lg-left">
                  <h1 className="">
                    Automated Impact Analysis
                  </h1>
                  <p className="container py-5 m-0 px-0">
                    Reliable supply chain transparency means that brands can
                    verify collected data on the materials used in producing
                    their products, the working conditions involved, as well as
                    the implications for the environment.
                    <br/><br/>
                    Retraced offers a collection of automatically generated
                    insights to help brands monitor and maintain the
                    sustainability and fairness values that they care about.
                  </p>
                  <button type="button" className="text-orange bg-transparent rounded-lg border-orange px-5 py-2 my-2">Learn More</button>
              </div>
              <div className="col-12 col-lg py-4">
                  <img className="img" src="../static/Mock-Up_-Iphone-X_3.4_2.png" alt="my image" />
              </div>
            </div>
            </div>
       </section>

       <section className="container-fluit text-center py-5">
         <div className="container">
         <div className="row align-items-center">
                 <div className="col-12 col-lg text-center text-lg-left">
                     <h1 className="">
                       Communication Platform
                     </h1>
                     <p className="container py-5 m-0 px-0">
                       With the help of the mobile app, end-consumers can scan their product of interest to get information on the product’s origin, it’s raw materials, as well as sustainability and fairness KPIs
                       <br/> <br/>
                       This innovative touch-point allows brands to connect their products and production standards to their customers, before and after purchase.
                     </p>
                     <button type="button" className="text-orange bg-transparent rounded-lg border-orange px-5 py-2 my-2">Learn More</button>
                 </div>
                 <div className="col-12 col-lg py-4">
                     <img className="img" src="../static/Mock-Up_-Iphone-X_3.4_3.png" alt="my image" />
                 </div>
               </div>
               </div>
          </section>

        <section className="container text-center py-5 ">
           <h1 className="py-5">
            Why us?
           </h1>
           <div className="row">
             <div className="col-4">
               <img className="img" src="../static/Group 140.png" alt="my image" />
               <p className="">Differentiation with New Consumer Touchpoint</p>
               <p className="">With the track and trace feature and deep
                 product insights, Retraced brings a unique
                 shopping experience at the point-of-sale
                 and the after-sale.</p>
             </div>
             <div className="col-4">

             </div>
             <div className="col-4">

             </div>
             <div className="col-4">

             </div>
             <div className="col-4">

             </div>
             <div className="col-4">

             </div>
          </div>
        </section>
        <section className="container-fluit text-center py-5 bg-light">
           <h1 className="py-5">
            Our Mission
           </h1>
           <div className="col">
           <p className="text-center">Connecting People to Products to People: <br className="d-none d-lg-block"/>
           We are a team that’s crazy about transparency, and <br className="d-none d-lg-block"/>
           inspired to connect a community of stakeholders who seek <br className="d-none d-lg-block"/>
           to make the world a more honest and transparent place.</p>
               <button type="button" className="text-orange bg-transparent rounded-lg border-orange px-5 py-2 my-2">Learn More</button>
          </div>
        </section>
        <section className="container text-center py-5 ">
           <h1 className="py-5">
            Hear directly from our partners
           </h1>
           <div className="col">
           <a href="#" className="text-orange">See our Case Studies</a>
          </div>

        </section>
        <section className="container text-center py-5 ">
           <h1 className="py-5">
           Keep Updated
           </h1>
           <div className="col">

          </div>
          <a href="#" className="text-orange">Check out our Latest News</a>
        </section>
        <section className="content-fluit bg-yellow-mail text-center">
        <Subscripcion className=""/>
        </section>
        <Footer/>
  </div>
);

export default Index;
