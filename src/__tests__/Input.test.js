import React from "react";
import { shallow } from "enzyme";
import Input from "../components/Input";

describe("Input component", () => {
  it("Renders a controlled component", () => {
    const onInputFn = jest.fn();
    const wrapper = shallow(
      <Input
        label="Username"
        type="email"
        onInput={onInputFn}
        value="joe@mockery.com"
        hasError={false}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find("input").simulate("change", { target: { value: "Try this" } });
    expect(onInputFn).toHaveBeenCalledTimes(1);
  });

  it("Renders a red border when hasError is set to true", () => {
    const wrapper = shallow(
      <Input
        label="Username"
        type="email"
        onInput={() => {}}
        value="joe@mockery.com"
        hasError={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
