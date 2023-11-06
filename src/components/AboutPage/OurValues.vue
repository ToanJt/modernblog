<script setup>
const values = [
    {
        id: "01",
        title: "Exploration",
        text: "Lorem ipsum dolor sit amet et justo cursus.",
        background: require("@/assets/Home/header_slide/Tech.jpg")
    },
    {
        id: "02",
        title: "Diversity",
        text: "Lorem ipsum dolor sit amet et justo cursus.",
        background: require("@/assets/Home/header_slide/Culture.jpg")
    },
    {
        id: "03",
        title: "Innovation",
        text: "Lorem ipsum dolor sit amet et justo cursus.",
        background: require("@/assets/Home/header_slide/Business.jpg")
    },
]
</script>

<template>
    <section class="container">
        <div class="main">
            <div class="container__title">
                <h1 class="text__wrap">Our Values</h1>
                <div></div>
            </div>
            <div class="values">
                <div v-for="(value, index) in values" :key="index" class="value">
                    <div class="number">
                        <p>{{ value.id }}</p>
                    </div>
                    <div class="content">
                        <div class="gradient__overlay">
                        </div>
                        <div class="text">
                            <h1>{{ value.title }}</h1>
                            <p>{{ value.text }}</p>
                        </div>
                        <div class="background">
                            <img :src="value.background" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    background: linear-gradient(to bottom, transparent 40%, var(--dark-blue) 90%), url("@/assets/common/GlowBlue.png")
}
.main {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
}

.container__title {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    width: 70%;
}

.container__title h1 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    line-height: 24px;
    margin-right: 12px;
}

.container__title div {
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 12px;
}

.values {
    width: 70%;
}

.value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #0c1326;
    margin-bottom: 2rem;
}

.value .number {
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-right: 2rem;
    border-radius: 50%;
    background: linear-gradient(to right, transparent, var(--primary));
}

.value .content {
    display: flex;
    position: relative;
    width: 100%;
    background: var(--blue-black);
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
}

.gradient__overlay {
    background: linear-gradient(to bottom, transparent 20%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-radius: 24px;
}

.content .text {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;
    margin-right: 2.5rem;
}

.content .text h1 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: .5rem;
}

.content .text p {
    color: var(--opa-gray);
    max-width: 250px;
}
.value .background {
    width: 100%;
}
.value img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
}</style>