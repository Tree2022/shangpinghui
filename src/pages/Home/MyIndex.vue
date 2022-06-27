<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recomment />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from '../Home/ListContainer/MyIndex.vue';
import Recomment from '../Home/Recomment/MyIndex.vue';
import Rank from './Rank/MyInde.vue';
import Like from './Like/MyIndex.vue';
import Floor from './Floor/MyIndex.vue';
import Brand from './Brand/MyIndex.vue';
export default {
  components: {
    ListContainer,
    Recomment,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style scoped></style>
