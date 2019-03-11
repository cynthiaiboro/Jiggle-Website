<template>
  <div>
    <Header/>
    <OurStory/>
    <OurTeam/>
  </div>
</template>

<script>
import aboutHeader from '../components/about/header'
import OurStory from '../components/about/our-story'
import OurTeam from '../components/about/our-team'

export default {
  components: {
    Header: aboutHeader,
    OurStory,
    OurTeam
  }
}
</script>

<style scoped>
</style>
