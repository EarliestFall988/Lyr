<template>
  <div class="fixed">
    <Transition enter-from-class="opacity-0" enter-active-class="transition duration-300">
      <div v-if="!menuOpen">
        <button
          @click="menuOpen = true"
          class="bg-gray-900 p-2 mr-1 w-screen text-white font-bold"
        >
          Menu
        </button>
      </div>
    </Transition>
  </div>
  <div class="fixed">
    <Transition
      enter-from-class="translate-y-[-150%] opacity-0"
      enter-active-class="transition duration-300"
      leave-to-class="translate-y-[-150%] opacity-0"
      leave-active-class="transition duration-300"
    >
      <nav
        v-if="menuOpen"
        class="bg-gray-900 flex flex-row justify-around w-screen py-5 px-2"
      >
        <!-- <NuxtLink class="font-bold text-white" to="/">Lyr</NuxtLink> -->
        <NuxtLink class="text-white" to="/">Lyrics</NuxtLink>
        <NuxtLink class="text-white" to="/about">About</NuxtLink>
        <button class="text-white" @click="menuOpen = false">X</button>
      </nav>
    </Transition>
  </div>

  <div class="py-10 mx-5">
    <slot />
  </div>
</template>

<script>
import navButton from "../components/NavButton";

export default {
  components: [navButton],
  data() {
    return {
      menuOpen: false,
      btns: [
        {
          id: 0,
          name: "Welcome",
          location: "/",
        },
        {
          id: 0,
          name: "About",
          location: "/about",
        },
      ],
    };
  },

  methods: {
    ToggleMenuOpen() {
      menuOpen = !menuOpen;
    },
  },
};
</script>
