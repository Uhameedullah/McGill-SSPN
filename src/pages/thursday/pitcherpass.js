import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const PitcherPassPage = () => {
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
              art_pitcherpass_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "pitcherpass_meme" }
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
            <Section id="pitcherpass">
              <Container>
                <h1>Pitcher Pass - Goomba Gotcha</h1>
                <br />
                <Grid>
                  <Art>
                    <Img
                      fluid={data.art_pitcherpass_meme.childImageSharp.fluid}
                    />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>10:00AM - 12:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> Caf?? Campus Pits
                    </p>
                    <p>
                      <strong>Players: </strong>Three people per team, at least
                      one girl. One puke bag holder.
                    </p>
                    <p>
                      <strong>Beverages: </strong>Non-Alcoholic and/or Gluten
                      Free Available
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  Three people from each team form a circle with other players.
                  They must each drink beer out of the bucket continuously until
                  they choose to stop and then pass it to the person beside
                  them. Any person can continuously chug the pitcher as long as
                  they please, but if they choose to stop must pass it to the
                  person to their right. Fastest time wins.
                </p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>
                    Each player drinks as much beer as they'd like, then passes
                    the bucket to their neighbor
                  </li>

                  <li>
                    At least one girl must play per team (else, 30 second
                    penalty)
                  </li>

                  <li>Team to finish their bucket the fastest wins</li>

                  <li>Double Major: Puking in pitcher</li>

                  <li>Major: Dripping beer off face</li>

                  <li>Minor: Small spills, liquid on face</li>
                </ul>
                <h2>Schedule</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Start Time</th>
                      <th title="Field #2">Teams</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10:10</td>
                      <td>Arts 4, Education 1, Engineering</td>
                    </tr>
                    <tr>
                      <td>10:25</td>
                      <td>Education 2, Management 1, Medicine</td>
                    </tr>
                    <tr>
                      <td>10:40</td>
                      <td>Music, Science 1, Science 2</td>
                    </tr>
                    <tr>
                      <td>10:55</td>
                      <td>Arts 3, Law</td>
                    </tr>
                    <tr>
                      <td>11:10</td>
                      <td>Arts 2, Arts 5, Management 2</td>
                    </tr>
                    <tr>
                      <td>11:25</td>
                      <td>Arts 1, PTOT</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Time</th>
                      <th title="Field #3">Place</th>
                      <th title="Field #4">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Music</td>
                      <td>1:25.47</td>
                      <td>1</td>
                      <td align="right">750</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>1:36.58</td>
                      <td>2</td>
                      <td align="right">650</td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td>1:42.88</td>
                      <td>3</td>
                      <td align="right">550</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td>2:12.65</td>
                      <td>4</td>
                      <td align="right">475</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td>2:22.53</td>
                      <td>5</td>
                      <td align="right">400</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td>2:40.62</td>
                      <td>6</td>
                      <td align="right">350</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td>2:44.78</td>
                      <td>7</td>
                      <td align="right">300</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td>3:06.53</td>
                      <td>8</td>
                      <td align="right">250</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td>4:08.75</td>
                      <td>9</td>
                      <td align="right">225</td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td>4:23.24</td>
                      <td>10</td>
                      <td align="right">200</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td>4:27.13</td>
                      <td>11</td>
                      <td align="right">175</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td>4:53.10</td>
                      <td>12</td>
                      <td align="right">150</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>5:16.69</td>
                      <td>13</td>
                      <td align="right">125</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td> </td>
                      <td>DNS</td>
                      <td align="right">0</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td> </td>
                      <td>DNS</td>
                      <td align="right">0</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td> </td>
                      <td>DNS</td>
                      <td align="right">0</td>
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

export default PitcherPassPage
