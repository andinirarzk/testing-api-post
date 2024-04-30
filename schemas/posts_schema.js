const AllPostSchema = {
  type: "object",
  properties: {
    posts: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          title: { type: "string" },
          body: { type: "string" },
          userId: { type: "number" },
          tags: {
            type: "array",
            items: { type: "string" },
          },
          reactions: { type: "number" },
        },
      },
    },
    total: { type: "number" },
    skip: { type: "number" },
    limit: { type: "number" }
  }
};

export default AllPostSchema
