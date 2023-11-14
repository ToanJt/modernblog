<script setup>


const allPostsFirstRow = [
    {
        id: 1,
        title: "Way For A Green Future",
        text: "Sustainability is no longer an optional endeavor for businesses.",
        author: "Marcus King",
        authorAvatar: require("@/assets/common/authors/author-4.jpg"),
        image: require("@/assets/Blog/AllPosts/Sustain.jpg"),
        monthPost: "September",
        dayPost: "09",
        timeRead: "1",
        badge: "Sustainability",
    },
    {
        id: 2,
        title: "World Of Bioluminescence",
        text: "Sustainability is no longer an optional endeavor for businesses.",
        author: "Emily Davis",
        authorAvatar: require("@/assets/common/authors/author-2.jpg"),
        image: require("@/assets/Home/header_slide/Nature.jpg"),
        monthPost: "October",
        dayPost: "03",
        timeRead: "8",
        badge: "Nature",
    },
];
const allPostsSecondRow = [
    {
        id: 3,
        title: "The Power Of Networking",
        text: "Sustainability is no longer an optional endeavor for businesses.",
        author: "Ayana Carter",
        authorAvatar: require("@/assets/common/authors/author-3.jpg"),
        image: require("@/assets/Blog/AllPosts/Networking.jpg"),
        monthPost: "October",
        dayPost: "03",
        timeRead: "2",
        badge: "Bussiness",
    },
    {
        id: 4,
        title: "A Journey Through Time",
        text: "Sustainability is no longer an optional endeavor for businesses.",
        author: "Jason Williams",
        authorAvatar: require("@/assets/common/authors/author-1.jpg"),
        image: require("@/assets/Blog/AllPosts/Music.jpg"),
        monthPost: "September",
        dayPost: "09",
        timeRead: "7",
        badge: "Music",
    },
];

import { useRouter } from "vue-router";
const router = useRouter();

function goPost(id) {
  router.push({ name: "post", params: { idPost: id } });
}

</script>

<template>
    <section class="container">
        <div class="main">
            <div class="container__title">
                <div></div>
                <h1 class="text__wrap">All Posts</h1>
                <div></div>
            </div>
            <div class="posts">
                <div class="post__row">
                    <div @click="goPost(object.id)" class="post"
                        v-for="(object, index) in allPostsFirstRow" :key="index">
                        <img :src="object.image" alt="">
                        <div class="gradient__overlay"></div>
                        <div class="text__info">
                            <h3>{{ object.title }}</h3>
                            <div class="author">
                                <img class="img__small" :src="object.authorAvatar" alt="">
                                <p>{{ object.author }}</p>
                            </div>
                        </div>
                        <div class="side__bar--right">
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
                    <div @click="goPost(object.id)" class="post"
                        v-for="(object, index) in allPostsSecondRow" :key="index">
                        <img :src="object.image" alt="">
                        <div class="gradient__overlay"></div>
                        <div class="text__info">
                            <h3>{{ object.title }}</h3>
                            <div class="author">
                                <img class="img__small" :src="object.authorAvatar" alt="">
                                <p>{{ object.author }}</p>
                            </div>
                        </div>
                        <div class="side__bar--right">
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
            <div class="next__btn">
                <button>Next &gt;</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    background: url('@/assets/common/GlowBlue.png') no-repeat;
    background-position: center;
}

.main {
    width: 100%;
    padding: 0 4rem;
    
}

.container__title {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    width: 100%;
}

.container__title h1 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    line-height: 24px;
    margin: 0 12px;
}

.container__title div {
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 12px;
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
    overflow: hidden;
    border-radius: 24px;
    color: white;
    cursor: pointer;
}

.post:hover>img {
    cursor: pointer;
    transform: scale(1.1);
    transition: linear .3s;
}

.show__content {
    display: flex !important;
}


.post>img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 24px;
    transition: linear .3s;
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
    display: flex;
    position: absolute;
    text-align: left;
    bottom: 1rem;
    right: 2rem;
    left: 2rem;
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
    display: flex;
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

.next__btn button {
    margin-top: 2rem;
    background-color: var(--primary);
    color: white;
    border: none;
    padding: .8rem 1.5rem;
    border-radius: 1.4rem;
    font-size: 1rem;
}

@media only screen and (max-width: 991px) {
    .container {
        padding: 0 3rem;
    }
    .post__row {
        flex-direction: column;
        display: block;
        margin: 0;
    }
    .post__row .post {
        margin-bottom: 1rem;
    }
}

@media only screen and (max-width: 767px) {
    .container {
        padding: 0 2rem;
    }
    .main {
        padding: 0;
    }
    .post .text__info {
        flex-direction: column;
    }
    .text__info .author {
        margin-top: .5rem;
    }
    .side__bar--right {
        width: 100%;
        justify-content: center;
    }
}
</style>