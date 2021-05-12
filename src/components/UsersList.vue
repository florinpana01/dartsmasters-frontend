<template>
<div>
  <h1>Users List</h1>

  <div class="col-md-6">
    <h4>Users List</h4>
    <ul class="list-group">
      <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
      >
        {{ user.username }}
        <button>login</button>
      </li>
    </ul>

  </div>
</div>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      username: ""
    };
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
          .then(response => {
            this.users = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    }
  },
  mounted() {
    this.retrieveUsers();
  }

};
</script>

<style scoped>

</style>