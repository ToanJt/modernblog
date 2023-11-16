<script setup>
import { defineProps, ref } from 'vue';
import products from '@/products.js';
import cart from '@/cart.js';

const props = defineProps(['product'])
const product = products.find((product) => {
    return product.id === Number(props.product);
})

const showDisplayCart = ref(false);

const quantity = ref(1);
function addToCart(id, quantity) {
    showDisplayCart.value = true;
    setTimeout(() => {
        showDisplayCart.value = false;
    }, 280)
    const product = products.find((item) => {
        return item.id === id;
    })

    const checkInCart = cart.value.find((item) => {
        return item.id === id;
    })
    if (checkInCart) {
        product.quantity += quantity;
    } else {
        product.quantity = quantity;
        cart.value.push(product);
    }
}



</script>

<template>
    <section class="container">
        <div class="main">
            <div :class="{'showDisplay': showDisplayCart}" class="addAnimation">
                <img :src="product.image" alt="">
            </div>
            <div class="product">
                <div class="image">
                    <img :src="product.image" alt="">
                </div>
                <form class="product__info">
                    <h1>{{ product.name }}</h1>
                    <div class="price">
                        <h2>$ {{ (product.price).toFixed(2) }} USD</h2>
                        <h2>$ {{ (product.price + 30).toFixed(2) }} USD</h2>
                    </div>
                    <div class="description">
                        <p>Description</p>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
                    </div>
                    <div class="quantity">
                        <label for="quantity">Quantity</label>
                        <input type="number" min="1" max="99" id="quantity" v-model="quantity">
                    </div>
                    <div @click="addToCart(product.id, quantity)" class="addButton">
                        <p>Add to cart</p>
                    </div>
                </form>
            </div>
            <div class="detail">
                <div class="text__block">
                    <h1>About The Product</h1>
                    <p>Our exclusive collection is carefully crafted to provide comfort, style, and durability. Made with
                        high-quality materials, our products are designed for both fashion and comfort, ensuring you look
                        and feel great.</p>
                </div>
                <div class="text__block">
                    <h1>Additional Info</h1>
                    <p>Our collection is produced with sustainability in mind, using eco-friendly materials and ethical
                        manufacturing practices. You can use with pride, knowing they are environmentally responsible. These
                        collections are versatile and perfect for various occasions.</p>
                </div>
                <div class="text__block">
                    <h1>Shipping</h1>
                    <p>We offer fast and reliable shipping to anywhere in the country. Orders are typically processed and
                        shipped within 24-48 hours. Plus, we offer free shipping on all order.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 6.75rem;
    position: relative;
}

.product {
    display: flex;
}

.showDisplay {
    display: block !important;
}
.addAnimation {
    background-color: var(--primary);
    padding: 2rem;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    animation: addCartAnimation .3s linear;
    display: none;
}

.addAnimation img {
    animation: addCartAnimation .3s linear;
}

@keyframes addCartAnimation {
    0% {
        height: 5rem;
        width: 5rem;
        top: 22rem;
        right: 22rem;
    }

    100% {
        height: 2rem;
        width: 2rem;
        right: -4rem;
        top: -10rem;
    }
}


.product .image {
    background-color: var(--primary);
    padding: 2rem;
    border-radius: 24px;
}

.product .image img {
    height: 26rem;
}

.product .product__info {
    text-align: left;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product__info h1 {
    margin-bottom: .5rem;
    font-size: 2.5rem;
    font-weight: 400;
}

.product__info .price {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
}

.product__info h2 {
    font-size: 2rem;
    font-weight: 400;
}

.product__info h2:last-child {
    font-size: 1.6rem;
    margin-left: 2rem;
    color: var(--opa-gray);
    text-decoration: line-through;
}

.product__info .description {
    color: var(--opa-gray);
    margin-bottom: 3rem;
}

.description p:first-child {
    font-size: 1rem;
    padding: .3rem 0;
    border-bottom: 1px solid var(--opa-gray);
    margin-bottom: .8rem;
}

.description p:last-child {
    font-size: .9rem;
}

.product__info .quantity {
    display: flex;
    flex-direction: column;
}

.quantity input {
    font-size: 1rem;
    padding-left: .5rem;
    width: 60px;
    height: 40px;
    background-color: #fafafa;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
    margin-top: 1rem;
    margin-bottom: 2rem;
}

.product__info .addButton {
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    width: 30%;
    padding: 1rem;
    background: var(--primary);
    border: 1px solid var(--primary);
    cursor: pointer;
    transition: .1s linear;
}
.addButton:hover {
    transition: .1s linear;
    border: 1px solid var(--primary);
    background: var(--light-black);
}

.addButton p {
    font-size: .8rem;
    font-weight: 300;
    text-transform: uppercase;
}

.detail {
    width: 70%;
    padding: 3rem;
    border-radius: 1.5rem;
    background-color: var(--blue-black);
    margin-top: 3rem;
    text-align: left;
    margin-bottom: 6.75rem;
}

.detail .text__block {
    margin-bottom: 2rem;
}

.text__block h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: .3rem;
}

.text__block p {
    color: var(--opa-gray);
    line-height: 1.5rem;
}


@media only screen and (max-width: 991px) {
    .product {
        flex-direction: column;
        width: 100%;
    }
    .product .product__info {
        margin-left: 0;
    }
    .product .image {
        margin-bottom: 2rem;
    }
    .detail {
        width: 100%;
    }
}

@media only screen and (max-width: 767px) {
    .product .image img {
        height: 20rem;
    }
}

@media only screen and (max-width: 479px) {
    .product .image img {
        height: 14rem;
    }
    .product__info h1 {
        font-size: 2rem;
    }
    .product__info h2 {
        font-size: 1.6rem;
    }
    .product__info h2:last-child {
        font-size: 1.2rem;
    }
    .product__info .addButton {
        width: 35%;
        padding: .8rem;
    }
    .addButton p {
        font-size: .6rem;
    }
    .detail {
        text-align: center;
    }
}
</style>