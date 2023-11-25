<template>
    <div>
        <button class="p-4 flex bg-gray-800 items-center justify-between border-x border-t border-gray-4 w-full"
            @click="toggleLyrics">
            <div>
                <p class="text-2xl text-left font-semibold text-gray-200">
                    {{ title }}
                </p>
                <p class="text-sm text-left text-gray-400">
                    {{ credits }}
                </p>
            </div>
            <p class="-rotate-90 text-2xl font-bold text-gray-400">
                {{ lyricsOpen ? '>' : '<' }} </p>
        </button>

        <Transition enter-from-class="translate-y-[-5%] opacity-0" enter-active-class="transition duration-300"
            leave-to-class="translate-y-[-5%] opacity-0" leave-active-class="transition duration-300">
            <div v-if="lyricsOpen" class="p-4">
                <div class="overflow-x-auto">
                    <div v-if="size == 1" class="w-full py-4">
                        <p class="text-xs">
                        <pre>{{ lyrics }}</pre>
                        </p>
                    </div>
                    <div v-if="size == 2" class="w-full">
                        <p class=" text-lg">
                        <pre>{{ lyrics }}</pre>
                        </p>
                    </div>
                    <div v-if="size == 3" class="w-full">
                        <p class="text-2xl">
                        <pre>{{ lyrics }}</pre>
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>

export default {

    name: "LyricMenuButton",
    props: ['title', 'credits', 'lyrics', 'size'],
    data() {
        return {
            lyricsOpen: false
        }
    },
    methods: {
        toggleLyrics() {
            this.lyricsOpen = !this.lyricsOpen;
        },
    },
}

</script>