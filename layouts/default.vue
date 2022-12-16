<template>
  <div class="fixed">
    <Transition enter-from-class="opacity-0" enter-active-class="transition duration-300">
      <div v-if="!menuOpen">
        <button
          @click="menuOpen = true"
          class="bg-gray-900 p-2 mr-1 w-screen text-gray-300 rounded-b-lg font-bold border-b-2 border-gray-600"
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
        class="bg-gray-900 flex flex-row justify-around w-screen py-5 px-2 border-b-2 border-gray-600 rounded-b-lg"
      >
        <!-- <NuxtLink class="font-bold text-white" to="/">Lyr</NuxtLink> -->
        <NuxtLink class="text-white" to="/">Lyrics</NuxtLink>
        <NuxtLink class="text-white" to="/about">About</NuxtLink>
        <button
          class="text-white border-2 border-red-900 px-2 rounded"
          @click="menuOpen = false"
        >
          Close
        </button>
      </nav>
    </Transition>
  </div>

  <div class="pt-[4em] pb-[1%] px-5 bg-gray-800">
    <slot />
  </div>
  <div
    class="py-2 text-center text-white bg-gray-900 rounded-t-lg border-t-2 border-gray-600 border-b-2 border-gray-600"
  >
    <p>Copyright &copy; Taylor Howell 2022 All Rights Reserved</p>
    <a href="/about">About</a>
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
