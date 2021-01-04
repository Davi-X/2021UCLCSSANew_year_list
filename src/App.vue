<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
  };
</script>
<style>
  #app {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: 'Noto Serif', 'Noto Serif CJK SC', 'Noto Serif CJK', 'Source Han Serif SC', ‘Source Han Serif’, source-han-serif-sc, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
    background-image: url("../public/bookleft.png");
    background-repeat: repeat;
    overflow: scroll;
  }
</style>
