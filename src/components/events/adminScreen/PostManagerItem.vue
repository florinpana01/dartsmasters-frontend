<template>
 <div class="m-4 p-5 shadow-xl rounded-lg border-blue-300 border-2 overflow-hidden">
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        {{post.title}}
        </h2>
        <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          {{post.content}}
        </div>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">

        <span class="sm:ml-3">
        <button @click="$emit('del-post', post.id)" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <!-- Heroicon name: check -->
            <i class="fas fa-trash -ml-1 mr-2"></i>
            Delete
        </button>
        </span>
    </div>
  </div>
 </div>
</template>

<script>
export default {
    name: "postManagerItem",
    props: ["post"],
    data(){
        return{
            //seatsUnavailable: []
        }
    },
    created(){

    }

}
</script>