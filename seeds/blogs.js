const { Blog } = require('../models');

// Seed pets data for bulkCreate
const blogsData = [
    {
        id: 'a91cbbc1-9767-4f15-add0-99e0b5918c94',
        title: 'Wiggles',
        blog: 'The dogs wiggles distract me from my code!',
        userId: '8a923311-dd96-48d4-8817-f9705dfbee0e',
    },
    {
        id: 'be58d5b7-9cf9-4b8c-b2df-b56f8ecaddcf',
        title: 'Shaky',
        blog: 'Shaky is the name of my repo for a game based on shaking your phone.',
        userId: '8a923311-dd96-48d4-8817-f9705dfbee0e',
    },
    {
        id: '6f486c8a-2732-4d75-9431-8d59e46b5638',
        title: 'I see RED!',
        blog: 'I have clearly made a lot of syntax errors...',
        userId: '8022d134-c225-494b-9845-41f594577e85',
    },
    {
        id: '871cc01c-7d76-4169-ba74-b5cd8a87b6fc',
        title: 'Tiny',
        blog: 'Why does workbench have such tiny text?!',
        userId: '8022d134-c225-494b-9845-41f594577e85',
    },
];

const seedBlogs = () => Blog.bulkCreate(blogsData);

module.exports = seedBlogs;