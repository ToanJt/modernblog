<script setup>
import { ref } from 'vue'
import Cart from "@/components/Cart.vue"

const closeModal = ref(false);
function modal() {
    closeModal.value = true;
}
function closes(data) {
    closeModal.value = data;
}

</script>

<template>
    <section class="container">
        <Cart @close="closes" :activeCloseModal="closeModal"/>
        <div class="main">
            <div class="logo">
                <img class="logo__size" src="@/assets/common/Logo.png" alt="">
            </div>
            <div class="solid__space">
                <div class="solid__line">

                </div>
            </div>
            <ul class="taskbar">
                <li><router-link to="/">Home</router-link></li>
                <li>•</li>
                <li><router-link class="link" :to="{name: 'blog'}">Blog</router-link></li>
                <li>•</li>
                <li><router-link to="/about">About</router-link></li>
                <li>•</li>
                <li><router-link to="/categories">Categories</router-link></li>
                <li>•</li>
                <li><router-link to="/shop">Shop</router-link></li>
                <li>•</li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
            <ul class="user">
                <li @click="modal"><svg class="w-commerce-commercecartopenlinkicon cart-icon" width="17px" height="17px"
                        viewBox="0 0 17 17">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                                d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                                fill="currentColor" fill-rule="nonzero"></path>
                        </g>
                    </svg></li>
                <li><router-link to="signin">SignIn</router-link></li>
            </ul>
        </div>
    </section>
</template> 

<style scoped>

.main {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
}

.logo {
    /* flex: 1 */
}

.solid__space {
    flex: 1;
}

.solid__space,
.taskbar,
.user {
    align-self: center;
}

.solid__line {
    border-bottom: 1px solid gray;
    margin: 0 24px;
}

.taskbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 16px;
}

.taskbar li a,
.user li a {
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
}

.user {
    display: flex;
    margin-left: 3rem;
}

.user li {
    margin-left: 1.5rem;
}</style>