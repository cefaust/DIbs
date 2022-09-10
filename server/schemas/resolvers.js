const { Item, User } = require('../models');
const { signToken } = require('../utils/auth');

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
    },
    deleteItem: async (parent, args) => {
      const item = await Item.findOneAndRemove({ _id: args.itemId })
      User.findOneAndUpdate(
        { items: args.itemId },
        { $pull: { items: args.itemId } },
        { new: true }
      )
      return item;
    },
    updateItem: async (parent, args) => {
      const item = await Item.findOneAndUpdate(
        { _id: args._id },
        { $set: args },
        { new: true }
      )
      return item;
    },
    addDibToUser: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        { _id: args.userId },
        { $addToSet: { dibsCalled: args.itemId } },
        { new: true }
      )
      return user;
    },
    removeDibFromUser: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        { _id: args.userId },
        { $pull: { dibsCalled: args.itemId } },
        { new: true }
      )
      return user;
    },
    createUser: async (parent, args) => {
      const user = await User.create(args)
      console.log(user);
      const token = signToken(user)
      return {token, user};
    }
  },
};

module.exports = resolvers;
