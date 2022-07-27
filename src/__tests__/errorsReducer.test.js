import reducer from "../store/reducers/errors";

const initState = {
  error: false
};

describe("Errors Reducer", () => {
  it("Error reducer returns initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      error: false
    });
  });

  it("GET_POSTS_FAILURE returns error === true", () => {
    expect(reducer(initState, { type: "GET_POSTS_FAILURE" })).toEqual({
      error: true
    });
  });

  it("GET_CATEGORIES_FAILURE returns error === true", () => {
    expect(reducer(initState, { type: "GET_CATEGORIES_FAILURE" })).toEqual({
      error: true
    });
  });

  it("SIGNIN_FAILURE returns error === true", () => {
    expect(reducer(initState, { type: "SIGNIN_FAILURE" })).toEqual({
      error: true
    });
  });

  it("SIGNUP_FAILURE returns error === true", () => {
    expect(reducer(initState, { type: "SIGNUP_FAILURE" })).toEqual({
      error: true
    });
  });

  it("INIT_FAILURE returns error === true", () => {
    expect(reducer(initState, { type: "INIT_FAILURE" })).toEqual({
      error: true
    });
  });

  it("ADD_POST_FAILURE returns error === true", () => {
    expect(reducer(initState, { type: "ADD_POST_FAILURE" })).toEqual({
      error: true
    });
  });

  it("DELETE_POST_FAILURE returns error === true", () => {
    expect(reducer(initState, { type: "DELETE_POST_FAILURE" })).toEqual({
      error: true
    });
  });

  it("GET_POSTS_SUCCESS returns error === false", () => {
    expect(reducer(initState, { type: "GET_POSTS_SUCCESS" })).toEqual({
      error: false
    });
  });

  it("GET_CATEGORIES_SUCCESS returns error === false", () => {
    expect(reducer(initState, { type: "GET_CATEGORIES_SUCCESS" })).toEqual({
      error: false
    });
  });

  it("SIGNIN_SUCCESS returns error === false", () => {
    expect(reducer(initState, { type: "SIGNIN_SUCCESS" })).toEqual({
      error: false
    });
  });

  it("INIT_SUCCESS returns error === false", () => {
    expect(reducer(initState, { type: "INIT_SUCCESS" })).toEqual({
      error: false
    });
  });

  it("ADD_POST_SUCCESS returns error === false", () => {
    expect(reducer(initState, { type: "ADD_POST_SUCCESS" })).toEqual({
      error: false
    });
  });

  it("DELETE_POST_SUCCESS returns error === false", () => {
    expect(reducer(initState, { type: "DELETE_POST_SUCCESS" })).toEqual({
      error: false
    });
  });

  it("RESET_ERROR returns error === false", () => {
    expect(reducer(initState, { type: "RESET_ERROR" })).toEqual({
      error: false
    });
  });
});
