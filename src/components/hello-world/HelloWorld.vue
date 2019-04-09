<template>
  <div class="hello">
    <h1>{{state.message}}</h1>
    <button @click="buttonWasClicked()">Click me!</button>
    <unsplash-image message='Hwdy!'></unsplash-image>
  </div>
</template>

<script lang="ts" src="./HelloWorld.ts"></script>
<style scoped lang="scss" src="./HelloWorld.scss"></style>
