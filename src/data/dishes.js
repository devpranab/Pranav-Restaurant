const DISHES = [
    {
        id: 0,
        name: 'Biriyani',
        image: 'assets/images/biriyani.jpg',
        cat: 'meal',
        label: 'hot',
        price: '120',
        featured: true,
        description: 'A unique combination of Indian Uthappam (pancake) & Italian biriyani, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies & Buffalo paneer.',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Amagine",
                author: "Shanto",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 5,
                comment: "Good",
                author: "Dipak",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 5,
                comment: "Testy",
                author: "Pradip",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 5,
                comment: "Amagine",
                author: "Ajay",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 5,
                comment: "Amagine",
                author: "Pranay",
                date: "2021-10-16T17:57:28.556094Z"
            }
        ]
    },
          
    {
        id: 1,
        name: 'Pizza',
        image: 'assets/images/pizza.jpg',
        cat: 'meal',
        label: 'hot',
        price: '80',
        featured: false,
        description: 'A unique combination of Indian Uthappam (pancake) & Italian biriyani, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies & Buffalo paneer.',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Amagine",
                author: "Rajek",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 5,
                comment: "Good",
                author: "Adesh",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 5,
                comment: "Testy",
                author: "Manas",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 5,
                comment: "Amagine",
                author: "Bhagi",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 5,
                comment: "Amagine",
                author: "Pranab",
                date: "2021-10-16T17:57:28.556094Z"
            }
        ]
    },

    {
        id: 2,
        name: 'Fries',
        image: 'assets/images/fries.jpg',
        cat: 'meal',
        label: 'hot',
        price: '150',
        featured: false,
        description: 'A unique combination of Indian Uthappam (pancake) & Italian biriyani, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies & Buffalo paneer.',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Amagine",
                author: "Sujit",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 5,
                comment: "Good",
                author: "Ashis",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 5,
                comment: "Testy",
                author: "Shiva",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 5,
                comment: "Amagine",
                author: "Manosh",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 5,
                comment: "Amagine",
                author: "Kajal",
                date: "2021-10-16T17:57:28.556094Z"
            }
        ]
   
    },
    {
        id: 3,
        name: 'Burger',
        image: 'assets/images/burger.jpg',
        cat: 'meal',
        label: 'hot',
        price: '140',
        featured: false,
        description: 'A unique combination of Indian Uthappam (pancake) & Italian biriyani, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies & Buffalo paneer.',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Amagine",
                author: "Rajav",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 5,
                comment: "Good",
                author: "Papon",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 5,
                comment: "Testy",
                author: "Kamal",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 5,
                comment: "Amagine",
                author: "Ranit",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 5,
                comment: "Amagine",
                author: "Pranav",
                date: "2021-10-16T17:57:28.556094Z"
            }
        ]
       
    },
    {
        id: 4,
        name: 'Maggi',
        image: 'assets/images/maggi.jpg',
        cat: 'meal',
        label: 'hot',
        price: '140',
        featured: false,
        description: 'A unique combination of Indian Uthappam (pancake) & Italian biriyani, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies & Buffalo paneer.',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Amagine",
                author: "Jasik",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 5,
                comment: "Good",
                author: "Vivas",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 5,
                comment: "Testy",
                author: "Sudip",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 5,
                comment: "Amagine",
                author: "Madhu",
                date: "2021-10-16T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 5,
                comment: "Amagine",
                author: "Akash",
                date: "2021-10-16T17:57:28.556094Z"
            }
        ]
     
    }
]

export default  DISHES;