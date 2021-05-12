<template>
  <div class="submit-form">
    <h2>Change your credentials</h2>
    <div v-if="!submitted">
      <div class="form-group">
        <label>New username:</label>
        <input
            type="text"
            class="form-control"
            id="title"
            name="newUsername"
        />
      </div>

      <div class="form-group">
        <label>New password:</label>
        <input
            class="form-control"
            id="newPassword"
            name="newPassword"
        />
      </div>
      <div class="form-group">
        <label>Old password:*</label>
        <input
            class="form-control"
            id="oldPassword"
            required
            name="oldPassword"
        />

      </div>

      <button class="btn btn-success" @click="ButtonTest">Confirm changes</button>
    </div>

    <div v-else>
      <h4>The changes have been saved!</h4>
    </div>
  </div>
</template>

<script>
//import UserDataService from "../services/UserDataService";

export default {
  name: "credentials",
  data()
  {
    return {
      submitted : false
    }
  },

  methods: {
      ButtonTest()
      {
        this.submitted = true;
    }
    }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>