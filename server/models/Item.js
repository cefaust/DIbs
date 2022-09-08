const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    null: false,
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    null: false,
  },
  location: {
    type: String,
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
  dibbed: [
    {
      date_dibbed: {
        type: Date,
      },
      dibbed_by: {
        type: Schema.Types.ObjectId
      }
    },
  ],
  comments: [
    {
      content: {
        type: String,
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