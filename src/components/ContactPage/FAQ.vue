<script setup>
import { ref } from 'vue'
function toggleAns(quest) {
    quest.active.value = !quest.active.value;
}

const questions = [
    {
        active: ref(false),
        quest: "How Can I Stay Engaged With Modern Blog On Social Media?",
        reply: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum
                            tristique.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                            libero
                            vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.Nunc ut sem vitae
                            risus
                            tristique posuere.`
    },
    {
        active: ref(false),
        quest: "Are There Advertising Opportunities On Modern Blog?",
        reply: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum
                            tristique.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                            libero
                            vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.Nunc ut sem vitae
                            risus
                            tristique posuere.`
    },
    {
        active: ref(false),
        quest: "Can I Share Your Blog Content On Social Media Or Other Websites?",
        reply: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum
                            tristique.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                            libero
                            vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.Nunc ut sem vitae
                            risus
                            tristique posuere.`
    },
    {
        active: ref(false),
        quest: "How Can I Contact The Modern Blog Team?",
        reply: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum
                            tristique.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                            libero
                            vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.Nunc ut sem vitae
                            risus
                            tristique posuere.`
    },
    {
        active: ref(false),
        quest: "Do You Have A Comment Policy?",
        reply: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum
                            tristique.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                            libero
                            vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.Nunc ut sem vitae
                            risus
                            tristique posuere.`
    },
]

</script>

<template>
    <section class="container">
        <div class="main">
            <div class="container__title">
                <div></div>
                <h1 class="text__wrap">FAQ</h1>
                <div></div>
            </div>
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur
                gravida, neque sem tristique.
            </p>
            <div class="questions">
                <div
                v-for="(quest, index) in questions" :key="index"
                @click="toggleAns(quest)" class="question">
                    <div class="title">
                        <p>{{ quest.quest }}</p>
                        <img src="@/assets/common/cross-button.png" alt="">
                    </div>
                    <div :class="{ show__ans: quest.active.value }" class="reply">
                        <p>{{ quest.reply }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6.75rem;
}

.container__title {
    width: 70%;
    margin-top: 2.75rem;
    display: flex;
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

.main>p {
    width: 42%;
    color: var(--opa-gray);
    margin-top: 2rem;
    margin-bottom: 3rem;
}

.questions {
    width: 70%;
}

.questions .question {
    display: flex;
    flex-direction: column;
    background-color: #211e29;
    border-radius: .5rem;
    border: 1px solid #332f3d;
    cursor: pointer;
    margin-bottom: 1.5rem;
}

.questions .question .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
}

.question .title img {
    height: 30px;
    transform: rotate(45deg);
    filter: invert();
}

.show__ans {
    height: 90px !important;
    opacity: 1 !important;
    transition: .3s linear;
    text-align: center;
}

.question .reply {
    height: 0;
    padding: 0rem 1rem 0 1rem;
    font-size: 14px;
    color: var(--opa-gray);
    opacity: 0;
    transition: .3s linear;
    overflow: hidden;
}
@media only screen and (max-width: 767px) {
    .container__title {
        width: 100%;
        padding: 0 4rem;
    }
    .main > p {
        width: 60%;
    }
    .show__ans {
        height: 100px !important;
    }
    .questions {
        width: 100%;
        padding: 0 4rem;
    }
    .questions .question .title p {
        text-align: left;
    }
}

</style>