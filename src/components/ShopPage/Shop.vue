<script setup>
import { ref } from 'vue'
const products = [
    {
        id: 1,
        active: ref(true),
        idType: 2,
        nameType: "accessories",
        name: "Cap",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 49,
        image: require("@/assets/Shop/CapWhite.png")
    },
    {
        id: 2,
        active: ref(false),
        idType: 1,
        nameType: "clothing",
        name: "T-Shirt",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 99.99,
        image: require("@/assets/Shop/ShirtWhite.png")
    },
    {
        id: 3,
        active: ref(false),
        idType: 3,
        nameType: "souvenir",
        name: "Bag",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 39.32,
        image: require("@/assets/Shop/BagWhite.png")
    },
    {
        id: 4,
        active: ref(false),
        idType: 3,
        nameType: "souvenir",
        name: "Tumbler",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        price: 119,
        image: require("@/assets/Shop/TumblerWhite.png")
    },
]

const chooseTypeProduct = ref(0);

function allType(idType) {
    if (idType === 0) {
        return "All"
    }
    else if (idType === 1) {
        return "Clothing"
    } else if (idType === 2) {
        return "accessories"
    } else if (idType === 3) {
        return "souvenir"
    }
}

function chooseHandle(id) {
    chooseTypeProduct.value = id;
    let products = this.products;
    products.forEach(item => {
        item.active.value = false;
    })
    activeFilter.forEach(item => {
        if(item.id !== id)
            item.active.value = false;
        else item.active.value = true;
    })
}

function filterProduct() {
    if (chooseTypeProduct.value === 0) {
        return products;
    }
    else {
        const filter = products.filter((item) => {
            return item.idType === chooseTypeProduct.value;
        })
        return filter;
    }
}

const activeFilter = [
    {
        id: 0,
        active: ref(true)
    },
    {
        id: 1,
        active: ref(false)
    },
    {
        id: 2,
        active: ref(false)
    },
    {
        id: 3,
        active: ref(false)
    }
]

</script>

<template>
    <section class="container">
        <div class="main">
            <div class="filterProduct">
                <div :class="{ active: type.active.value }"
                    @click="chooseHandle(type.id)"
                    v-for="type in activeFilter"
                    :key="type.id" class="typeProduct">
                    <h1>{{ allType(type.id) }}</h1>
                </div>
            </div>
            <div class="products">
                <div v-for="item in filterProduct()" :key="item.id" class="product">
                    <img :src="item.image" alt="">
                    <h1>{{ item.name }}</h1>
                    <p>{{ item.text }}</p>
                    <h3>$ {{ filters.formatMoney(item.price) }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* FILTER PRODUCT ACTIVE */
.active {
    background-color: var(--primary) !important;
    transition: .2s linear;
}

.container {
    display: flex;
    justify-content: center;
    overflow: inherit;
}

.main {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-bottom: 6.75rem;
}

.filterProduct {
    display: flex;
    background-color: var(--opa-white);
    margin: 0 8rem;
    padding: .8rem 1.2rem;
    border-radius: 2.5rem;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3rem;
    position: sticky;
    top: 0;
    z-index: 2;
}

.filterProduct .typeProduct {
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-transform: uppercase;
    transition: .2s linear;
    cursor: pointer;
}
.filterProduct .typeProduct:hover {
    background-color: #fefeff13;
}

.typeProduct h1 {
    font-size: 1rem;
    font-weight: 600;
}

.products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin: 0 4rem;
}

.products .product {
    background-color: var(--primary);
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product:hover img {
    opacity: .7;
    transform: scale(1.1);
    transition: .3s linear;
}

.product img {
    height: 295px;
    transition: .3s linear;
    margin-top: 2rem;
}

.product h1 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.product p {
    color: var(--opa-gray);
    max-width: 65%;
}

.product h3 {
    font-weight: 400;
    font-size: 1rem;
    margin: 1.5rem 0 2.5rem 0;
}
</style>