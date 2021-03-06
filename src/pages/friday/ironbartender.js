import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const IronBartenderPage = () => {
  const { isAuthenticated } = useAuth()

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 40px;
    text-align: right;
    align-items: center;
    justify-items: center;
    margin: 24px 0;

    ${props =>
      props.inverse &&
      `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

    a {
      color: ${props => props.theme.color.primary};
      font-style: italic;
    }

    p {
      font-size: 28px;
      font-color: black;
    }

    h2 {
      margin-bottom: 16px;
    }

    @media (max-width: ${props => props.theme.screen.md}) {
      grid-template-columns: 1fr;
      text-align: left;
      margin-bottom: 96px;

      &:last-child {
        margin-bottom: 24px;
      }

      ${props =>
        props.inverse &&
        `
        ${Art} {
          order: 2;
        }
    `}
    }
  `

  const Art = styled.figure`
    margin: 0;
    max-width: 380px;
    width: 100%;
  `

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_ironbartender_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "ironbartender_meme" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          `}
          render={data => (
            <Section id="ironbartender">
              <Container>
                <h1>Iron Bartender - Yoshi's Crafted Whirl</h1>
                <br />
                <Grid>
                  <Art>
                    <Img
                      fluid={data.art_ironbartender_meme.childImageSharp.fluid}
                    />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>1:00PM - 2:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> ADPhi (??????) Room 2 (2nd Floor)
                    </p>
                    <p>
                      <strong>Players: </strong>1 Drink submission per team
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  For all you aspiring bartenders, this is your moment. Show us
                  your bartending chops and make us your very best beverage.
                </p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>Must be a beverage of some kind</li>

                  <li>Don't kill us please</li>
                </ul>
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Tier</th>
                      <th title="Field #2">Points</th>
                      <th title="Field #3">Teams</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td align="right">1</td>
                      <td align="right">250</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">2</td>
                      <td align="right">150</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">3</td>
                      <td align="right">100</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">4</td>
                      <td align="right">50</td>
                      <td> </td>
                    </tr>
                  </tbody>
                </table>
              </Container>
            </Section>
          )}
        />
        <Footer />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Navbar />
        <PleaseLogin />
        <Footer />
      </Layout>
    )
  }
}

export default IronBartenderPage
