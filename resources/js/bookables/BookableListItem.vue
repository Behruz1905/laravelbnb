<template>
  <div class="card w-100">
      <div class="card-body">

          <h5 class="card-title">{{ itemTitle }}</h5>
          <p class="card-text">{{ itemContent }}</p>
      </div>
      <h1></h1>

  </div>
</template>

<script>
export default {
    props:{"itemTitle": String,"itemContent": String,"price": Number}


}
</script>

<style>

</style>template
