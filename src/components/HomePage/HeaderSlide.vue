<script setup>
import { ref } from 'vue'
const currentIndex = ref(0);
const posts = [
    {
        id: 5,
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
        id: 2,
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
        id: 6,
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

import { useRouter } from "vue-router";
const router = useRouter();

function goPost(id) {
    router.push({ name: "post", params: { idPost: id } });
}

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


// Slider
// function test() {
//     const slider = document.getElementsByClassName('slider');
// const sliderItems = document.getElementsByClassName('slides');
// function slide(wrapper, items) {
//     let posX1 = 0,
//         posX2 = 0,
//         posInitial,
//         posFinal,
//         threshold = 100,
//         slides = document.getElementsByClassName('img__box'),
//         slidesLength = slides.length,
//         slideSize = document.getElementsByClassName('img__box')[0].offsetWidth,
//         firstSlide = slides[0],
//         lastSlide = slides[slidesLength - 1],
//         cloneFirst = firstSlide.cloneNode(true),
//         cloneLast = lastSlide.cloneNode(true),
//         index = 0,
//         allowShift = true;

//     items.appendChild(cloneFirst);
//     items.insertBefore(cloneLast, firstSlide);
//     wrapper.classList.add('loaded');


//     // Mouse events
//     items.onmousedown = dragStart;

//     // Touch events
//     items.addEventListener('touchstart', dragStart);
//     items.addEventListener('touchend', dragEnd);
//     items.addEventListener('touchmove', dragAction);

//     // Transition events
//     items.addEventListener('transitionend', checkIndex);

//     function dragStart(e) {
//         e = e || window.event;
//         e.preventDefault();
//         posInitial = items.offsetLeft;

//         if (e.type == 'touchstart') {
//             posX1 = e.touches[0].clientX;
//         } else {
//             posX1 = e.clientX;
//             document.onmouseup = dragEnd;
//             document.onmousemove = dragAction;
//         }
//     }

//     function dragAction(e) {
//         e = e || window.event;

//         if (e.type == 'touchmove') {
//             posX2 = posX1 - e.touches[0].clientX;
//             posX1 = e.touches[0].clientX;
//         } else {
//             posX2 = posX1 - e.clientX;
//             posX1 = e.clientX;
//         }
//         items.style.left = (items.offsetLeft - posX2) + "px";
//     }

//     function dragEnd() {
//         posFinal = items.offsetLeft;
//         if (posFinal - posInitial < -threshold) {
//             shiftSlide(1, 'drag');
//         } else if (posFinal - posInitial > threshold) {
//             shiftSlide(-1, 'drag');
//         } else {
//             items.style.left = (posInitial) + "px";
//         }

//         document.onmouseup = null;
//         document.onmousemove = null;
//     }

//     function shiftSlide(dir, action) {
//         items.classList.add('shifting');

//         if (allowShift) {
//             if (!action) { posInitial = items.offsetLeft; }

//             if (dir == 1) {
//                 items.style.left = (posInitial - slideSize) + "px";
//                 index++;
//             } else if (dir == -1) {
//                 items.style.left = (posInitial + slideSize) + "px";
//                 index--;
//             }
//         }

//         allowShift = false;
//     }

//     function checkIndex() {
//         items.classList.remove('shifting');

//         if (index == -1) {
//             items.style.left = -(slidesLength * slideSize) + "px";
//             index = slidesLength - 1;
//         }

//         if (index == slidesLength) {
//             items.style.left = -(1 * slideSize) + "px";
//             index = 0;
//         }

//         allowShift = true;
//     }
// }

// slide(slider, sliderItems);
// }
</script>

<template>
    <section class="slider">
        <div class="main">

            <div class="slides">
                <div v-motion :initial="
                {
                    x: -100
                }"
                :enter="
                {
                    x: 0,
                    transition: {
                        duration: 500
                    }
                }" class="prevSlide">
                    <div @click="leftSlide" class="btn__left__arrow">
                        <img class="left__arrow" src="@/assets/Home/header_slide/left-arrow.png" alt="">
                    </div>
                </div>
                <div v-motion :initial="
                {
                    scale: .5
                }"
                :enter="{
                    scale: 1,
                    transition: {
                        duration: 10
                    }
                }" @click="goPost(posts[currentIndex].id)" class="img__box">
                    <div class="badge__card">
                        <p>{{ posts[currentIndex].badge }}</p>
                    </div>
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
                            <p>{{ posts[currentIndex].timeRead }} {{ posts[currentIndex].timeRead > 1 ? "mins" : "min" }}
                            </p>
                            <p>read</p>
                        </div>
                    </div>
                    <div :class="{ active__overlay__effect: activeFlash }" class="overlay__effect"></div>
                </div>
                <div @click="goPost(posts[currentIndex].id)" class="tablet__slide img__box">
                    <div class="badge__card">
                        <p>{{ posts[currentIndex].badge }}</p>
                    </div>
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
                            <p>{{ posts[currentIndex].timeRead }} {{ posts[currentIndex].timeRead > 1 ? "mins" : "min" }}
                            </p>
                            <p>read</p>
                        </div>
                    </div>
                    <div :class="{ active__overlay__effect: activeFlash }" class="overlay__effect"></div>
                </div>
                <div @click="goPost(posts[currentIndex].id)" class="tablet__slide img__box">
                    <div class="badge__card">
                        <p>{{ posts[currentIndex].badge }}</p>
                    </div>
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
                            <p>{{ posts[currentIndex].timeRead }} {{ posts[currentIndex].timeRead > 1 ? "mins" : "min" }}
                            </p>
                            <p>read</p>
                        </div>
                    </div>
                    <div :class="{ active__overlay__effect: activeFlash }" class="overlay__effect"></div>
                </div>
                <div v-motion :initial="
                {
                    x: 100
                }"
                :enter="
                {
                    x: 0,
                    transition: {
                        duration: 500
                    }
                }" class="nextSlide">
                    <div @click="rightSlide" class="btn__right__arrow">
                        <img class="right__arrow" src="@/assets/Home/header_slide/right-arrow.png" alt="">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.main .slides {
    background: url("@/assets/common/GlowBlue.png") no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: 0 5rem;
}

.main .img__box {
    width: auto;
    display: flex;
    align-items: center;
    margin-top: 2.75rem;
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    transition: all 1s linear;
    opacity: 1;
    cursor: pointer;
    z-index: 2;
}

.main .tablet__slide {
    display: none;
}

.overlay__effect {
    transition: linear .5s;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
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

.side__bar--right p {
    color: var(--opa-gray);
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

.badge__card {
    position: absolute;
    transform: rotate(360deg);
    background-color: var(--primary);
    padding: 6px 10px;
    border-radius: 8px;
    top: 2rem;
    right: 5rem;
    z-index: 2;
}

.badge__card p {
    background-color: var(--primary);
}

.prevSlide,
.nextSlide {
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
}

.prevSlide {
    left: 6%;
}

.nextSlide {
    right: 6%;
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
    transition: transform .3s linear;
}



@media only screen and (min-width: 1501px) {
    .main .slides {
        margin: 0 10rem;
    }

    .main .img__box {
        width: auto;
    }
}

@media only screen and (max-width: 1500px) {
    .main .img__box {
        width: 60%;
    }
}

@media only screen and (max-width: 991px) {
    .main {
        overflow: unset;
    }

    .main .img__box {
        width: 80%;
        flex-direction: column;
    }

    .main .img__box .img__slide {
        max-width: 100%;
        z-index: 1;
    }

    .gradient__overlay {
        z-index: 2;
    }

    .badge__card {
        right: 2rem;
    }

    .text__info {
        margin-bottom: 6rem;
    }

    .img__box .side__bar--right {
        height: 60px;
        width: 100%;
        border-top-right-radius: 0;
        flex-direction: row;
        z-index: 3;
    }

    .side__bar--right div {
        transform: none;
        align-items: center;
    }

    .side__bar--right div:nth-child(2) {
        margin: 20px;
    }

    .prevSlide,
    .nextSlide {
        width: 8rem;
        height: 8rem;
    }

    .btn__left__arrow,
    .btn__right__arrow {
        width: 8rem;
        height: 8rem;
    }

    .prevSlide {
        left: 0;
    }

    .nextSlide {
        right: 0;
    }
}

@media only screen and (max-width: 767px) {

    .slider {
        overflow: hidden;
        width: 100%;
        height: 500px;
        padding: 0 2rem;
        position: relative;
        left: 0;
    }

    .main {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 500px;
        border-radius: 1.5rem;
    }

    .main .slides {
        display: flex;
        position: relative;
        height: 500px;
        margin: 0;
    }

    .main .img__box {
        width: 100%;
        height: 500px;
        margin-top: 0;
        position: absolute;
    }

    .main .img__box .img__slide {
        left: 0;
        max-width: 703px;
    }

    .main .tablet__slide {
        display: flex;
    }

    .img__box .side__bar--right p {
        font-size: .9rem;
    }

    .text__info h3 {
        font-size: 1.8rem;
    }

    .text__info p {
        font-size: .9rem;
    }

    .prevSlide,
    .nextSlide {
        display: none;
    }
}

@media only screen and (max-width: 479px) {}
</style>