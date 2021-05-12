<template>
  <div>
    <div class="container">
      <div class = "row">
      <h1>Login</h1>
      </div>
      <div class = "row">
        <div class="col-md-3"></div>
        <div class="col-md-6"><form>
          <div class="form-group">
            <label>Username:</label>
            <input type="text" class="form-control"/>
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control"/>
          </div>
          <button class="btn btn-primary btn-block">Login</button>
        </form></div>
        <div class="col-md-3"></div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>