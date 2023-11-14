<template>
    <section class="container">
        <div class="main">
            <div class="background">
                <div class="contact">
                <h1>Don't Miss Our Weekly Posts</h1>
                <div class="sub__info">
                    <p>Subscribe to our newsletter consectetur adipiscing elit.</p>
                    <p>Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div class="input">
                    <div class="div1"></div>
                    <input type="text" placeholder="Enter your email">
                    <div class="div2">
                        <div class="btn__send">
                            <img src="@/assets/Home/short-arrow.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="gradient__overlay"></div>
        </div>
    </section>
</template>

<style scoped>
.main {
    width: 100%;
    padding: 0 8rem;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
    margin-top:5rem;
    margin-bottom: 6rem;
    position: relative;
}
.background {
    height: 100%;
    background: url("@/assets/Home/AbstractV.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: scroll;
    align-items: center;
    border-radius: 1.5rem;
}

.main img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.gradient__overlay {
    background: linear-gradient(to bottom, transparent 10%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1.5rem;
    margin: 0 8rem;
}
.background {
    display: flex;
    justify-content: center;
}
.contact {
    z-index: 4;
    position: absolute;
    top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
}
.contact p {
    margin-bottom: .3rem;
    color: var(--opa-gray);
}
.contact > div {
    margin-bottom: 1.5rem;
}
.contact .input {
    width: 90%;
    background-color: var(--light-black);
    border-radius: 1.8rem;
    position: relative;
}
.contact input {
    background-color: var(--light-black);
    border: none;
    height: 3.75rem;
    margin-right: 5rem;
    width: 70%;
    color: white;
    font-size: .9rem;
    outline: none;
}

.input .div2 {
    position: absolute;
    width: 80px;
    height: 2.75rem;
    margin: .25rem;
    border-radius: 1.5rem;
    right: .25rem;
    top: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--opa-black);
    transition: .2s linear;
}

.btn__send img {
    margin-top: .25rem;
    height: 20px;
    width: auto;
}
.input .div2:hover{
    cursor: pointer;
    transition: .2s linear;
    background-color: #424242;
}

@media only screen and (max-width: 991px) {
    .main {
        padding: 0 3rem;
    }
    .gradient__overlay {
        margin: 0 3rem;
    }
}

@media only screen and (max-width: 767px) {
    .contact {
        padding: 0 2rem;
    }
    .contact h1 {
        font-size: 2rem;
        width: 80%;
    }
    .contact > div {
        width: 80%;
    }
    .contact p {
        font-size: .9rem;
    }
    .contact .input {
        width: 80%;
    }
    .contact input {
        width: 60%;
    }
}

@media only screen and (max-width: 479px) {
    .contact input {
        width: 50%;
    }
    .input .div2 {
        width: 60px;
    }
}

@media only screen and (max-width: 390px) {
    .contact input {
        width: 40%;
    }
    .input .div2 {
        width: 60px;
    }
} 
</style>