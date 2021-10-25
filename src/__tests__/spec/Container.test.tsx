import React from "react";
import renderer from 'react-test-renderer';
import Container from "../../components/atoms/Container";

describe("<Container />", () => {
  it("renders <Container /> component with data.", async () => {
    const tree = renderer
    .create(<Container>Test</Container>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});