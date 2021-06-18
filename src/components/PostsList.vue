<template>
  <div class="flex items-center justify-center h-screen">
    <div id="content" class="w-2/3">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 bg-blue-600">
          <h3 class="text-lg leading-6 font-medium text-white">
            Darts Posts
          </h3>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div
                class="border-b-2 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Title:</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{post.title}}
              </dd>
            </div>
            <div
                class="border-b-gray-100 border-b-2 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Content:</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{post.content}}
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
  name: "PostList",
  components: {},
  data() {
    return {
      post: [],
    };
  },
  created() {
      axios
          .get("http://localhost:9090/dartsmasters/posts")
          .then(
              response => {
                this.post = response.data;
              }
          )
          .catch((err) => console.log(err));
  },
};
</script>