<template>
  <div>
      <bookable-list-item item-title="Cheap Villa" item-content="A very Cheap Villa" v-bind:price="1000"></bookable-list-item>
        <bookable-list-item item-title="Cheap Villa 2" item-content="A very Cheap Villa2" v-bind:price="2500"></bookable-list-item>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
    components: {
        BookableListItem: BookableListItem
    }
}
</script>

<style>

</style>template

