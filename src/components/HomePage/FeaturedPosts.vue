<script setup>
const content = [
    {
        background: require("@/assets/Home/featured/Culture2.jpg"),
        title: "The Digital Age",
        text: "Cultural heritage encompasses the tangible and intangible aspects of a society's identity. It includes art, architecture, folklore, language, music, and rituals, among others. Preserving cultural heritage is vital as it connects us to our past, shapes our present, and enriches our future. Globalization has brought cultures closer together, leading to increased interaction and exchange. However, it has also raised concerns about the homogenization of cultures, as the dominant global culture can overshadow and erode unique traditions and practices. Cultural heritage faces various threats, including urbanization, natural disasters, climate change, and political conflicts. Cultural artifacts and sites are often vulnerable to destruction, theft, or neglect. Technology, particularly digital tools, has become an invaluable asset in the preservation of cultural heritage. High-resolution imaging, 3D scanning, and digital archiving allow for the comprehensive documentation of artifacts, artworks, and historical sites. This digital preservation ensures that even if the physical artifacts are lost or damaged, their essence lives on in a digital form. Cultural heritage is a shared treasure that defines who we are and where we come from. In the digital age, technology serves as a double-edged sword, both posing challenges and providing solutions for its preservation. By harnessing the power of digital tools, we can document, protect, and celebrate our diverse cultural heritage ensuring...",
        author: "Emily Davis",
        authorAvatar: require("@/assets/common/authors/author-2.jpg"),
        badge: "Culture",
        monthPost: "Oct",
        dayPost: "03",
        timeRead: 6,
    },
    {
        background: require("@/assets/Home/featured/Tech2.jpg"),
        title: "The 5G Technology",
        text: "Cultural heritage encompasses the tangible and intangible aspects of a society's identity. It includes art, architecture, folklore, language, music, and rituals, among others. Preserving cultural heritage is vital as it connects us to our past, shapes our present, and enriches our future. Globalization has brought cultures closer together, leading to increased interaction and exchange. However, it has also raised concerns about the homogenization of cultures, as the dominant global culture can overshadow and erode unique traditions and practices. Cultural heritage faces various threats, including urbanization, natural disasters, climate change, and political conflicts. Cultural artifacts and sites are often vulnerable to destruction, theft, or neglect. Technology, particularly digital tools, has become an invaluable asset in the preservation of cultural heritage. High-resolution imaging, 3D scanning, and digital archiving allow for the comprehensive documentation of artifacts, artworks, and historical sites. This digital preservation ensures that even if the physical artifacts are lost or damaged, their essence lives on in a digital form. Cultural heritage is a shared treasure that defines who we are and where we come from. In the digital age, technology serves as a double-edged sword, both posing challenges and providing solutions for its preservation. By harnessing the power of digital tools, we can document, protect, and celebrate our diverse cultural heritage ensuring...",
        author: "Marcus King",
        authorAvatar: require("@/assets/common/authors/author-3.jpg"),
        badge: "Technology",
        monthPost: "Oct",
        dayPost: "03",
        timeRead: 3,
    }
]
</script>

<template>
    <section class="container">
        <div class="container__title">
            <h1>Featured Posts</h1>
            <div></div>
        </div>
        <div class="main">
            <div class="img__box" v-for="(item, index) in content" :key="index">
                <div class="gradient__overlay">
                    <div class="star__icon">
                        <img src="@/assets/Home/header_slide/star.png" alt="">
                    </div>
                    <div class="text__info">
                        <h3>{{ item.title }}</h3>
                    </div>
                </div>
                <img class="img__slide" :src="item.background" alt="">
                <div class="side__bar--right">
                    <div class="text__content">
                        <p>{{ item.text }}</p>
                        <p>{{ item.text }}</p>
                        <div class="overlay"></div>
                    </div>
                    <div class="author">
                        <img class="img__small" :src="item.authorAvatar" alt="">
                        <p>{{ item.author }}</p>
                    </div>
                    <div class="post__info">
                        <div>
                            <p>{{ item.monthPost }}</p>
                            <p>{{ item.dayPost }}</p>
                        </div>
                        <div>
                            <p>•</p>
                        </div>
                        <div>
                            <p>{{ item.timeRead }} {{ item.timeRead > 1 ? "times" : "time" }}</p>
                            <p>read</p>
                        </div>
                    </div>
                    <div class="badge__card">
                        <p>{{ item.badge }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.container__title {
    
    display: flex;
    width: 94%;
}
.container__title h1 {
    font-size: 2rem;
    font-weight: 400;
    width: 18%;
    text-align: left;
    line-height: 24px;
}
.container__title div {
    border-bottom: 1px solid gray;
    width: 82%;
    margin-bottom: 12px;
}

.main {
    width: 94%;
    margin-top: 3rem;
    margin-bottom: 2rem;
}

.img__box {
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 1.2rem;
    position: relative;
}

.img__box>img {
    height: 500px;
    object-fit: cover;
    border-bottom-left-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    display: flex;
    justify-content: center;
    flex: 2.5;
}

.gradient__overlay {
    background: linear-gradient(to bottom, transparent 50%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1.5rem;
}

.text__info {
    position: absolute;
    bottom: 2.5rem;
    width: 966.86px;
    margin-left: auto;
    margin-right: auto;
}

.text__info h3 {
    font-size: 1.8rem;
    font-weight: 400;
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

.img__box .side__bar--right {
    background-color: var(--primary);
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    flex: 1;
}

.side__bar--right .text__content {
    overflow: hidden;
    text-align: left;
    line-height: 24px;
    height: 290px;
    position: absolute;
    top: 5rem;
    left: 2rem;
    right: 2rem;
    font-weight: 300;
}

.text__content p {
    display: flex;
    flex-direction: column;
    animation: scroll 35s linear infinite;
    will-change: transform;
}

@keyframes scroll {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(calc(-373px * 2))
    }
}

.overlay {
    background-image: linear-gradient(to bottom, transparent 20%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.side__bar--right .author {
    display: flex;
    align-items: center;
    margin-left: 2rem;
}

.side__bar--right .author img {
    border-radius: 50%;
}

.side__bar--right .post__info {
    display: flex;
    grid-column-gap: .5rem;
    margin: 1rem 0 2.5rem 2rem;
}

.side__bar--right .post__info {
    right: 2rem;
}

.side__bar--right .author,
.side__bar--right .post__info div {
    display: flex;
    grid-column-gap: .5rem;
}

.post__info p {
    color: var(--opa-gray);
}

.badge__card {
    position: absolute;
    top: 2rem;
    left: -2.5rem;
    background: var(--blue-black);
    padding: 6px 10px;
    border-radius: 8px;
}</style>