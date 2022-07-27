import React from "react";
import { shallow } from "enzyme";
import Text from "../components/Text";

describe("Text component", () => {
  it("Renders a controlled component", () => {
    const onSetFn = jest.fn();
    const wrapper = shallow(
      <Text
        label="Your comments"
        onUpdate={onSetFn}
        value={"This is a text box"}
        hasError={false}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper
      .find("textarea")
      .simulate("change", { target: { value: "And here we go!" } });
    expect(onSetFn).toHaveBeenCalledTimes(1);
  });

  it("Renders a red border when hasError is set to true", () => {
    const wrapper = shallow(
      <Text
        label="Your comments"
        onUpdate={() => {}}
        value={"This is a text box"}
        hasError={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
