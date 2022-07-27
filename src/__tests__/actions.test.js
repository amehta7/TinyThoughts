import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  signIn,
  signUp,
  signOut,
  initUserState,
  fetchPosts,
  fetchPostsByAuthor,
  fetchPostsByCategory,
  fetchCategories,
  addPost,
  deletePost
} from "../store/actions";
import * as services from "../services";

const mockStore = configureStore([thunk]);
let store;
const initUser = {};
const initPosts = {
  posts: [],
  categories: []
};
const initErrors = {
  error: false
};

beforeEach(() => {
  store = mockStore({
    users: initUser,
    posts: initPosts,
    errors: initErrors
  });
});

jest.mock("../services", () => ({
  doSignIn: (email, password) =>
    Promise.resolve({ id: 1, name: "Joe Mockery" }),
  doSignUp: (name, email, password) =>
    Promise.resolve({ id: 1, name: "Joe Mockery" }),
  doSignOut: () => Promise.resolve(true),
  initUser: () => Promise.resolve({ id: 1, name: "Joe Mockery" }),
  getAllPosts: () =>
    Promise.resolve([
      { id: 1, title: "Hey" },
      { id: 2, title: "Hello" }
    ]),
  getPostsByAuthor: authorId =>
    Promise.resolve([
      { id: 1, title: "Hey" },
      { id: 2, title: "Hello" }
    ]),
  getPostsByCategory: categoryId =>
    Promise.resolve([
      { id: 1, title: "Hey" },
      { id: 2, title: "Hello" }
    ]),
  getCategories: () =>
    Promise.resolve([
      { id: 1, title: "Hey" },
      { id: 2, title: "Hello" }
    ]),
  addPostAndFetch: post => Promise.resolve({ id: 1, title: "Hey" }),
  deletePostAndFetch: id => Promise.resolve([{ id: 1, title: "Hey" }])
}));

describe("Async Action Creators", () => {
  it("signIn dispatches the SIGNIN_SUCCESS action", () => {
    const exp = {
      type: "SIGNIN_SUCCESS",
      user: {
        id: 1,
        name: "Joe Mockery"
      }
    };

    return store
      .dispatch(signIn("joe@mockery.com", "joem", { replace: () => {} }, {}))
      .then(() => {
        expect(store.getActions()).toEqual([exp]);
      });
  });

  it("signUp dispatches the SIGNUP_SUCCESS action", () => {
    const exp = {
      type: "SIGNUP_SUCCESS",
      user: {
        id: 1,
        name: "Joe Mockery"
      }
    };

    return store
      .dispatch(
        signUp("joe mockery", "joe@mock.com", "gollum", { push: () => {} }, {})
      )
      .then(() => {
        expect(store.getActions()).toEqual([exp]);
      });
  });

  it("doSignOut dispatches the SIGNOUT_SUCCESS action", () => {
    const exp = {
      type: "SIGNOUT_SUCCESS"
    };

    const store = mockStore(initUser);

    return store.dispatch(signOut()).then(() => {
      expect(store.getActions()).toEqual([exp]);
    });
  });

  it("initUserState dispatches the INIT_SUCCESS action", () => {
    const exp = {
      type: "INIT_SUCCESS",
      user: {
        id: 1,
        name: "Joe Mockery"
      }
    };

    return store.dispatch(initUserState()).then(() => {
      expect(store.getActions()).toEqual([exp]);
    });
  });

  it("fetchPosts dispatches the GET_POSTS_SUCCESS action", () => {
    const exp = {
      type: "GET_POSTS_SUCCESS",
      posts: [
        { id: 1, title: "Hey" },
        { id: 2, title: "Hello" }
      ]
    };

    return store.dispatch(fetchPosts()).then(() => {
      expect(store.getActions()).toEqual([exp]);
    });
  });

  it("fetchPostsByAuthor dispatches the GET_POSTS_SUCCESS action", () => {
    const exp = {
      type: "GET_POSTS_SUCCESS",
      posts: [
        { id: 1, title: "Hey" },
        { id: 2, title: "Hello" }
      ]
    };

    return store.dispatch(fetchPostsByAuthor(10)).then(() => {
      expect(store.getActions()).toEqual([exp]);
    });
  });

  it("fetchPostsByCategory dispatches the GET_POSTS_SUCCESS action", () => {
    const exp = {
      type: "GET_POSTS_SUCCESS",
      posts: [
        { id: 1, title: "Hey" },
        { id: 2, title: "Hello" }
      ]
    };

    return store.dispatch(fetchPostsByCategory(10)).then(() => {
      expect(store.getActions()).toEqual([exp]);
    });
  });

  it("fetchCategories dispatches the GET_POSTS_SUCCESS action", () => {
    const exp = {
      type: "GET_CATEGORIES_SUCCESS",
      categories: [
        { id: 1, title: "Hey" },
        { id: 2, title: "Hello" }
      ]
    };

    return store.dispatch(fetchCategories()).then(() => {
      expect(store.getActions()).toEqual([exp]);
    });
  });

  it("addPost dispatches the ADD_POST_SUCCESS action", () => {
    const exp = {
      type: "ADD_POST_SUCCESS",
      post: { id: 1, title: "Hey" }
    };

    return store
      .dispatch(addPost({ id: 1, title: "Hey" }, { push: () => {} }))
      .then(() => {
        expect(store.getActions()).toEqual([exp]);
      });
  });

  it("deletePost dispatches the DELETE_POSTS_SUCCESS action", () => {
    const exp = {
      type: "DELETE_POSTS_SUCCESS",
      posts: [{ id: 1, title: "Hey" }]
    };

    return store.dispatch(deletePost(2)).then(() => {
      expect(store.getActions()).toEqual([exp]);
    });
  });
});
