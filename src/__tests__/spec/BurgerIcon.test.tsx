import React from "react";
import renderer from 'react-test-renderer';
import BurgerIcon from "../../components/atoms/BurgerIcon";

describe("<Box />", () => {
  it("renders <Box /> component with data.", async () => {
    const tree = renderer
    .create(<BurgerIcon ishiddenMenu={true} onClick={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});