import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Play() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">Play time!</h1>
            <h2 className="text-center">Taste your fortune cookie!</h2>
            <h1 className="text-center">
              {/* <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span> */}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Play;
