import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Post from "../components/Post";

const mockStore = configureStore([thunk]);

describe("Post component", () => {
  it("Renders a post correctly", () => {
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

    const props = {
      post: {
        id: 2,
        title: "This is an amazing post",
        author: { id: 1, name: "Joe Mockery" },
        content:
          "This is such an incredible post that I almost forgot to post it",
        categories: { id: 1, title: "Python" },
        timestamp: "2020-03-25T13:39:30.752Z"
      }
    };

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <Post {...props} />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(Post)).toMatchSnapshot();
  });
});
