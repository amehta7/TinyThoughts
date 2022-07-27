import React from "react";
import { shallow } from "enzyme";
import Select from "../components/Select";

describe("Select component", () => {
  it("Renders a controlled component", () => {
    const onSetFn = jest.fn();
    const wrapper = shallow(
      <Select
        label="Pick a fruit"
        options={[
          { id: 1, title: "Apple" },
          { id: 2, title: "Kiwi" }
        ]}
        onSet={onSetFn}
        hasError={false}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find("select").simulate("change", { target: { value: 2 } });
    expect(onSetFn).toHaveBeenCalledTimes(1);
  });

  it("Renders a red border when hasError is set to true", () => {
    const wrapper = shallow(
      <Select
        label="Pick a fruit"
        options={[
          { id: 1, title: "Apple" },
          { id: 2, title: "Kiwi" }
        ]}
        onSet={() => {}}
        hasError={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
