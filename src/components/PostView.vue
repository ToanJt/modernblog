<script setup>

import posts from '@/posts';
import { defineProps } from 'vue';
const props = defineProps(['idPost']);

const indexPost = props.idPost-1;

</script>

<template>
    <section class="container">
        <div class="main">
            <div class="header">
                <button class="badge__card">{{ posts[indexPost].badge }}</button>
                <h1>{{ posts[indexPost].title }}</h1>
                <p class="sub__title">{{ posts[indexPost].text }}</p>
                <p class="date">{{ posts[indexPost].monthPost }} {{ posts[indexPost].dayPost }}, 2023</p>
            </div>
            <div class="image">
                <img :src="posts[indexPost].image" alt="">
            </div>
            <div class="body">
                <div class="content">
                    <div class="text__block">
                        <h1>The Business Case For Sustainability:</h1>
                        <p>Sustainable practices often lead to reduced energy and resource consumption, resulting in cost savings over time. Consumers increasingly prefer eco-friendly products and services, creating a growing market for sustainable businesses.</p>
                    </div>
                    <div class="text__block">
                        <h1>Key Components Of Sustainable Business Practices:</h1>
                        <p>Implement measures to reduce carbon emissions, conserve resources, and minimize waste. Assess and improve the sustainability of supply chains, from sourcing raw materials to distribution. Develop and promote products and services that have a minimal environmental footprint.</p>
                    </div>
                    <div class="text__block">
                        <h1>Corporate Social Responsibility (CSR):</h1>
                        <p>Invest in charitable endeavors and social initiatives that align with sustainability goals. Uphold ethical standards in dealings with employees, suppliers, and customers. Support environmental organizations and initiatives that promote conservation and sustainable development.</p>
                    </div>
                    <div class="text__block">
                        <h1>Sustainable Innovation:</h1>
                        <p>Invest in research and development to create innovative solutions that reduce environmental impact. Embrace clean technologies and practices, such as renewable energy sources and energy-efficient systems. For products that meet ethical and sustainability criteria in production.</p>
                    </div>
                    <div class="text__block hightlight">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis interdum posuere. Morbi id magna at arcu tempus ornare. Fusce mauris purus, rhoncus a sollicitudin sit amet, placerat vitae nisl. Morbi feugiat est in accumsan facilisis.</p>
                    </div>
                    <div class="text__block">
                        <h1>Conclusion:</h1>
                        <p>Sustainable business practices are not just a trend; they are a fundamental shift in the way companies operate. Embracing sustainability is not only a responsible choice but also a strategic one, as it can lead to financial savings, market competitiveness, and a positive impact on society and the environment.</p>
                    </div>
                </div>
                <div class="author">
                    <div class="author__block">
                        <img :src="posts[indexPost].authorAvatar" alt="">
                        <h1>{{ posts[indexPost].author }}</h1>
                        <p class="job">Writer</p>
                        <div class="about">
                            Marcus King is a writer with unique views.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>



.container {
    display: flex;
    justify-content: center;
    background: url("@/assets/common/GlowBlue.png") no-repeat;
    overflow: inherit;
}

.main {
    width: 80%;
    margin-top: 4.75rem;
}

.header .badge__card {
    color: white;
    font-size: .9rem;
    padding: 10px 20px;
    border: none;
    border-radius: 1.5rem;
    background: var(--primary);
    margin-bottom: 2rem;
}
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
}
.header h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    width: 80%;
}
.header .sub__title {
    color: var(--opa-gray);
    margin-bottom: 1rem;
    width: 40%;
}

.image {
    text-align: center;
}
.image img {
    height: 480px;    
    width: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
}

.body {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    margin-top: 5rem;
    margin-bottom: 6.75rem;
}

.content {
    text-align: left;
}
.content .text__block {
    margin-bottom: 3rem;
}
.content .text__block:last-child {
    margin-bottom: 0;
}
.text__block h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: .5rem;
}
.text__block p {
    color: var(--opa-gray);
    line-height: 1.5rem;
    font-weight: 500;
}

.hightlight {
    border-left: .4rem solid rgb(10, 186, 255);
    padding: .5rem 0 .5rem 1rem;
}
.hightlight p {
    color: white;
    font-size: 1.1rem;
}

/* Author Style */
.author {
    background-image: linear-gradient(to bottom, black, var(--primary));
    height: 420px;
    width: 80%;
    justify-self: end;
    border-radius: 1.5rem;
    position: sticky;
    top: 5rem;
}
.author .author__block img {
    height: 120px;
    border-radius: 50%;
    margin-top: 5rem;
}
.author__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
}
.author__block h1 {
    font-weight: 400;
    margin-top: 2rem;
}
.author__block .job {
    font-size: .9rem;
    margin-top: .5rem;
}
.author__block .about {
    color: var(--opa-gray);
    width: 60%;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
}
</style>