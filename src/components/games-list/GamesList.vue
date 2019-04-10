<template>
  <section>
    <a v-for="game in games" v-bind:key="game.id">
      <img v-bind:src="game.thumbnailImageUrl" v-bind:alt="game.title">
    </a>
  </section>
</template>

<script lang="ts" src="./GamesList.ts"></script>
<style scoped lang="scss" src="./GamesList.scss"></style>
