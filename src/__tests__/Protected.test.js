import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Redirect as MockRedirect } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Protected from "../components/Protected";
const mockStore = configureStore([thunk]);

jest.mock("react-router-dom", () => {
  const RouterMocks = jest.requireActual("react-router-dom");
  return {
    ...RouterMocks,
    Redirect: jest.fn().mockImplementation(() => <span>REDIRECTED</span>)
  };
});

afterEach(() => {
  MockRedirect.mockClear();
});

describe("Protected Component", () => {
  it("Renders protected components when signed in", () => {
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
          <Protected>
            <h1>DEMO CONTENT</h1>
          </Protected>
          >
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(Protected)).toMatchSnapshot();
  });

  it("Redirects to the Signin page if signed out", () => {
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
        <MemoryRouter>
          <Protected>
            <h1>DEMO CONTENT</h1>
          </Protected>
          >
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(Protected).text()).toBe("REDIRECTED");
  });
});
