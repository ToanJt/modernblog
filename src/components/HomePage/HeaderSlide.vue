<script setup>
import { ref } from 'vue'
const currentIndex = ref(0);
const posts = [
    {
        image: require("@/assets/Home/header_slide/Tech.jpg"),
        title: "A Transformative Journey",
        author: "Jason Williams",
        authorAvatar: require("@/assets/common/authors/author-1.jpg"),
        badge: "Technology",
        monthPost: "September",
        dayPost: "09",
        timeRead: 2,
    },
    {
        image: require("@/assets/Home/header_slide/Nature.jpg"),
        title: "World Of Bioluminescence",
        author: "Emily Davis",
        authorAvatar: require("@/assets/common/authors/author-2.jpg"),
        badge: "Nature",
        monthPost: "October",
        dayPost: "03",
        timeRead: 8,
    },
    {
        image: require("@/assets/Home/header_slide/Culture.jpg"),
        title: "The Cultural Fusion",
        author: "Ayana Carter",
        authorAvatar: require("@/assets/common/authors/author-3.jpg"),
        badge: "Culture",
        monthPost: "September",
        dayPost: "09",
        timeRead: 1,
    },
]


const activeFlash = ref(false)
function leftSlide() {
    currentIndex.value -= 1;
    if (currentIndex.value < 0) {
        currentIndex.value = 2;
    }
}
function rightSlide() {
    currentIndex.value += 1;
    if (currentIndex.value > 2) {
        currentIndex.value = 0;
    }
    activeFlash.value = true;
    setTimeout(function () {
        activeFlash.value = false;
    }, 500)
}


</script>

<template>
    <section>
        <div class="main">
            <div class="prevSlide">
                <div @click="leftSlide" class="btn__left__arrow">
                    <img class="left__arrow" src="@/assets/Home/header_slide/left-arrow.png" alt="">
                </div>
            </div>
            <div class="img__box">
                <div class="gradient__overlay">
                    <div class="star__icon">
                        <img src="@/assets/Home/header_slide/star.png" alt="">
                    </div>
                    <div class="text__info">
                        <h3>{{ posts[currentIndex].title }}</h3>
                        <div class="author">
                            <img class="img__small" :src="posts[currentIndex].authorAvatar" alt="">
                            <p>{{ posts[currentIndex].author }}</p>
                        </div>
                    </div>
                </div>
                <img class="img__slide" :src="posts[currentIndex].image" alt="">
                <div class="side__bar--right">
                    <div>
                        <p>{{ posts[currentIndex].monthPost }}</p>
                        <p>{{ posts[currentIndex].dayPost }}</p>
                    </div>
                    <div>
                        <p>•</p>
                    </div>
                    <div>
                        <p>{{ posts[currentIndex].timeRead }} {{ posts[currentIndex].timeRead > 1 ? "mins" : "min" }}</p>
                        <p>read</p>
                    </div>
                    <div class="badge__card">
                        <p>{{ posts[currentIndex].badge }}</p>
                    </div>
                </div>
                <div :class="{ active__overlay__effect: activeFlash }" class="overlay__effect"></div>
            </div>
            <div class="nextSlide">
                <div @click="rightSlide" class="btn__right__arrow">
                    <img class="right__arrow" src="@/assets/Home/header_slide/right-arrow.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main {
    background: url("@/assets/common/GlowBlue.png") no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.main .img__box {
    width: 888px;
    display: flex;
    align-items: center;
    margin-top: 2.75rem;
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    transition: all 1s linear;
    opacity: 1;
}

.overlay__effect {
    transition: linear .5s;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to right bottom, #022839, #052335, #081e30, #0a192b, #0c1326);
    z-index: 2;
}

.active__overlay__effect {
    opacity: 1;
    transition: linear .5s;
}


.img__box img {
    transition: linear .3s;
    transform: scale(1);
}

.img__box:hover>img {
    cursor: pointer;
    transform: scale(1.1);
    transition: linear .3s;
}

.gradient__overlay {
    background: linear-gradient(to bottom, transparent 50%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1.5rem;
    z-index: 1;
}

.star__icon {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    margin: 2rem;
    border: 1px solid white;
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(231, 238, 253, 0.253);
}

.star__icon img {
    height: 26px;
    background: none;
}

.text__info {
    position: absolute;
    bottom: 0;
    text-align: left;
    margin: 0 0 2rem 2rem;
}

.text__info h3 {
    font-size: 2rem;
    font-weight: 500;
}

.text__info .author {
    display: flex;
    align-items: center;
    margin-top: .3rem;
}

.text__info img {
    border-radius: 50%;
    margin-right: .5rem;
}

.main .img__box .img__slide {
    height: 500px;
    max-width: calc(100% - 120px);
    object-fit: cover;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}

.img__box .side__bar--right {
    height: 500px;
    width: 120px;
    background-color: var(--blue-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    position: relative;
    z-index: 1;
}

.side__bar--right div {
    transform: rotate(90deg);
    white-space: nowrap;
    display: flex;
    grid-column-gap: 8px;
}

.side__bar--right div:nth-child(1) {
    justify-content: end;
}

.side__bar--right div:nth-child(2) {
    width: 10px;
    justify-self: center;
    align-self: center;
    margin: 60px;
}

.side__bar--right div:nth-child(3) {
    justify-content: start;
}

.side__bar--right .badge__card {
    position: absolute;
    transform: rotate(360deg);
    background-color: var(--primary);
    padding: 6px 10px;
    border-radius: 8px;
    top: 2rem;
    left: -3rem;
}

.badge__card p {
    background-color: var(--primary);
}

.prevSlide,
.nextSlide {
    height: 10rem;
    width: 10rem;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.btn__left__arrow {
    height: 10rem;
    width: 10rem;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: .3s linear;
}

.btn__left__arrow:hover,
.btn__right__arrow:hover {
    transform: scale3d(1.5, 1.5, 1.5);
    transition: .3s linear;
}

.btn__right__arrow {
    height: 10rem;
    width: 10rem;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translateX(0rem);
    transition: transform .3s linear;
}
</style>