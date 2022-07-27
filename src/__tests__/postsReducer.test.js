import reducer from "../store/reducers/posts";

const initState = {
  posts: [
    {
      id: 0,
      label: "Monkey"
    }
  ],
  categories: []
};

describe("Posts Reducer", () => {
  it("Reducer returns initial state", () => {
    expect(reducer(initState, {})).toEqual(initState);
  });

  it("Returns posts when GET_POSTS_SUCCESS is invoked", () => {
    expect(
      reducer(initState, {
        type: "GET_POSTS_SUCCESS",
        posts: [
          {
            id: 0,
            label: "Monkey"
          },
          { id: 1, label: "Apple" },
          { id: 2, label: "Kiwi" }
        ]
      })
    ).toEqual({
      posts: [
        {
          id: 0,
          label: "Monkey"
        },
        { id: 1, label: "Apple" },
        { id: 2, label: "Kiwi" }
      ],
      categories: []
    });
  });

  it("Returns posts when DELETE_POSTS_SUCCESS is invoked", () => {
    expect(
      reducer(initState, {
        type: "DELETE_POSTS_SUCCESS",
        posts: [
          {
            id: 0,
            label: "Monkey"
          },
          { id: 1, label: "Apple" },
          { id: 2, label: "Kiwi" }
        ]
      })
    ).toEqual({
      posts: [
        {
          id: 0,
          label: "Monkey"
        },
        { id: 1, label: "Apple" },
        { id: 2, label: "Kiwi" }
      ],
      categories: []
    });
  });

  it("Returns categories when GET_CATEGORIES_SUCCESS is invoked", () => {
    expect(
      reducer(initState, {
        type: "GET_CATEGORIES_SUCCESS",
        categories: [
          { id: 1, title: "Mango" },
          { id: 2, title: "Orange" }
        ]
      })
    ).toEqual({
      posts: [
        {
          id: 0,
          label: "Monkey"
        }
      ],
      categories: [
        { id: 1, title: "Mango" },
        { id: 2, title: "Orange" }
      ]
    });
  });

  it("Adds & returns posts when ADD_POST_SUCCESS is invoked", () => {
    expect(
      reducer(initState, {
        type: "ADD_POST_SUCCESS",
        post: {
          id: 4,
          label: "Dragonfruit"
        }
      })
    ).toEqual({
      posts: [
        {
          id: 4,
          label: "Dragonfruit"
        },
        {
          id: 0,
          label: "Monkey"
        }
      ],
      categories: []
    });
  });
});
