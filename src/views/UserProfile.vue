<template>
  <div class="flex items-center justify-center h-screen">
    <div id="content" class="w-2/3">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 bg-blue-600">
          <h3 class="text-lg leading-6 font-medium text-white">
            Account Information
          </h3>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div
              class="border-b-2 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{user.name}}
              </dd>
            </div>
            <div
              class="border-b-gray-100 border-b-2 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Role</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{user.role}}
              </dd>
            </div>
            <div
              class="border-b-gray-100 border-b-2 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{user.email}}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "UserProfile",
  components: {},
  props: ["token", "parsedToken"],
  data() {
    return {
      user: []
    };
  },
  created() {
    if (this.token != null) {    
      var userId = this.parsedToken.sub;

      axios
        .get("http://localhost:9090/dartsmasters/users/" + userId, {
          headers: {
            authorization: "Bearer" + this.token,
          },
        })
        .then(
          response => {
              this.user = response.data;
          }
        )
        .catch((err) => console.log(err));
    }
  },
};
</script>