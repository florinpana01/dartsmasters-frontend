<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">DartsMasters</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/users" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/rules" class="nav-link">Darts rulebook</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/credentials" class="nav-link">My credentials</router-link>
      </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">My profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">DartsPosts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
      </div>
    </nav>


    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "app"
};
</script>