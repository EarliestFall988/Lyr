<template>
  <NuxtLink
    class="h-5 text-white hover:bg-blue-700 rounded m-0.5 px-5 mx-2 text-2xl"
    :to="to"
  >
    {{ title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  to: String,
});
</script>

<style></style>
