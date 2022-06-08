// Simple Express Server to simulate passing data

const express = require("express");
const app = express();
const url = ``;

app.use(express.json());

const currentUser = {
    name: "Rob G",
    age: 29,
    hairColor: "Dark Red",
    hobbies: ["Programming", "Music", "Video Games"]
}

const users = [{
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"]
}, {
    name: "Brenda Smith",
    age: 54,
    hairColor: "brown",
    hobbies: ["golf", "mathematics"]
}, {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"]
}];

const products = [{
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
}, {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
}, {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
}];

app.get("/current-user", (res) => {
    res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json(users.find(user => user.id === id));
});

app.post("/users/:id", (req, res) => {
    const { id } = req.params;
    const { user: updatedUser } = req.body;
    users = users.map(user => user.id === id ? updatedUser : null);
    res.json(users.find(user => user.id === id));
});

app.get("/users", (res) => {
    res.json(users);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    res.json(products.find(product => product.id === id));
});

app.listen(8080, () => {
    console.log("Listening on port 8080...")
});