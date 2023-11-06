<script setup>
import { ref } from 'vue'

const latestPostFirstRow = [
    [
        {
            id: 1,
            active: ref(false),
            title: "A Transformative Journey",
            author: "Jason Williams",
            authorAvatar: require("@/assets/common/authors/author-1.jpg"),
            image: require("@/assets/Home/header_slide/Tech.jpg"),
            monthPost: "September",
            dayPost: "09",
            timeRead: "2",
            badge: "Technology",
        },
        {
            id: 2,
            active: ref(true),
            title: "World Of Bioluminescence",
            author: "Emily Davis",
            authorAvatar: require("@/assets/common/authors/author-2.jpg"),
            image: require("@/assets/Home/header_slide/Nature.jpg"),
            monthPost: "October",
            dayPost: "03",
            timeRead: "8",
            badge: "Nature",
        },
        {
            id: 3,
            active: ref(false),
            title: "The Cultural Fusion",
            author: "Ayana Carter",
            authorAvatar: require("@/assets/common/authors/author-3.jpg"),
            image: require("@/assets/Home/header_slide/Culture.jpg"),
            monthPost: "September",
            dayPost: "09",
            timeRead: "1",
            badge: "Culture",
        },
    ],
    [
        {
            id: 1,
            active: ref(false),
            title: "Way For A Greener Future",
            author: "Marcus King",
            authorAvatar: require("@/assets/common/authors/author-4.jpg"),
            image: require("@/assets/Home/header_slide/Sustain.jpg"),
            monthPost: "October",
            dayPost: "02",
            timeRead: "1",
            badge: "Sustainability",
        },
        {
            id: 2,
            active: ref(true),
            title: "A Journey Through Time",
            author: "Emily Davis",
            authorAvatar: require("@/assets/common/authors/author-1.jpg"),
            image: require("@/assets/Home/header_slide/Music.jpg"),
            monthPost: "October",
            dayPost: "03",
            timeRead: "8",
            badge: "Music",
        },
        {
            id: 3,
            active: ref(false),
            title: "World Of Bioluminescence",
            author: "Emily Davis",
            authorAvatar: require("@/assets/common/authors/author-2.jpg"),
            image: require("@/assets/Home/header_slide/Nature.jpg"),
            monthPost: "October",
            dayPost: "03",
            timeRead: "8",
            badge: "Nature",
        },
    ]
];
const latestPostSecondRow = [
    [
        {
        id: 4,
        active: ref(true),
        title: "Fragile Balance Of Nature",
        author: "Ayana Carter",
        authorAvatar: require("@/assets/common/authors/author-2.jpg"),
        image: require("@/assets/Home/header_slide/Nature2.jpg"),
        monthPost: "October",
        dayPost: "03",
        timeRead: "1",
        badge: "Nature",
    },
    {
        id: 5,
        active: ref(false),
        title: "The Power Of Music",
        author: "Jason Williams",
        authorAvatar: require("@/assets/common/authors/author-4.jpg"),
        image: require("@/assets/Home/header_slide/Music2.jpg"),
        monthPost: "September",
        dayPost: "09",
        timeRead: "4",
        badge: "Music",
    },
    {
        id: 6,
        active: ref(false),
        title: "The Power Of Music",
        author: "Jason Williams",
        authorAvatar: require("@/assets/common/authors/author-4.jpg"),
        image: require("@/assets/Home/header_slide/Business.jpg"),
        monthPost: "September",
        dayPost: "09",
        timeRead: "4",
        badge: "Music",
    },
    ],
    [
        {
        id: 4,
        active: ref(true),
        title: "The Universe Is Vast",
        author: "Emily Davis",
        authorAvatar: require("@/assets/common/authors/author-2.jpg"),
        image: require("@/assets/Home/header_slide/AstroV.jpg"),
        monthPost: "November",
        dayPost: "02",
        timeRead: "22",
        badge: "Astro",
    },
    {
        id: 5,
        active: ref(false),
        title: "The Power Of Music",
        author: "Jason Williams",
        authorAvatar: require("@/assets/common/authors/author-4.jpg"),
        image: require("@/assets/Home/header_slide/Music2.jpg"),
        monthPost: "September",
        dayPost: "09",
        timeRead: "4",
        badge: "Music",
    },
    {
        id: 6,
        active: ref(false),
        title: "Mastering Productivity",
        author: "Marcus King",
        authorAvatar: require("@/assets/common/authors/author-1.jpg"),
        image: require("@/assets/Home/header_slide/Tech2.jpg"),
        monthPost: "October",
        dayPost: "05",
        timeRead: "5",
        badge: "Technology",
    },
    ]
];

const activeFilter = ref(true);

function effect(element, array) {
    if (element.id < 4) {
        array.forEach((item, index) => {
            if (index < 3) {
                item.active.value = false;
                console.log(item.active)
            }
        })
    }
    if (element.id >= 4) {
        array.forEach((item, index) => {
            if (index < 3) {
                item.active.value = false;
                console.log(item.active)
            }
        })
    }
    element.active.value = true;
}

const renderArray = ref(0);
function toggleArray(index) {
    renderArray.value = index;
}
</script>

