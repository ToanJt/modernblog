<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    content: Object
});

</script>

<template>
    <section>
        <h1>POST</h1>
        <p>{{ props.content }}</p>
    </section>
</template>