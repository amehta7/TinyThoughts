import reducer from "../store/reducers/users";

const initState = {};
const createAction = type => {
  return {
    type,
    user: {
      token: "ABC",
      id: "01",
      name: "Joe Mockery"
    }
  };
};
const expectedUser = {
  user: {
    token: "ABC",
    id: "01",
    name: "Joe Mockery"
  }
};

describe("Users Reducer", () => {
  it("Returns default state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it("SIGNIN_SUCCESS returns user", () => {
    expect(reducer(initState, createAction("SIGNIN_SUCCESS"))).toEqual(
      expectedUser
    );
  });

  it("SIGNUP_SUCCESS returns user", () => {
    expect(reducer(initState, createAction("SIGNUP_SUCCESS"))).toEqual(
      expectedUser
    );
  });

  it("INIT_SUCCESS returns user", () => {
    expect(reducer(initState, createAction("INIT_SUCCESS"))).toEqual(
      expectedUser
    );
  });

  it("INIT_FAILURE returns {}", () => {
    expect(reducer(initState, { type: "INIT_FAILURE" })).toEqual({});
  });

  it("SIGNUP_FAILURE returns {}", () => {
    expect(reducer(initState, { type: "SIGNUP_FAILURE" })).toEqual({});
  });

  it("SIGNOUT_SUCCESS returns {}", () => {
    expect(reducer(initState, { type: "SIGNOUT_SUCCESS" })).toEqual({});
  });
});
