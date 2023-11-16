<script setup>
import SignUp from '@/pages/SignUp.vue'
import { ref } from 'vue'

const active = ref(false);
function toggle() {
    const password = document.querySelector('.passwordView');
    if (!active.value) {
        password.type = "text";
    }
    else {
        password.type = 'password';
    }
    active.value = !active.value;
}

const activeSignUp = ref(false);
function toggleForm() {
    activeSignUp.value = !activeSignUp.value;
}
function activeSignIn() {
    activeSignUp.value = !activeSignUp.value;
    return activeSignUp.value;
}


</script>

<template>
    <section class="container">
        <div class="main">
            <div v-motion :initial="{
                x: -200,
                opacity: 0
            }"
            :enter="{
                x: 0,
                opacity: 1,
                transition: {
                    duration: 500
                }
            }" class="background">
                <img src="@/assets/Home/header_slide/Nature.jpg" alt="">
            </div>
            <SignUp v-motion :initial="{
                x: -200,
                opacity: 0
            }"
            :enter="{
                x: 0,
                opacity: 1,
                transition: {
                    duration: 500
                }
            }" @activeSignIn="activeSignIn" v-if="activeSignUp" />
            <form v-motion :initial="{
                x: 200,
                opacity: 0
            }"
            :enter="{
                x: 0,
                opacity: 1,
                transition: {
                    duration: 500
                }
            }" v-if="!activeSignUp" class="form">
                <p class="formCenter">Sign In</p>
                <p class="formCenter">Welcome to Modern Blog</p>
                <div class="formCenter name">
                    <label for="name">Username or Email</label>
                    <input type="text" id="name" placeholder="Enter...">
                </div>
                <div class="formCenter password">
            <label for="password">Password</label>
            <input class="passwordView" type="password" name="" id="password" placeholder="Enter password">
            <div v-if="active" class="eyes">
                <img @click="toggle" src="@/assets/common/view.png" alt="">
            </div>
            <div v-if="!active" class="eyes">
                <img @click="toggle" src="@/assets/common/hide.png" alt="">
            </div>
        </div>
                <h3 class="formCenter">Forgot password?</h3>
                <button class="formCenter">Sign in</button>
                <h4 @click="toggleForm" class="formCenter">Register an account?</h4>
            </form>
        </div>
    </section>
</template>

<style scoped>
.main {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    margin-top: 4.75rem;
    margin-bottom: 6.75rem;
}

.background {
    flex: 1;
    height: 40rem;
}
.background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.form {
    flex: 1;
    background: var(--blue-black);
    display: flex;
    flex-direction: column;
    align-items: start;
}
.form p {
    margin-bottom: 3rem;
    color: var(--opa-gray);
}
.form p:first-child {
    margin-top: 3rem;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: white;
}


.form div {
    display: flex;
    flex-direction: column;
    width: calc(100% - 12rem);
    text-align: left;
}
.form div label {
    margin-bottom: 0rem;
    color: var(--opa-gray);
    font-weight: 500;
}
.form div input {
    margin-bottom: 1.5rem;
    background-color: var(--light-black);
    border: none;
    padding: 1.2rem 1rem;
    color: white;
    outline: none;
    border-radius: 1rem;
    margin-top: .7rem;
    font-size: .9rem;
}


.form .password {
    position: relative;
}

.form .password input:first-child {
    width: 90%;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}

.form .password .eyes {
    background: var(--light-black);
    display: flex;
    justify-content: center;
    height: 53px;
    width: auto;
    position: absolute;
    right: 1rem;
    bottom: calc(50% - 30px);
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
}

.form .password img {
    height: 18px;
    width: 18px;
    filter: contrast(0.5);
    cursor: pointer;
}
.form h3 {
    align-self: end;
    font-size: .9rem;
    font-weight: 400;
    color: var(--opa-gray);
    margin-top: -.5rem;
    cursor: pointer;
    margin-bottom: 4rem;
}

.form button {
    align-self: start;
    border: none;
    background-color: var(--primary);
    color: var(--opa-gray);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 1.2rem 1.8rem;
    padding-bottom: 1.1rem;
    border-radius: 1rem;
    transition: .5s linear;
}
.form button:hover {
    color: white;
    background-color: var(--blue-black);
    transition: .5s linear;
    cursor: pointer;
}
.form h4 {
    align-self: flex-start;
    font-size: .9rem;
    color: var(--opa-gray);
    font-weight: 500;
    margin-top: .8rem;
    cursor: pointer;
}

.formCenter {
    margin-left: 6rem;
    margin-right: 6rem;
}

@media only screen and (max-width: 991px) {
    .formCenter {
        margin-left: 3rem;
        margin-right: 3rem;
    }
    .form div {
        width: calc(100% - 6rem);
    }
}

@media only screen and (max-width: 767px) {
    .background {
        display: none;
    }
    .form {
        border-radius: 1.5rem;
    }

    .form h4 {
        margin-bottom: 3rem;
    }
}

@media only screen and (max-width: 479px) {
    .form {
        display: block;
    }
    .form p {
        margin-top: 2rem;
    }
}
</style>