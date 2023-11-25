<template>
  <main class="bg-black">
    <!-- <div class="fixed z-20">
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-300"
      >
        <div v-if="!menuOpen">
          <button
            @click="menuOpen = true"
            class="p-2 mr-1 w-screen text-gray-300 font-bold"
          >
            Menu
          </button>
        </div>
      </Transition>
    </div> -->
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

    <div class="pt-20 border-b border-white">
      <slot />
    </div>
    <div
      class="flex text-xs flex-col md:flex-row items-center justify-between gap-2 p-4 text-center text-white"
    >
      <p>Copyright &copy; Taylor Howell 2022 All Rights Reserved</p>
      <a href="/about">About</a>
    </div>
  </main>
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
