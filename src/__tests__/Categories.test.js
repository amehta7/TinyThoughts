import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Categories from "../components/Categories";

describe("Categories component", () => {
  it("Categories component renders a list of categories", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Categories
          categories={[
            { id: 1, title: "JavaScript" },
            { id: 2, title: "Python" }
          ]}
        />
      </MemoryRouter>
    );

    expect(wrapper.find(Categories)).toMatchSnapshot();
    expect(
      wrapper
        .find("a")
        .at(1)
        .prop("href")
    ).toEqual("/category/2");
  });
});
