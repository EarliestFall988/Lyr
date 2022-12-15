<template>
    <div>
        <button class="text-lg text-gray-200 bg-gray-900 p-2 rounded" @click="toggleLyrics">{{ title }}</button>
        <p class="text-sm text-gray-500 mx-2 mb-4">{{ credits }}</p>
        <Transition enter-from-class="translate-y-[-5%] opacity-0" enter-active-class="transition duration-30"
            leave-to-class="translate-y-[-5%] opacity-0" leave-active-class="transition duration-30">
        <div v-if="lyricsOpen">
            <p class="overflow-x-hidden text-sm bg-gray-900 rounded p-1 my-3 border-[1px] border-gray-600" >
            <pre>{{ lyrics }}</pre>
            </p>
        </div>
        </Transition>
    </div>
</template>

<script>

export default {

    name: "LyricMenuButton",
    props: ['title', 'credits', 'lyrics'],
    data() {
        return {
            lyricsOpen: false
        }
    },
    methods: {
        toggleLyrics() {
            this.lyricsOpen = !this.lyricsOpen;
        }
    },
}

</script>