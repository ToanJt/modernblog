<script setup>
import { ref, defineEmits } from 'vue'
import userAuth from '@/composable/useAuth.js'

const { signUp } = userAuth();
const userData = ref({
    email: '',
    password: '',
})

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


const emits = defineEmits([
    'activeSignIn'
])
function activeSignIn() {
    emits('activeSignIn', false);
}


</script>

<template>
    <form class="form">
        <p class="formCenter">Register</p>
        <p class="formCenter">Welcome to Modern Blog</p>
        <div class="formCenter name">
            <label for="email">Email</label>
            <input v-model="userData.email" type="text" id="email" placeholder="Enter your Email">
        </div>
        <div class="formCenter password">
            <label for="password">Password</label>
            <input v-model="userData.password" class="passwordView" type="password" name="" id="password" placeholder="Enter your password">
            <div v-if="active" class="eyes">
                <img @click="toggle" src="@/assets/common/view.png" alt="">
            </div>
            <div v-if="!active" class="eyes">
                <img @click="toggle" src="@/assets/common/hide.png" alt="">
            </div>
        </div>
        <div class="formCenter password">
            <label for="confirm">Confirm password</label>
            <input type="password" name="" id="confirm" placeholder="Confirm your password">
        </div>
        <button @click.prevent="signUp(userData.email, userData.password)" class="formCenter">Register</button>
        <h4 @click="activeSignIn" class="formCenter">Do you already have an account?</h4>
    </form>
</template>

<style scoped>
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
    margin-top: -1rem;
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
</style>