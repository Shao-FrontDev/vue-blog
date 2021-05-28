<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="item"
      v-for="(item, index) in sampleBlogPost"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: "Learing the Vuejs in the future",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "Hello world",
          blogHTML: "Hello world",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "Hello world",
          blogHTML: "Hello world",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
