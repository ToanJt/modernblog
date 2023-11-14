<script setup>
import { defineProps } from 'vue';
import posts from '@/posts';
import Categories from './BlogPage/Categories.vue';


const props = defineProps(['idCategories']);

function refresh() {
    return posts.filter((item) => {
        return item.badge === props.idCategories;
    })
}

</script>

<template>
    <section class="container">
        <div class="main">
            <div class="container__title">
                <div></div>
                <h1 class="text__wrap">Posts In Culture</h1>
                <div></div>
            </div>
            <div class="posts">
                <div class="post" v-for="(object, index) in refresh()" :key="index">
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
            <Categories class="test" />
        </div>

    </section>
</template>

<style scoped>

.container {
    display: flex;
    justify-content: center;
}

.main {
    width: 90%;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, transparent 30%, var(--dark-blue) 50%), url("@/assets/common/GlowBlue.png");
    background-position: 0 0, 50% 0;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    margin-bottom: 6.75rem;
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
    margin-bottom: 2rem;
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

.posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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
    display: flex;
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
</style>