<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>

*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  overflow: hidden;
  font-size: 20px;
}

#app {
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a253b;
  background: #0a253b;
}

#nav {
  padding: 30px;
  background-color: #0b253c;
  border-bottom: 1px solid #112b41;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #1fc1c3;
}

/* 
1fc1c3
0a253b - background
0b253c
738394
ffffff
f6fcfc
e6efef
738394
162f45
*/
</style>
