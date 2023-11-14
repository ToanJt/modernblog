import { ref } from 'vue';

const products = [
    {
        id: 1,
        active: ref(true),
        idType: 2,
        nameType: "accessories",
        name: "Cap",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 49,
        image: require("@/assets/Shop/CapWhite.png"),
        quantity: 1,
    },
    {
        id: 2,
        active: ref(false),
        idType: 1,
        nameType: "clothing",
        name: "T-Shirt",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 99.99,
        image: require("@/assets/Shop/ShirtWhite.png"),
        quantity: 1,
    },
    {
        id: 3,
        active: ref(false),
        idType: 3,
        nameType: "souvenir",
        name: "Bag",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 39.32,
        image: require("@/assets/Shop/BagWhite.png"),
        quantity: 1,
    },
    {
        id: 4,
        active: ref(false),
        idType: 3,
        nameType: "souvenir",
        name: "Tumbler",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 119,
        image: require("@/assets/Shop/TumblerWhite.png"),
        quantity: 1,
    },
]

export default products;