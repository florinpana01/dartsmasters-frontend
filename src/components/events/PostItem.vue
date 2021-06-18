<template>
    <div class="inline-block event-item w-2/3 shadow-xl bg-white rounded-b-lg text-center">
        <h1 class="bg-blue-600 text-white text-2xl font-bold">{{post.title}}</h1>
        <div class="p-4 bg-white rounded-b-lg">
            <p class="text-justify p-5 bg-white">{{post.content}}</p>
            <div class="flex items-end h-12 bg-white">
            </div>
        </div>  
    </div><br />
</template>

<script>
export default {
    name: "PostItem",
    props: ["post", "value"]
}
</script>