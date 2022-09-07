const db = require('../config/connection');
const { Item, User } = require('../models');

const itemData = require('./itemCommentData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    try {
        await Item.deleteMany({});
        await User.deleteMany({});

        await User.create(userData);

        for (let i = 0; i < userData.length; i++) {
            const { _id } = await Item.create(itemData[i]);
            const email = userData[i];
            const user = await User.findOneAndUpdate(
                { email: email },
                {
                    $addToSet: {
                        items: _id,
                    }
                }
            )
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

  console.log('Everything seeded!');
  process.exit(0);
});
