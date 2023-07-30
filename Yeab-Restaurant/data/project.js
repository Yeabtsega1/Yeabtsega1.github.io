const project = [
    {
        key: 1,
        img: require('../public/images/projects/YB.jpeg'),
        name: "YB Restaurant",
        description: "YB Restaurant is a full-stack web application that I have meticulously crafted as a standout addition to my portfolio, serving as a living testament to my prowess in web development and my dedication to building real-world applications. The project revolves around creating a dynamic online platform for a Japanese restaurant, presenting customers with a seamless and enjoyable dining experience where they can effortlessly browse, customize, and order an exquisite selection of Japanese dishes.",
        techStack: ['HTML','CSS','JS','Express.js', 'React.js','Node.js','JWT','MongoDB', 'Netlify', 'Render'],
        complete: true,
        liveDeploy: "https://yb-restaurant.netlify.app/",
    },
    {
        key: 2,
        img: require('../public/images/projects/react-ecommerce.webp'),
        name: "YB Shopping",
        description: "YB is a feature-rich and dynamic ecommerce website that I have developed to exemplify my expertise in web development and showcase a seamless online shopping experience. The platform is designed to cater to modern shoppers, providing a user-friendly interface that enables customers to effortlessly browse, add products to their cart, and proceed with ease to checkout.",
        techStack: ['HTML','CSS','JS','React.js','Bootstrap','FakeStoreAPI','Node.js','JWT','Express.js','MongoDB','Netlify','Render'],
        complete: true,
        liveDeploy: "https://yb-shopping.netlify.app/",
    },
    {
        key: 3,
        img: require('../public/images/projects/TradeIT-logo.png'),
        description: "TradeIT is an innovative crypto website that I have passionately developed to provide users with comprehensive and real-time information about the exciting world of cryptocurrencies. This platform serves as a one-stop hub for cryptocurrency enthusiasts, offering an array of valuable features, including live crypto prices, detailed descriptions, and interactive price trend graphs.",
        techStack: ['HTML','CSS','JS','React.js', 'Node.js','Express.js', 'Firebase', 'Charting Library','Material-UI Styling','Netlify'],
        complete: true,
        liveDeploy: "https://t-r-a-d-e-it.netlify.app/",
    },
    {
        key: 4,
        img: require('../public/images/projects/YEAB.png'),
        name: "YEAB'S RESTAURANT",
        description: "YEAB'S Restaurant is a frontend Chinese restaurant website project, which showcases my expertise in HTML, CSS, JavaScript, and Bootstrap. This website is a testament to my commitment to creating functional and visually appealing web applications, and I believe it would be a valuable addition to your esteemed company.",
        techStack: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Git', 'Github'],
        complete: true,
        liveDeploy: "https://yeabtsega1.github.io/Yeab-Restaurant/",
    },
    {
        key: 5,
        img: require('../public/images/projects/Stack.png'),
        name: "Stackoverclone",
        description: "Developed and deploy a website like stackoverflow clone using React.js, Node.js, Express.js and MongoDB and make some addition on the stackoverflow website like integrate a chatbot feature where users can ask their questions directly to the chatbot.",
        techStack: ['HTML', 'CSS', 'JS','React.js','Node.js','Express.js','Mongodb','Render', 'Netlify'],
        complete: true,
        liveDeploy: "https://stackoverflow-yeab1.netlify.app/",
    },
]

const otherProjects = [
    {
        key: 1,
        link: "https://yeabtsega1.github.io/module2-Responsive/",
        img: require('../public/images/projects/responsive-design.png'),
    },
    {
        key: 2,
        link: "https://yeabtsega1.github.io/module3-solution/",
        img: require('../public/images/projects/Hamburger-menu.png'),
    },
]

const data = { project, otherProjects }
export default data;
