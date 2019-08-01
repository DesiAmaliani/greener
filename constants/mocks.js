const categories =[
    {
        id:'plants',
        name:'Plants',
        tags: ['products','inspiration'],
        count:147,
        image: require('../assets/foto/garden/plant2.png')
    },
    {
        id:'seeds',
        name:'Seeds',
        tags: ['products','shop'],
        count:16,
        image: require('../assets/foto/garden/seed2.png')
    },
    {
        id:'flowers',
        name:'Flowers',
        tags: ['products','inspiration'],
        count:18,
        image: require('../assets/foto/garden/plants.png')
    },
    {
        id:'fertilizer',
        name:'Fertilizer',
        tags: ['products','shop'],
        count:47,
        image: require('../assets/foto/garden/dirt.png')
    },
    {
        id:'pots',
        name:'Pots',
        tags: ['products','shop'],
        count:47,
        image: require('../assets/foto/garden/pots.png')
    },
    {
        id:'water',
        name:'Water',
        tags: ['products','shop'],
        count:17,
        image: require('../assets/foto/garden/spray.png')
    },
];

const products =[
    {
        id:1,
        name:'kjskjdksjsdsjfnj',
        description:'sjkskjkscbcjkhkhdk',
        tags:['interior','27 m','Ideas'],
        gallery:[
            require('../assets/foto/assets/person.jpg'),
            require('../assets/foto/assets/person.jpg'),
            require('../assets/foto/assets/person.jpg'),
            require('../assets/foto/assets/person.jpg'),
            require('../assets/foto/assets/person.jpg'),
        ]
    }
];

const explore = [
    //images
    require('../assets/foto/assets/person.jpg'),
    require('../assets/foto/assets/person.jpg'),
    require('../assets/foto/assets/person.jpg'),
    require('../assets/foto/assets/person.jpg'),
    require('../assets/foto/assets/person.jpg'),
];

const profile ={
    username: 'react-ui-kit',
    location: 'Europe',
    email: 'contact@react-ui-kit.com',
    avatar: require('../assets/foto/assets/person.jpg'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
};

export{
    categories,
    products,
    profile,
}