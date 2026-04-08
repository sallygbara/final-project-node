import bcrypt from "bcryptjs";

const initialUsers = [
    {
        name: { first: "Regular", last: "User" },
        phone: "0500000000",
        email: "user@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        image: { url: "", alt: "" },
        address: {
            country: "Israel",
            city: "Tel Aviv",
            street: "Main",
            houseNumber: 1,
        },
        isBusiness: false,
        isAdmin: false,
    },
    {
        name: { first: "Business", last: "User" },
        phone: "0500000001",
        email: "business@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        image: { url: "", alt: "" },
        address: {
            country: "Israel",
            city: "Haifa",
            street: "Main",
            houseNumber: 2,
        },
        isBusiness: true,
        isAdmin: false,
    },
    {
        name: { first: "Admin", last: "User" },
        phone: "0500000002",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        image: { url: "", alt: "" },
        address: {
            country: "Israel",
            city: "Jerusalem",
            street: "Main",
            houseNumber: 3,
        },
        isBusiness: true,
        isAdmin: true,
    },
];

export default initialUsers;