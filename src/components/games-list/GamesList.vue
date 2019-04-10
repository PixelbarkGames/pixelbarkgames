<template>
  <div>
      <div v-for="game in games" v-bind:key="game.id">
        <p>{{game.title}}</p>
      </div>
  </div>
</template>

<script lang="ts" src="./GamesList.ts"></script>
<style scoped lang="scss" src="./GamesList.scss"></style>
