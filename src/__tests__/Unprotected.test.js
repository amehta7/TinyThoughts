import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Redirect as MockRedirect } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Unprotected from "../components/Unprotected";
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

describe("Unprotected Component", () => {
  it("Renders components when signed out", () => {
    const store = mockStore({
      users: {}
    });

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <Unprotected>
            <h1>DEMO CONTENT</h1>
          </Unprotected>
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(Unprotected)).toMatchSnapshot();
  });

  it("Redirects to root route when signed in", () => {
    const store = mockStore({
      users: { user: { id: 1, name: "Joe Mockery" } }
    });

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Unprotected>
            <h1>DEMO CONTENT</h1>
          </Unprotected>
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(Unprotected).text()).toBe("REDIRECTED");
  });
});
