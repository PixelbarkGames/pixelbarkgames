import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class UnsplashImage extends Vue {
  @Prop() public message!: string;
}
