<script setup>
    const categories = [
        {
            image: require("@/assets/Blog/Categories/Culture3.jpg"),
            title: "Culture",
            subtitle: "Explore the world"
        },
        {
            image: require("@/assets/Blog/Categories/Sustainability.jpg"),
            title: "Sustainability",
            subtitle: "Save Our Planet"
        },
        {
            image: require("@/assets/Blog/Categories/Music3.jpg"),
            title: "Music",
            subtitle: "Food for the Soul"
        },
        {
            image: require("@/assets/Blog/Categories/Nature5.jpg"),
            title: "Nature",
            subtitle: "Breathtaking Beauty"
        },
        {
            image: require("@/assets/Blog/Categories/Business2.jpg"),
            title: "Business",
            subtitle: "Networking & Productivity"
        },
        {
            image: require("@/assets/Blog/Categories/Tech3.jpg"),
            title: "Technology",
            subtitle: "Discover the future"
        },
    ]

    import { useRouter } from 'vue-router';
    const router = useRouter();
    function goAllCategories(badge) {
        router.push({ name: "all-categories", params:{ idCategories: badge } })
    }
</script>

<template>
    <section class="container">
        <div v-motion :initial="{
        opacity: 0,
    }" :visibleOnce="{
        opacity: 1,
        transition: {
            duration: 1000,
        }
    }" class="container__title">
            <div></div>
            <h1 class="text__wrap">Categories</h1>
            <div></div>
        </div>
        <div v-motion :initial="{
        opacity: 0,
        y: 100
    }" :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1000,
        }
    }" class="main">
            <div @click="goAllCategories(category.title)"
            v-for="(category, index) in categories" :key="index"
            class="category">
                <div class="gradient__overlay"></div>
                <img :src="category.image" alt="">
                <div class="text">
                    <h1>{{ category.title }}</h1>
                    <p>{{ category.subtitle }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.container__title {
    width: 100%;
    margin-top: 6.75rem;
    display: flex;
    padding: 0 3rem;
}
.container__title h1 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 24px;
    margin: 0 12px;
}
.container__title div {
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 12px;
}


.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8rem;
}
.main {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    margin-top: 3rem;
    padding: 0 3rem;
}
.gradient__overlay {
    background: linear-gradient(to bottom, transparent 20%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-radius: 1.5rem;
}
.main .category {
    height: 200px;
    overflow: hidden;
    border-radius: 1.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.category:hover img {
    transform: scale(1.1);
    transition: transform .3s linear;
}
.category .text {
    z-index: 2;
    position: absolute;
    bottom: 2rem;
}
.text h1 {
    font-size: 24px;
    font-weight: 400;
}
.text p {
    color: var(--opa-gray)
}
.category img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
    transform: scale(1);
    transition: .3s linear;
}


@media only screen and (max-width: 991px) {
    .container__title {
        padding: 0 3rem;
    }
    .main {
        padding: 0 3rem;
        grid-template-columns: 1fr;
    }
} 

@media only screen and (max-width: 767px) {
    .container__title {
        padding: 0 1rem;
    }
    .main {
        padding: 0 1rem;
        grid-template-columns: 1fr;
    }
}

</style>