import React from "react";
import renderer from 'react-test-renderer';
import Box from "../../components/atoms/Box";

describe("<Box />", () => {
  it("renders <Box /> component with data.", async () => {
    const tree = renderer
    .create(<Box>Test</Box>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});