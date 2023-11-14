<template>
    <section class="container">
        <div class="main">
            <div class="container__title">
                <div></div>
                <h1 class="text__wrap">Contact Us</h1>
                <div></div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur
                gravida, neque sem tristique.
            </p>
            <form class="form">
                <div class="name__email">
                    <div class="name">
                        <label for="name">Name</label>
                        <input placeholder="John Doe" id="name" type="text">
                    </div>
                    <div class="email">
                        <label for="email">Email</label>
                        <input placeholder="example@email.com" id="email" type="email">
                    </div>
                </div>
                <div class="phone__more">
                    <div class="phone">
                        <label for="phone">Phone Number</label>
                        <input placeholder="(123) - 456 - 789" id="phone" type="text">
                    </div>
                    <div class="more">
                        <label for="select">How Did You Hear About Us?</label>
                        <div class="select">
                            <select name="" id="select">
                                <option value="">Socials</option>
                                <option value="">Search</option>
                                <option value="">Referral</option>
                                <option value="">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <label for="mess">Message</label>
                    <textarea placeholder="Your Message" name="" id="mess" cols="30" rows="7"></textarea>
                </div>
                <button>Send Message</button>
            </form>
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
    margin-top: 6.75rem;
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

.form {
    width: 70%;
    text-align: left;
    font-size: .9rem;
    color: var(--opa-gray);
}

.form input,
.form textarea {
    background-color: var(--light-black);
    border: none;
    padding: 1.5rem 1rem;
    color: white;
    outline: none;
    border-radius: 1rem;
    margin-top: .7rem;
    font-size: .9rem;
}
.form textarea {
    padding-top: .5rem;
    margin-bottom: 1.5rem;
}

.form .select {
    background-color: var(--light-black);
    padding-right: 1rem;
    display: flex;
    align-items: center;
    margin-top: .7rem;
    border-radius: 1rem;
}
.form select {
    width: 100%;
    background-color: var(--light-black);
    border: none;
    padding: 1.5rem 1rem;
    color: white;
    outline: none;
    border-radius: 1rem;
    font-size: 1rem;
}

.form .name__email,
.form .phone__more {
    display: flex;
    grid-column-gap: 2rem;
    margin-bottom: 1.5rem;
}

.form .name,
.form .email,
.form .phone,
.form .more,
.form .message {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.form button {
    border: none;
    background-color: var(--primary);
    color: var(--opa-gray);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 1.2rem 1.4rem;
    padding-bottom: 1.1rem;
    border-radius: 2rem;
    transition: .5s linear;
}
.form button:hover {
    color: white;
    background-color: var(--blue-black);
    transition: .5s linear;
    cursor: pointer;
}

@media only screen and (max-width: 767px) {
    .form .name__email {
        flex-direction: column;
    }
    .name__email .email {
        margin-top: 1.5rem;
    }
    .form .phone__more {
        flex-direction: column;
    }
    .phone__more .more {
        margin-top: 1.5rem;
    }
}
</style>