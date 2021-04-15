const { Post } = require('../models');

const postData = [{
        title: 'Tony the Tiger',
        content: 'How sweet it is to be loved by you ',
        user_id: 1

    },
    {
        title: 'shake a leg',
        content: 'and break one too!',
        user_id: 2
    },
    {
        title: 'cat got your tounge?',
        content: 'how fighting giraffes cures bad breath',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;