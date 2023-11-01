import * as React from "react";
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import Counter from "./components/Counter";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {prevEditionsData} from "../../data/prev-editions-data";

export default function Home({ data }) {
  return (
    <Layout page="home">
      <header className="home__header">
        <div className="home__header__text">
          <h1>WARSAW <br />NEGOTIATION <br />ROUND</h1>
          <h2>April 15th 2023</h2>
        </div>
        <div className="home__header__photo">
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="warsaw skyline"/>
        </div>
      </header>

      <main>

        <section className="home__intro">
          <div className="home__intro__text">
            <p>
              Warsaw Negotiation Round 2024 is the 15th edition of one of the most
              prestigious international negotiation tournaments. The WNR year after
              year unites students of top law, economics and business schools from
              around the world.
            </p>
            <Link to="/participation"><button className="home__intro__text__btn">I WANT TO PARTICIPATE</button></Link>
          </div>
        </section>

        <section className="home__counter">
          <Counter />
        </section>
  
        <section className="home__prev-editions">
          <Slider slideData={prevEditionsData} h3Prop="year" pProp="description" />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Layout {
    file(relativePath: { eq: "warszawa2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`