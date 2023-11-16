<script setup>
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from "vue";
import cart from '@/cart.js';

const props = defineProps({
    activeCloseModal: ref()
})
const emits = defineEmits(['close'])
function close() {
    emits('close', false);
}

function func(event) {
    event.stopPropagation();
}

function test() {
    const sum = ref(0);
    cart.value.forEach((item) => {
        sum.value += (item.quantity * item.price);
    })
    return (sum.value).toFixed(2);
}

watch(() => cart,
    () => {
        test();
    }
    , {
        immediate: true,
        deep: true
    })

function removeItem(id) {
    const itemIndex = cart.value.findIndex((item) => {
        return item.id === id;
    })
    cart.value.splice(itemIndex, 1);
}



</script>

<template>
    <section>
        <div @click="close()" v-if="props.activeCloseModal" class="cart">
            <div @click="func" class="background">
                <div class="cart__header">
                    <h1>Your cart</h1>
                    <p @click="close()">&times;</p>
                </div>
                <div class="items">
                    <div v-for="product in cart" :key="product.id" class="item">
                        <div class="info">
                            <img :src="product.image" alt="">
                            <div class="text">
                                <p>{{ product.name }}</p>
                                <p>$ {{ (product.price).toFixed(2) }} USD</p>
                                <p @click="removeItem(product.id)" class="remove">Remove</p>
                            </div>
                        </div>
                        <div class="quantity">
                            <input v-model="product.quantity" type="number" min="1" max="99" name="" id="">
                        </div>
                    </div>
                </div>
                <div class="checkout">
                    <div class="subtotal">
                        <p>Subtotal</p>
                        <p>$ {{ test() }} USD</p>
                    </div>
                    <div class="check">
                        <p>Continue to checkout</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.cart {
    display: flex;
    position: fixed;
    background: rgba(0, 0, 0, 0.822);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    color: black;
    z-index: 9;
}

.background {
    width: 30rem;
    margin: 0 2rem;
    background: white;
}

.background .cart__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.background .cart__header h1 {
    font-size: 1.6rem;
    font-weight: 400;
}

.background .cart__header p {
    font-size: 2rem;
    line-height: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.items .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    padding-top: 0;
}

.items .item .info {
    display: flex;
}

.items .item img {
    height: 4rem;
    margin-right: 1rem;
}

.items .item .text {
    text-align: left;
}

.text p:first-child {
    font-weight: 600;
}

.text .remove {
    color: red;
    cursor: pointer;
}

.items .item .quantity {
    float: right;
}

.quantity input {
    font-size: 1rem;
    padding-left: .5rem;
    width: 60px;
    height: 40px;
    background-color: #fafafa;
    border: 1px solid #dddddd;
    outline: none;
}

.checkout {
    padding: 1.5rem;
    border-top: 1px solid #dddddd;
}

.checkout .subtotal {
    display: flex;
    justify-content: space-between;
}

.checkout .check {
    color: white;
    background-color: var(--primary);
    padding: 1rem 2rem;
    border-radius: 2rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: .3s linear;
}

.checkout .check:hover {
    transition: .3s linear;
    background-color: var(--dark-blue);
}
</style>