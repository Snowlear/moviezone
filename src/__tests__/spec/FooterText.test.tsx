import React from "react";
import renderer from 'react-test-renderer';
import FooterText from "../../components/atoms/FooterText";

describe("<FooterText />", () => {
  it("renders <Container /> component with data.", async () => {
    const tree = renderer
    .create(<FooterText text={"Test"}></FooterText>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});