import React from "react";
import { shallow } from "enzyme";
import CardComponent from "./";

describe("CardComponent", () => {
  const menuItem = {
    name: "burger",
    price: "499",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    preparationTime: "20 minutes",
    description: "it is amazingly delicious"
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<CardComponent {...menuItem} />);
  });

  it("renders with appropriate name", () => {
    expect(wrapper.name()).toMatch(baseProps.name);
  });
});
