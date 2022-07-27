import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Header from "../components/Header";

const mockStore = configureStore([thunk]);

describe("Header component", () => {
  it("Header component renders correctly when signed in", () => {
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
          <Header />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(Header)).toMatchSnapshot();
  });

  it("Header component renders correctly when signed out", () => {
    const store = mockStore({
      users: {},
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
          <Header />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(Header)).toMatchSnapshot();
  });
});
