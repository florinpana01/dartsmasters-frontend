<template>
  <div class="content">
    <center>Create a post!</center>
    <hr>
    <hr>

    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit="addPost">
        <div class="shadow-xl overflow-hidden sm:rounded-md bg-blue-600">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-8 gap-12">
              <div class="col-span-8">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Title</label>
                <input v-model="title" type="text" id="first_name" class="border-black border-2 p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>     

              <div class="col-span-8">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Content</label>
                <textarea v-model="content" maxlength="250" id="email_address" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                <label class="text-xs text-red-500">*You can only add 250 characters to the content of a post.</label>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <input class="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white border-white border-2 ease-in duration-200 bg-blue-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="Create Post" type="submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
    name: "PostCreator",
    data(){
        return{
            title: null,
            content: null,
        }
    },
    methods: {
        addPost(e){
            e.preventDefault();

            const newPost = {
                title: this.title,
                content: this.content,
            }

            let inputs = [this.title, this.content];

            for(var i = 0; i < inputs.length; i++){
                if(!inputs[i]){
                    this.$emit('add-post', null);
                    return false;
                }
            }

            this.title = null;
            this.content = null;

            this.$emit('add-post', newPost);
            this.number = "";
        }
    }
}
</script>