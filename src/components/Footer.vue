<template>
    <section v-motion :initial="{
        opacity: 0,
        y: 100
    }" :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
            duration: 200,
        }
    }" class="base__footer">
        <section class="container">
        <div class="footer">
            <div class="contact__info">
                <img src="@/assets/common/Logo.png" alt="">
                <p>Pushing the the boundaries of the blogosphere.</p>
                <ul>
                    <li><img src="@/assets/common/facebook.png" alt=""></li>
                    <li><img src="@/assets/common/instagram.png" alt=""></li>
                    <li><img src="@/assets/common/twitter.png" alt=""></li>
                    <li><img src="@/assets/common/youtube.png" alt=""></li>
                </ul>
            </div>
            <div class="list__of__categories">
                <div class="categories">
                    <p>Main</p>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Authors</li>
                        <li>Author Single</li>
                        <li>Shop</li>
                        <li>Shop Single</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="categories">
                    <p>Other Pages</p>
                    <ul>
                        <li>Blog</li>
                        <li>Blog Single</li>
                        <li>Categories</li>
                        <li>Categories Single</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div class="categories">
                    <p>Utilities</p>
                    <ul>
                        <li>Style Guide</li>
                        <li>Licenses</li>
                        <li>Changelog</li>
                        <li>Instructions</li>
                        <li>404</li>
                        <li>Password</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyring__info">
            <p>© 2023 The Modern Blog. All Rights Reserved.</p>
            <div class="info">
                <p>Build by Toanle</p>
                <p>Powered by Vue</p>
            </div>
        </div>
    </section>
    </section>
</template>

<style scoped>
.base__footer {
    background-color: var(--blue-black);
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem;
    padding-top: 5rem;
    width: 100%;
}

.footer {
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(120, 109, 255, .3);
    padding-bottom: 1.5rem;
}

.contact__info {
    flex: 1;
    text-align: left;
}
.contact__info > img {
    height: 3.5rem;
}
.contact__info > p {
    color: var(--opa-gray);
}
.contact__info > ul {
    margin-top: 1rem;
    display: flex;
    grid-column-gap: 1.5rem;
}
.contact__info > ul li img {
    height: 20px;
}

.list__of__categories {
    flex: 1;
    text-align: left;
    display: flex;
}
.list__of__categories .categories {
    flex: 1;
}
.categories p {
    margin-bottom: 1rem;
    font-weight: 500;
}
.categories ul li {
    margin-bottom: 1.5rem;
    color: var(--opa-gray)
}


.copyring__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--opa-gray);
    margin-top: 2.5rem;
    margin-bottom: 5rem;
}
.copyring__info div {
    display: flex;
    justify-content: space-between;
}
.copyring__info div p:first-child {
    padding-right: 2rem;
}


@media only screen and (max-width: 767px) {
    .footer {
        flex-direction: column;
    }
    .contact__info {
        margin-bottom: 5rem;
    }
    .list__of__categories {
        margin-bottom: 3rem;
        grid-gap: 3rem;
    }
}

@media only screen and (max-width: 479px) {
    .contact__info {
        text-align: center;
    }
    .contact__info > ul {
        justify-content: center;
    }
    .list__of__categories {
        flex-direction: column;
        align-items: center;
    }
    .list__of__categories .categories {
        text-align: center;
    }
    .categories > p {
        font-size: 1.2rem;
        font-weight: 500;
    }
    .categories ul li {
        font-size: 1.1rem;
    }

    .copyring__info {
        flex-direction: column;
    }
    .copyring__info > p {
        font-size: 1rem;
    }
    .copyring__info .info {
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }
    .copyring__info div p {
        padding: 0 !important;
    }
}
</style>