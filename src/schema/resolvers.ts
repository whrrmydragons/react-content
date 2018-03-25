const sampleItems = [
    {name: 'Apple'},
    {name: 'Banana'},
    {name: 'Orange'},
    {name: 'Melon'},
  ];

export const resolvers = {
    Query: {
      items: () => sampleItems,
    },
  }