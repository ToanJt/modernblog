<script setup>
import { ref} from 'vue';
import { defineProps, defineEmits } from "vue";
const props = defineProps( {
    activeCloseModal: ref()
})
const emits = defineEmits(['close'])
function close() {
    emits('close', false);
}


</script>

<template>
    <section>
        <div v-if="props.activeCloseModal" class="cart">
            <div class="background">
                <div class="cart__header">
                    <h1>Your cart</h1>
                    <p @click="close">&times;</p>
                </div>
                <div class="items">
                    <div class="item">
                        <div class="info">
                            <img src="@/assets/Shop/CapWhite.png" alt="">
                            <div class="text">
                                <p>Cap</p>
                                <p>$ 49.00 USD</p>
                                <p class="remove">Remove</p>
                            </div>
                        </div>
                        <div class="quantity">
                            <input type="number" name="" id="" value="1">
                        </div>
                    </div>
                    <div class="item">
                        <div class="info">
                            <img src="@/assets/Shop/CapWhite.png" alt="">
                            <div class="text">
                                <p>Cap</p>
                                <p>$ 49.00 USD</p>
                                <p class="remove">Remove</p>
                            </div>
                        </div>
                        <div class="quantity">
                            <input type="number" name="" id="" value="1">
                        </div>
                    </div>
                </div>
                <div class="checkout">
                    <div class="subtotal">
                        <p>Subtotal</p>
                        <p>$ 49.00 USD</p>
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
}
</style>