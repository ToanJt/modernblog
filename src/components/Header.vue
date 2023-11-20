<script setup>
import { ref } from 'vue'
import Cart from "@/components/Cart.vue"
import userAuth from '@/composable/useAuth.js'
import useCart from '@/composable/useCart';

const { logOut, userStatus } = userAuth();
const { yourCart } = useCart();

const closeModal = ref(false);
function modal() {
    closeModal.value = true;
}
function closes(data) {
    closeModal.value = data;
}


const activeMenuBarVar = ref(false);
function activeMenuBar() {
    activeMenuBarVar.value = !activeMenuBarVar.value;
}
function closeMenuBar() {
    activeMenuBarVar.value = false;
}

</script>

<template>
    <section class="container">
        <Cart @close="closes" :activeCloseModal="closeModal" />
        <div class="main">
            <router-link to="/" class="logo">
                <img class="logo__size" src="@/assets/common/Logo.png" alt="">
            </router-link>
            <div class="solid__space">
                <div class="solid__line">

                </div>
            </div>
            <ul :class="{ 'showMenuBar': activeMenuBarVar }" class="taskbar">
                <li><router-link @click="closeMenuBar()" to="/">Home</router-link></li>
                <li class="dot">•</li>
                <li><router-link @click="closeMenuBar()" to="/blog">Blog</router-link></li>
                <li class="dot">•</li>
                <li><router-link @click="closeMenuBar()" to="/about">About</router-link></li>
                <li class="dot">•</li>
                <li><router-link @click="closeMenuBar()" to="/categories">Categories</router-link></li>
                <li class="dot">•</li>
                <li><router-link @click="closeMenuBar()" to="/shop">Shop</router-link></li>
                <li class="dot">•</li>
                <li><router-link @click="closeMenuBar()" to="/contact">Contact</router-link></li>
                <li class="dot">•</li>
                <li v-if="!userStatus"><router-link @click="closeMenuBar()" to="/signin">SignIn</router-link></li>
                <li class="logout" v-if="userStatus" @click="logOut">LOGOUT</li>
            </ul>
            <ul class="user">
                <li @click="modal" class="cart__icon"><svg class="w-commerce-commercecartopenlinkicon cart-icon"
                        width="17px" height="17px" viewBox="0 0 17 17">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                                d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                                fill="currentColor" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                    <div class="miniCart">
                        <p>{{ yourCart.length }}</p>
                    </div>
                </li>
            </ul>
            <div @click="activeMenuBar()" class="menubar">
                <img src="@/assets/common/menu.png" alt="">
            </div>
        </div>
    </section>
</template> 

<style scoped>
.logo {
    cursor: pointer;
    z-index: 5;
}

.cart__icon {
    position: relative;
}

.miniCart {
    background-color: white;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid var(--primary);
    position: absolute;
    right: -0.6rem;
    bottom: -.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.miniCart p {
    font-weight: 600;
    color: var(--primary);
    font-size: .6rem;
}

.main {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
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
    margin-left: 1rem;
    cursor: pointer;
}

.user li {
    margin-left: 1rem;
}

.menubar {
    display: none;
}
.logout {
    cursor: pointer;
}

@media only screen and (max-width: 991px) {
    .taskbar {
        justify-content: flex-start;
        flex-direction: column;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: black;
        padding-top: 10rem;
        transform: translateY(-60rem);
        transition: .3s linear;
        z-index: 4;
    }

    .showMenuBar {
        transform: translateY(0);
        transition: .3s linear;
    }

    .taskbar li {
        margin-bottom: 2rem;
    }

    .taskbar li a {
        font-size: 1.1rem;
        font-weight: 500;
    }

    .menubar {
        display: block;
        cursor: pointer;
    }

    .solid__line {
        margin: 0;
        margin-left: 1rem;
        margin-right: 5rem;
    }

    .user {
        position: absolute;
        right: 10rem;
        z-index: 5;
    }

    .menubar {
        z-index: 5;
        display: flex;
        align-items: center;
    }

    .menubar img {
        height: 2rem;
    }

    .dot {
        display: none;
    }
}

@media only screen and (max-width: 767px) {
    .main {
        padding: 0 2rem;
        margin-bottom: 3rem;
    }
    .user {
        right: 5rem;
    }
    .solid__line {
        margin-right: 3rem;
    }
}

@media only screen and (max-width: 479px) {
    .solid__space {
        display: none;
    }
    .user {
        right: 6rem;
    } 
}


</style>