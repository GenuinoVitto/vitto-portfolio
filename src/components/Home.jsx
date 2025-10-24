import { Link } from 'react-router-dom';
import { Card, Heading, Stack, Text, Timeline } from "@chakra-ui/react"
import { LuCheck, LuPackage, LuShip, LuNotebook, LuLinkedin, LuInstagram } from "react-icons/lu"
function Home() {
  return (
    <div className="content">
      <section className="hero">
        <div className="home-image">
          <img className="vitto-img" src="src\assets\DSCF0100.jpg" alt="Vitto Genuino" />
        </div>

        <div className="content-greeting">
          <h1 className="greeting">Hello, I'm Vitto</h1>
          <p className="sub-greeting">Get a copy of my resume to see my credentials</p>
          <a href="src\assets\Resume - Genuino, Jose Mari Victorio G..pdf" download className="download-btn">Download resume 👨‍💻</a>
        </div>
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I'm Vitto Genuino, a passionate developer with experience in building web applications.
        </p>
        <Timeline.Root maxW="600px">
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <LuNotebook />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>Product Shipped</Timeline.Title>
              <Timeline.Description>13th May 2021</Timeline.Description>
              <Text textStyle="sm">
                We shipped your product via <strong>FedEx</strong> and it should
                arrive within 3-5 business days.
              </Text>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <LuCheck />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="sm">Order Confirmed</Timeline.Title>
              <Timeline.Description>18th May 2021</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <LuPackage />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title textStyle="sm">Order Delivered</Timeline.Title>
              <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {/* <Stack>
          <Card.Root size="md">
            <Card.Header>
              <Heading size="md"> Card - sm</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Body>
          </Card.Root>

          <Card.Root size="md">
            <Card.Header>
              <Heading size="md"> Card - md</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Body>
          </Card.Root>

          <Card.Root size="md">
            <Card.Header>
              <Heading size="md"> Card - lg</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Body>
          </Card.Root>
        </Stack> */}
        <Link to="/projects">See more</Link>
      </section>

    <hr></hr>

      <section className="contact">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, feel free to reach out via email or social media.</p>
          <p>email: vitto.g.genuino@gmail.com</p>
          <p>mobile: +63 917 867 9172</p>
        <div className="contact-socials">
          <a href='https://www.linkedin.com/in/genuinovitto/'>
            <LuLinkedin size={30} />
          </a>
          <a href='https://www.instagram.com/GenuinoVitto/'>
            <LuInstagram size={30} />
          </a>
        </div>    
      </section>
    </div>
  )
}

export default Home