<script>
import HeaderSlide from "@/components/HomePage/HeaderSlide"
import LatestPosts from "@/components/HomePage/LatestPosts"
import FeaturedPosts from "@/components/HomePage/FeaturedPosts.vue";
import Categories from "@/components/HomePage/Categories.vue"
import Contact from "@/components/HomePage/Contact.vue"

export default {
    components: {
        HeaderSlide,
        LatestPosts,
        FeaturedPosts,
        Categories,
        Contact,
    }
}
</script>

<template>
    <section>
        <HeaderSlide />
        <LatestPosts />
        <FeaturedPosts />
        <Categories />
        <Contact />
    </section>
</template>