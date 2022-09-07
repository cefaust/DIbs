const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    null: false,
  },
  description: {
    type: Text,
    required: true,
    minlength: 20,
    null: false,
  },
  location: {
    type: Text,
    required: true,
    null: false,
  },
  image: {
    type: String,
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  date_dibbed: {
    type: Date,
  },
  user_id: {
    type: Schema.ObjectId,
    required: true,
  },
  comments: [
        {
            content: {
                type: Text,
                null: false,
            },
            date_created: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

const Item = model('Item', itemSchema);

module.exports = Item;