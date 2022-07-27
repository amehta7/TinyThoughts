import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import thunk from "redux-thunk";
import AccountNav from "../components/AccountNav";
const mockStore = configureStore([thunk]);

describe("AccountNav component", () => {
  it("Renders the Signin and Signup buttons when logged out", () => {
    const store = mockStore({
      users: {}
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AccountNav />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(AccountNav)).toMatchSnapshot();
  });

  it("Renders the Signout button & user's name when logged in", () => {
    const store = mockStore({
      users: {
        user: { id: 1, name: "Joe Mockery" }
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AccountNav />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(AccountNav)).toMatchSnapshot();
  });
});
