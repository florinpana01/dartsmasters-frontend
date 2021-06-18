<template>
  <div class="adminManager">
    <div id="content" class="mt-12">
      <postsManager v-bind:posts="posts" v-on:del-post="deletePost"/>
    </div>
    <router-link to="/admin/postcreator" class="bg-blue-600 hover: mx-4 text-white float-right px-4 py-2 rounded-md shadow-sm text-sm font-medium focus:outline-none">Create post</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsManager from '../components/events/adminScreen/PostManager.vue';
import axios from 'axios';

export default {
  name: 'AdminPostManager',
  components: {
    PostsManager,
  },
  props: ["token"],
    data() {
    return {
      posts: []
    }
  },
  methods: {
      deletePost(id){
        axios.delete(`http://localhost:9090/theater/posts/${id}`, {
        headers: {
          authorization: "Bearer" + this.token,
        }})
            .then(response => {
              this.posts = this.posts.filter(post => post.id != id);
              console.log(response);
              })
            .catch(err => alert("You need to be an administrator to delete posts! " + err));
    },
  },
  created(){
      axios.get('http://localhost:9090/dartsmasters/posts')
        .then(response => this.posts = response.data)
        .catch(err => console.log(err));
        
    }
}
</script>
