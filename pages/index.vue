<template>
  <div class="text-white ">
    <PageHeader title="Welcome" desc="Find lyrics to your music below" />
    <div v-for="mus in music" :key="mus.id">
      <LyricMenuButton :title="mus.title" :credits="mus.credits" :lyrics="mus.lyrics" />
    </div>

  </div>
</template>

<script >
import PageHeader from '../components/PageHeader.vue'
import LyricMenuButtonVue from '~~/components/LyricMenuButton.vue';
export default {
  components: [PageHeader, LyricMenuButtonVue],
  data() {
    return {
      music: [
        {
          id: 0,
          title: "Away in a Manger",
          credits: "Bobby Womack",
          lyrics: "[Verse 1]\nAway in a manger, no crib for a bed\nThe little Lord Jesus laid down his sweet head;\nThe stars in the sky looked down where he lay\nThe little Lord Jesus asleep in the hay\n\n[Verse 2]\nThe cattle are lowing, the baby awakes\nBut little Lord Jesus, no crying he makes\nI love Thee, Lord Jesus, look down from the sky\nAnd stay by my cradle 'til morning is nigh\n\n\n[Verse 3]\nBe near me, Lord Jesus, I ask Thee to stay\nClose by me forever, and love me, I pray\nBless all the dear children in thy tender care\nAnd fit us for heaven to live with Thee there",
          drawerOpen: false,
        },
        {
          id: 1,
          title: "some lyric 2",
          credits: "some credits",
          lyrics: "some lyrics",
          drawerOpen: false,
        },
      ]
    }
  }
}

</script>
