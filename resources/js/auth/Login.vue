<template>
  <div class="w-50 m-auto">
      <div class="card card-body">
          <form>
              <div class="form-group">
                  <label for="email">E-mail</label>
                  <input type="text" name="email" placeholder="Enter yr email" class="form-control" v-model="email">
              </div>

                <div class="form-group">
                  <label for="email">Password</label>
                  <input type="password" name="password" placeholder="Enter yr password" class="form-control" v-model="password">
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block">Log in</button>

              <hr/>

              <div>
                  No account yet?
                  <router-link :to="{name: 'home'}" class="font-weight-bold">Register</router-link>
              </div>

                 <span>
                  Forgotten password?
                  <router-link :to="{name: 'home'}" class="font-weight-bold">Reset password</router-link>
              </span>
          </form>

      </div>

 </div>
</template>

<script>
export default {
    data(){
         return {
             email: null,
             password: null,
         }
    }

}
</script>

<style>

</style>
