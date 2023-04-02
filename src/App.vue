<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
body {
  margin: 0;
  padding: 0;
  background: #fff;
  color: #333;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover,
a:visited,
a:link,
a:active {
  color: #333;
}
ul,
ol {
  list-style: none;
}
img {
  vertical-align: top;
  border: none;
}
button {
  border: 0;
  appearance: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
.fl {
  float: left;
}
.clearfix {
  content: '';
  display: block;
  clear: both;
}
.mr75 {
  margin-right: 6px;
}
.mb75 {
  margin-bottom: 6.4px;
}
</style>
