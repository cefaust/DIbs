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
    users: async () => {
      return User.find({});
    },
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.findOne(params);
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
        { $addToSet: { items: args.itemId } },
        { new: true }
      );
      return user;
    },
    removeItemFromUser: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        { _id: args.userId },
        { $pull: { items: args.itemId } },
        { new: true }
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
    addDibToItem: async (parent, args) => {
      const date = Date.now();
      const item = await Item.findOneAndUpdate(
        { _id: args.itemId },
        { $addToSet: { dibbed: { date_dibbed: date, dibbed_by: args.dibbedBy } } },
        { new: true }
      )
      return item;
    },
    removeDibFromItem: async (parent, args) => {
      const item = await Item.findOneAndUpdate(
        { _id: args.itemId },
        { $pull: { dibbed: { dibbed_by: args.dibbedBy } } },
        { new: true }
      )
      return item;
    },
    addCommentToItem: async (parent, args) => {
      const date = Date.now();
      const item = await Item.findOneAndUpdate(
        { _id: args.itemId },
        { $addToSet: { comments: { comment_by: args.commenterId, content: args.content, date_created: date } } },
        { new: true }
      )
      return item;
    },
    removeCommentFromItem: async (parent, args) => {
      const item = await Item.findOneAndUpdate(
        { _id: args.itemId },
        { $pull: { comments: { comment_by: args.commenterId } } },
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
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;
