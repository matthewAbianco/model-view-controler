const { Comment } = require('../models');

const commentData = [{
        comment_text: "gotta catch em all",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "no U",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "why fighting lesser men is good for your self confidence",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;