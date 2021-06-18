<template>
  <div class="flex items-center justify-center h-screen">
    <PostCreator v-on:add-post="addPost" />
  </div>
</template>

<script>
import PostCreator from '../components/events/PostCreation/PostCreator';
import axios from 'axios';

export default {
  name: "CreatePost",
  data(){
    return{
      events: []
    }
  },
  components: {
    PostCreator
  },
  methods: {
    getCookie(name) {
      const value = document.cookie;
      const parts = value.split(name);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    addEvent(newPost){

      if(newPost == null){
        alert("Please fill in all the fields.");
      }

      const { title, content } = newPost;
      var cookie = this.getCookie("Token");

      axios.post('http://localhost:9090/dartsmasters/posts', {
        title,
        content,
        
      }, {
        headers: {
          authorization: "Bearer" + cookie,
        }})
      .then(res => alert(res.data + "Post created successfully!"))
      .catch(err => alert("There has been an error! " + err));
    }
  },
}
</script>
