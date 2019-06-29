import React from "react";
import { shallow } from "enzyme";
import CardComponent from "./";

describe("CardComponent", () => {
  const baseProps = {
    menuItem: {
      name: "burger",
      price: "499",
      thumb:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
      time: "20 minutes",
      description: "it is amazingly delicious"
    }
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<CardComponent {...baseProps} />);
  });

  it("renders with appropriate name", () => {
    expect(
      wrapper
        .find(".card-title")
        .children()
        .text()
    ).toMatch(baseProps.menuItem.name);
  });

  it("renders with appropriate price", () => {
    expect(
      wrapper
        .find(".card-price")
        .children()
        .text()
    ).toMatch(baseProps.menuItem.price);
  });
  it("renders with appropriate preparation time", () => {
    expect(
      wrapper
        .find(".card-preparation")
        .children()
        .text()
    ).toMatch(baseProps.menuItem.time);
  });

  it("renders with appropriate description text", () => {
    expect(
      wrapper
        .find(".card-description")
        .children()
        .text()
    ).toMatch(baseProps.menuItem.description);
  });
});
