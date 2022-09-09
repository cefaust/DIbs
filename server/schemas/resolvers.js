const { Item, User } = require('../models');

const resolvers = {
  Query: {
    items: async () => {
      return Item.find({});
    },
    item: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Item.findOne(params);
    },
  },
  Mutation: {
    createItem: async (parent, args) => {
      const item = await Item.create(args);
      return item;
    },
    addItemToUser: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        { _id: args.userId },
        { $addToSet: { items: args.itemId } }
      );
      return user;
    }
  },
};

module.exports = resolvers;
