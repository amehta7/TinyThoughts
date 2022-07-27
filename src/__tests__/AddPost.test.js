import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import AddPost from "../components/AddPost";

const mockStore = configureStore([thunk]);

describe("AddPost component", () => {
  it("Renders the AddPost component successfully", () => {
    const store = mockStore({
      users: {
        user: { id: 1, name: "Joe Mockery" }
      },
      posts: {
        categories: [
          { id: 1, title: "JavaScript" },
          { id: 2, title: "Python" }
        ]
      },
      errors: {
        error: false
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <AddPost />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(AddPost)).toMatchSnapshot();
  });

  it("Local state, event listeners and controlled components work as desired", async () => {
    const store = mockStore({
      users: {
        user: { id: 1, name: "Joe Mockery" }
      },
      posts: {
        categories: [
          { id: 1, title: "JavaScript" },
          { id: 2, title: "Python" }
        ]
      },
      errors: {
        error: false
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <AddPost />
        </MemoryRouter>
      </Provider>
    );

    await wrapper.find("input").simulate("change", {
      target: {
        value: "Demo post"
      }
    });

    await wrapper.find("textarea").simulate("change", {
      target: {
        value: "This is the content of the post"
      }
    });

    await wrapper.find("Select").simulate("change", {
      target: {
        value: 2
      }
    });

    await wrapper.find("button").simulate("click");

    expect(wrapper.find("Text").prop("value")).toEqual(
      "This is the content of the post"
    );

    expect(wrapper.find("Input").prop("value")).toEqual("Demo post");

    expect(wrapper.find(".char-count").text()).toEqual("31 of 200 Characters");
  });
});
