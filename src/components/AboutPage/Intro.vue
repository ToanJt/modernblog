<template>
    <section class="container">
        <div class="intro__text">
            <h1>Pushing the the boundaries of the blogosphere</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div class="intro__space">
            <img src="@/assets/About/Nature2.jpg" alt="" />
            <img src="@/assets/About/AbstractV.jpg" alt="" />
            <img src="@/assets/About/Nature.jpg" alt="" />
            <img src="@/assets/About/AstroV.jpg" alt="" />
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, transparent 40%, var(--dark-blue) 90%), url("@/assets/common/GlowBlue.png");
    margin-bottom: 5rem;
}

.intro__text {
    margin-top: 6.75rem;
    max-width: 38%;
}

.intro__text h1 {
    font-size: 40px;
    line-height: 58px;
    font-weight: 400;
    margin-bottom: 1rem;
}
.intro__text p {
    line-height: 24px;
    color: var(--opa-gray);
}

.intro__space {
    max-width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
}

.intro__space img {
    height: 500px;
    width: 25%;
    object-fit: cover;
    border-radius: 24px;
    margin-left: -4rem;
}

.intro__space img:first-child {
    margin-left: 0;
}

.intro__space img:nth-child(2n) {
    margin-top: 5rem;
}


@media only screen and (max-width: 991px) {
    .intro__text {
        max-width: 60%;
    }
    .intro__space {
        max-width: 100%;
    }
}
</style>