<script setup>
import { ref } from 'vue'
const members = [
    {
        active: ref(true),
        author: "Ayana Carter",
        avatar: require("@/assets/common/authors/author-3.jpg"),
        badge: "Writer",
        info: "Ayana Carter is a dedicated writer for over 8 years.",
        profileLink: "",
    },

    {
        active: ref(false),
        author: "Emily Davis",
        avatar: require("@/assets/common/authors/author-2.jpg"),
        badge: "Blogger",
        info: "Emily Davis, is a seasoned blogger for over 5 years.",
        profileLink: "",
    },
    {
        active: ref(false),
        author: "Marcus King",
        avatar: require("@/assets/common/authors/author-4.jpg"),
        badge: "Writer",
        info: "Marcus King is a writer with unique views.",
        profileLink: "",
    },
    {
        active: ref(false),
        author: "Jason Williams",
        avatar: require("@/assets/common/authors/author-1.jpg"),
        badge: "Vlogger",
        info: "Jason Williams brings a fresh and insightful voice..",
        profileLink: "",
    },
]
function getAuthor(author, index) {
    currentIndex.value = index;
    members.forEach((author) => {
        author.active.value = false;
    })
    author.active.value = true;
}
const currentIndex = ref(0);
</script>

<template>
    <section class="container">
        <div class="main">
            <div class="container__title">
                <div></div>
                <h1 class="text__wrap">Our Team</h1>
                <div></div>
            </div>
            <div class="team">
                <div class="info__member">
                    <div class="avatar">
                        <div class="gradient__overlay"></div>
                        <img :src="members[currentIndex].avatar" alt="">
                    </div>
                    <div class="info">
                        <h1>{{ members[currentIndex].author }}</h1>
                        <div class="badge">{{ members[currentIndex].badge }}</div>
                        <div class="info__text">
                            {{ members[currentIndex].info }}
                        </div>
                        <ul class="socials">
                            <li><img src="@/assets/common/facebook.png" alt=""></li>
                            <li><img src="@/assets/common/instagram.png" alt=""></li>
                            <li><img src="@/assets/common/twitter.png" alt=""></li>
                            <li><img src="@/assets/common/youtube.png" alt=""></li>
                        </ul>
                        <p class="view__profile">View Profile</p>
                    </div>
                </div>
                <div class="members">
                    <div @click="getAuthor(member, index)"
                        v-for="(member, index) in members" :key="index" class="member">
                        <div :class="{ activeAuthor: member.active.value }" class="background">
                            <div class="author">
                                <img :src="member.avatar" alt="">
                                <p>{{ member.author }}</p>
                            </div>
                            <div class="badge">
                                <p>{{ member.badge }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.activeAuthor {
    background: var(--blue-black) !important;
}

.container {
    background: linear-gradient(to bottom, transparent 40%, var(--dark-blue) 90%), url("@/assets/common/GlowBlue.png")
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container__title {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    width: 60%;
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

/* Our Team */
.info__member {
    display: flex;
}

.info__member .avatar {
    height: 420px;
    position: relative;
}

.gradient__overlay {
    background: linear-gradient(to bottom, transparent 20%, var(--primary));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
}

.avatar img {
    height: 100%;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
}

.info__member .info {
    height: 420px;
    width: 420px;
    background-color: var(--blue-black);
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 4rem;
}

.info .badge {
    background-color: var(--primary);
    padding: 1px 14px;
    border-radius: 6px;
    line-height: 30px;
    margin-top: 1.5rem;
}

.info .info__text {
    max-width: 70%;
    margin-top: 1.5rem;
    color: var(--opa-gray);
}

.info ul {
    display: flex;
    margin-top: 1.5rem;
}

.info ul li {
    width: 50px;
    height: 50px;
    background-color: #161b2b;
    margin: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.info ul li img {
    height: 20px;
}
.info ul li:hover {
    cursor: pointer;
}

.info .view__profile {
    margin-top: 1.5rem;
    transition: .3s linear;
}
.info .view__profile:hover {
    letter-spacing: 2px;
    transition: .3s linear;
    cursor: pointer;
}

.members {
    display: flex;
    grid-column-gap: 1rem;
    margin-top: 1.5rem;
}

.members .member {
    border-radius: 24px;
    position: relative;
    height: 180px;
    width: 198px;
    background: var(--blue-black);
    overflow: hidden;
}
.member .background {
    width: 100%;
    height: 100%;
    padding: 2rem 2.5rem 2rem 1rem;
    background: linear-gradient(to bottom, transparent, var(--primary));
}

.members .member .author {
    display: flex;
    align-items: center;
}

.member .author img {
    height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
}

.member .author p {
    white-space: nowrap;
}

.members .member .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    transform: rotate(90deg);
    height: 32px;
    width: 80px;
    position: absolute;
    bottom: auto;
    bottom: 2.5rem;
    border-radius: 4px;
    left: -0.5rem;
    right: 2rem;
    overflow: hidden;
}

</style>
