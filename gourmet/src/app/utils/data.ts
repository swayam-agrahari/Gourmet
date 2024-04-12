interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface Subcategory {
  id: string;
  name: string;
  products: Product[];
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

const Data: Category[] = [
  {
    id: "1",
    name: "Staples",
    subcategories: [
      {
        id: "1",
        name: "Flour",
        products: [
          {
            id: "1",
            name: "All-purpose Flour",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Versatile flour for baking and cooking.",
          },
          {
            id: "2",
            name: "Whole Wheat Flour",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Healthy flour option for nutritious recipes.",
          },
          // Add more products as needed
        ],
      },
      {
        id: "2",
        name: "Rice",
        products: [
            {
                id: "1",
                name: 'Basmati Rice',
                image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: 'Premium long-grain rice known for its fragrant aroma and fluffy texture.',
            },
            {
                id: "2",
                name: 'Jasmine Rice',
                image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: 'Fragrant rice variety with a subtle floral aroma and slightly sticky texture.',
            },
            {
                id: "3",
                name: 'Brown Rice',
                image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: 'Whole grain rice with a nutty flavor and chewy texture, rich in nutrients.',
            },
            {
                id: "4",
                name: 'Arborio Rice',
                image:
                "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: 'Short-grain rice known for its creamy texture, commonly used in risotto dishes.',
            },
            {
                id:" 5",
                name: 'Wild Rice',
                image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: 'Nutty-flavored rice variety harvested from grasses native to North America.',
            },
            {
                id: "6",
                name: 'Sushi Rice',
                image:
                "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: 'Short-grain rice seasoned with rice vinegar, sugar, and salt, used in sushi preparation.',
            },
            {
                id: "7",
                name: 'Black Rice',
                image:
                "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                description: 'Nutrient-rich whole grain rice with a dark purplish-black color and a slightly sweet taste.',
            },
          // Add more products as needed
        ],
      },
      // Add more subcategories as needed
    ],
  },
  {
    id: "2",
    name: "Chocolates",
    subcategories: [
      {
        id: "3",
        name: "Dark Chocolate",
        products: [
          {
            id: "5",
            name: "Lindt 70% Cocoa Dark Chocolate",
            image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Rich and smooth dark chocolate with 70% cocoa.",
          },
          {
            id: "6",
            name: "Ghirardelli Intense Dark Chocolate",
            image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Intensely flavored dark chocolate squares.",
          },
          {
            id: "13",
            name: "Dairy Milk",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "cadbury",
          },
          {
            id: "14",
            name: "Kitkat",
            image:
              "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "cadbury",
          },
          {
            id: "15",
            name: "5 Star",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "cadbury",
          },
          {
            id: "16",
            name: "Ferrero Rocher",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "cadbury",
          },
          {
            id: "13",
            name: "Snickers",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "cadbury",
          },
          {
            id: "14",
            name: "Perks",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "cadbury",
          },
          // Add more products as needed
        ],
      },
      {
        id: "4",
        name: "Milk Chocolate",
        products: [
          {
            id: "7",
            name: "Cadbury Dairy Milk Chocolate",
            image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Creamy milk chocolate with a velvety texture.",
          },
          {
            id: "8",
            name: "Hershey's Milk Chocolate Bar",
            image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Classic milk chocolate bar from Hershey's.",
          },
          // Add more products as needed
        ],
      },
      // Add more subcategories as needed
    ],
  },
  {
    id: "3",
    name: "Personal Care",
    subcategories: [
      {
        id: "5",
        name: "Shampoo",
        products: [
          {
            id: "9",
            name: "Head & Shoulders Anti-Dandruff Shampoo",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Effective shampoo for controlling dandruff.",
          },
          {
            id: "10",
            name: "Pantene Pro-V Smooth & Silky Shampoo",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Nourishing shampoo for smooth and silky hair.",
          },
          // Add more products as needed
        ],
      },
      {
        id: "6",
        name: "Toothpaste",
        products: [
          {
            id: "11",
            name: "Colgate Total Whitening Toothpaste",
            image:
            "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Whitening toothpaste for healthy teeth and gums.",
          },
          {
            id: "12",
            name: "Sensodyne Pronamel Toothpaste",
            image:
              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            description: "Gentle toothpaste for strengthening tooth enamel.",
          },
          // Add more products as needed
        ],
      },
      // Add more subcategories as needed
    ],
  },
  // Add more categories as needed
];

export default Data;
