import React from "react";
import Container from "@material-ui/core/Container";


export default function NoMatch () {
  return (
    <Container fluid>
      {/* <Row>
        <Col size="md-12"> */}
          <div>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        {/* </Col> */}
      {/* </Row> */}
    </Container>
  );
};
