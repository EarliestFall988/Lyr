<template>
    <div>
        <button class="text-lg text-gray-200 bg-gray-900 p-2 rounded-t w-[100%]" @click="toggleLyrics">{{ title }}</button>
       
        <Transition enter-from-class="translate-y-[-5%] opacity-0" enter-active-class="transition duration-300"
            leave-to-class="translate-y-[-5%] opacity-0" leave-active-class="transition duration-300">
        <div v-if="lyricsOpen" @toggle.stop="handleLyrics">
            <p class="overflow-x-hidden text-sm bg-gray-900 rounded-b p-2 border-t-2 border-gray-600 leading-loose" >
            <pre>{{ lyrics }}</pre>
            </p>
        </div>
        </Transition>
        <p class="text-sm text-gray-500 mx-2 mb-4">{{ credits }}</p>
    </div>
</template>

<script>

export default {

    name: "LyricMenuButton",
    props: ['title', 'credits', 'lyrics', 'id'],
    emits: ['lyricToggle'],
       methods: {
        toggleLyrics() {
            this.$emit('lyricToggle', this.id);
            this.lyricsOpen = true
        },
        handleLyrics(id)
        {
            if (id !== this.id)
            {
                this.lyricsOpen = false
            }
        }
    },
    data() {
        return {
            lyricsOpen: false,
        };
    },
}

</script>