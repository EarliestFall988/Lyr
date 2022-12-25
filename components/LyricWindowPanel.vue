<template>
  <div class="flex flex-row justify-center items-start z-10 w-[100%] h-full">
    <div
      class="min-h-[50%] w-full flex flex-col justify-start items-start bg-gray-900 rounded-lg p-5 border-2 border-gray-700"
    >
      <div class="flex flex-row justify-end w-full">
        <button
          class="bg-red-700 w-[20%] rounded-xl text-white mb-5"
          @click="$emit('close')"
        >
          X
        </button>
      </div>
      <div class="text-2xl text-gray-200 bold mb-5 font-bold text-ellipsis">
        {{ title }}
      </div>
      <div class="text-white leading-loose text-sm italic">
        <pre>{{ lyrics }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "lyrics"],
  emits: ["close"],
};
</script>
