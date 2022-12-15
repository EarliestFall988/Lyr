<template>
    <h1 class="text-3xl">
        {{title}}
    </h1>
    <p class="text-gray-300">{{desc}}</p>
    <div class="bg-gray-700 w-full h-[0.125em] my-2 "/>

</template>

<script setup>

const props = defineProps(['title', 'desc'])

</script>