<template>
    <section class="container">
        <div class="filter__posts">
            <button :class="{ activeMoveEffectColor: activeFilter }"
                @click="activeFilter = !activeFilter, toggleArray(0)">Trending</button>
            <button :class="{ activeMoveEffectColor: !activeFilter }" @click="activeFilter = !activeFilter, toggleArray(1)">Latest</button>
            <div :class="{ activeMoveEffect: !activeFilter }" class="activeFilterColor"></div>
        </div>
        <div class="posts">
            <div class="post__row">
                <div :class="{ effectActive: object.active.value }" @mouseover="effect(object, latestPostFirstRow[renderArray])"
                    class="post" v-for="(object, index) in latestPostFirstRow[renderArray]" :key="index">
                    <img :src="object.image" alt="">
                    <div class="gradient__overlay"></div>
                    <div :class="{ show__content: object.active.value }" class="text__info">
                        <h3>{{ object.title }}</h3>
                        <div class="author">
                            <img class="img__small" :src="object.authorAvatar" alt="">
                            <p>{{ object.author }}</p>
                        </div>
                    </div>
                    <div :class="{ show__content: object.active.value }" class="side__bar--right">
                        <div>
                            <p>{{ object.monthPost }}</p>
                            <p>{{ object.dayPost }}</p>
                        </div>
                        <div>
                            <p>•</p>
                        </div>
                        <div>
                            <p>{{ object.timeRead }}</p>
                            <p>{{ (Number(object.timeRead) > 1) ? "mins" : "min" }} read</p>
                        </div>
                    </div>
                    <div class="badge__card">
                        <p>{{ object.badge }}</p>
                    </div>
                </div>
            </div>
            <div class="post__row">
                <div :class="{ effectActive: object.active.value }" @mouseover="effect(object, latestPostSecondRow[renderArray])"
                    class="post" v-for="(object, index) in latestPostSecondRow[renderArray]" :key="index">
                    <img :src="object.image" alt="">
                    <div class="gradient__overlay"></div>
                    <div :class="{ show__content: object.active.value }" class="text__info">
                        <h3>{{ object.title }}</h3>
                        <div class="author">
                            <img class="img__small" :src="object.authorAvatar" alt="">
                            <p>{{ object.author }}</p>
                        </div>
                    </div>
                    <div :class="{ show__content: object.active.value }" class="side__bar--right">
                        <div>
                            <p>{{ object.monthPost }}</p>
                            <p>{{ object.dayPost }}</p>
                        </div>
                        <div>
                            <p>•</p>
                        </div>
                        <div>
                            <p>{{ object.timeRead }}</p>
                            <p>{{ (Number(object.timeRead) > 1) ? "mins" : "min" }} read</p>
                        </div>
                    </div>
                    <div class="badge__card">
                        <p>{{ object.badge }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    width: 70%;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 6.75rem;
}

.filter__posts {
    margin-bottom: 60px;
    background-color: rgba(254, 254, 255, .1);
    border-radius: 2.8rem;
    align-self: center;
    padding: .6rem 1rem;
    display: flex;
    justify-content: space-between;
    grid-column-gap: 1rem;
    position: relative;
    overflow: hidden;
}

.filter__posts button {
    background-color: rgba(254, 254, 255, 0);
    border: none;
    color: var(--opa-gray);
    padding: 1rem 1.8rem;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 1.1rem;
    font-weight: 600;
    transition: .3s linear;
    position: relative;
    z-index: 1;
}

.activeFilterColor {
    background-color: var(--primary) !important;
    transition: .3s linear;
    position: absolute;
    top: .5rem;
    bottom: .5rem;
    left: 1rem;
    padding-right: 9rem;
    border-radius: 1.1rem;
}

.activeMoveEffect {
    transform: translateX(7rem);
    transition: .3s linear;
    left: 4rem;
    padding-right: 7rem;
}

.activeMoveEffectColor {
    color: white !important;
}

.posts {
    display: flex;
    flex-direction: column;
}

.post__row {
    display: flex;
    grid-gap: 1rem;
    margin-bottom: 1rem;
}


.post {
    flex: 1;
    height: 500px;
    position: relative;
    transition: linear .5s;
}

.effectActive {
    flex: 2;
    transition: .5s linear;
    cursor: pointer;
}

.show__content {
    display: flex !important;
}


.post>img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 24px;
}

.gradient__overlay {
    background: linear-gradient(to bottom, transparent 50%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1.3rem;
}


.post .text__info {
    position: absolute;
    text-align: left;
    bottom: 1rem;
    right: 2rem;
    left: 2rem;
    display: none;
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
    margin-bottom: 3.5rem;
}

.text__info>h3 {
    font-size: 24px;
    font-weight: 500;
}

.text__info .author {
    display: flex;
    align-items: center;
    grid-column-gap: .5rem;
}

.author img {
    border-radius: 50%;
}

.side__bar--right {
    display: none;
    grid-column-gap: 1rem;
    position: absolute;
    bottom: 2.2rem;
    right: 2rem;
    color: var(--opa-gray);
}

.side__bar--right div {
    display: flex;
    grid-column-gap: 8px;
}

.badge__card {
    position: absolute;
    top: 2rem;
    right: 2rem;
    padding: 6px 10px;
    border-radius: 8px;
    background: var(--primary);
}

.post:hover .text__info,
.post:hover .side__bar--right {
    display: flex;
}</style>