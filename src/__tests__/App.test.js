import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);
import App from "../App";
let store;
beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation(f => {
    if (f === "/api/categories") {
      return Promise.resolve({
        json: () => Promise.resolve()
      });
    }

    if (f === "/api/posts") {
      return Promise.resolve({
        json: () => Promise.resolve()
      });
    }

    if (f === "/api/posts/category/10") {
      return Promise.resolve({
        json: () => Promise.resolve()
      });
    }
  });

  store = mockStore({
    posts: {
      posts: [
        {
          authorId: 1,
          title: "Thoughts",
          categoriesId: "10",
          content: "What\nan\namazing\nsystem!",
          timestamp: "2020-03-24T14:24:53.506Z",
          id: 9,
          author: {
            password:
              "$2b$10$/MR28AAVtvOL4eQkMimtvezwTzOve4BSDxNtd9ST9rYYjnhfp9Ayi",
            email: "homer@springfield.com",
            name: "Homer Simpson",
            dateJoined: "2019-11-28T10:59:49.437Z",
            id: 1
          },
          categories: { id: 10, title: "Python" }
        },
        {
          authorId: 1,
          title: "New post idea",
          categoriesId: "1",
          content:
            "So, I was thinking..\n\nWhat do we do about all nice things that we used to enjoy earlier.",
          timestamp: "2020-03-24T14:05:11.537Z",
          id: 7,
          author: {
            password:
              "$2b$10$/MR28AAVtvOL4eQkMimtvezwTzOve4BSDxNtd9ST9rYYjnhfp9Ayi",
            email: "homer@springfield.com",
            name: "Homer Simpson",
            dateJoined: "2019-11-28T10:59:49.437Z",
            id: 1
          },
          categories: { id: 1, title: "JavaScript" }
        }
      ],
      categories: [
        { id: 1, title: "JavaScript" },
        { id: 2, title: "React" },
        { id: 3, title: "Node.js" }
      ]
    },
    users: {},
    errors: { error: false }
  });
});

describe("Capstone - App Component", () => {
  it("App renders with stateful data", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]} keyLength={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    return expect(toJson(wrapper.find(App))).toMatchSnapshot();
  });

  it("Navigating to the /add route redirects to the signin page", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/add"]} keyLength={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(App)).toMatchSnapshot();
  });

  it("Navigating to the /signup route goes to the signup page", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/signup"]} keyLength={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(App)).toMatchSnapshot();
  });

  it("Navigating to the /add route when the user is signed in takes you to the add post form", () => {
    const newStore = mockStore({
      posts: {
        posts: [],
        categories: []
      },
      users: {
        token: "ABC",
        user: {
          id: "1",
          name: "Joe Rock"
        }
      },
      errors: { error: false }
    });

    const wrapper = mount(
      <Provider store={newStore}>
        <MemoryRouter initialEntries={["/add"]} keyLength={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(App)).toMatchSnapshot();
  });
});
