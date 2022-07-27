import React from "react";
import { mount } from "enzyme";
import DeletePostButton from "../components/DeletePostButton";

describe("DeletePostButton component", () => {
  it("DeletePostButton component renders & works correctly", () => {
    const onConfirmHandler = jest.fn();
    const wrapper = mount(<DeletePostButton onConfirm={onConfirmHandler} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find(".delete-btn").simulate("click");
    expect(wrapper).toMatchSnapshot();
    wrapper.find(".delete-btn-yes").simulate("click");
    expect(onConfirmHandler).toHaveBeenCalled();
  });
});
