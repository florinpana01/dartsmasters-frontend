<template>
    <div>
        <div v-bind:key="post.id" v-for="post in posts">
            <PostManagerItem v-bind:post="post" v-on:del-event="$emit('del-post', post.id)" />
        </div>
    </div>
</template>

<script>
import PostManagerItem from './PostManagerItem.vue';

export default {
    name: "EventsManager",
    components: {
        PostManagerItem
    },
    props: ["events"]
}
</script>