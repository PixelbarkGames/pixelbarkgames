import { Component, Vue } from 'vue-property-decorator';
import HelloWorldState from './HelloWorldState';
import UnsplashImage from '../unsplash-image/UnsplashImage';

@Component({
  components: {
    UnsplashImage,
  },
})
export default class HelloWorld extends Vue {
  public state: HelloWorldState;

  constructor() {
    super();

    this.state = {
      message: 'Hello',
    };
  }

  public buttonWasClicked() {
    this.state = {
      message: 'World!',
    };
  }
}
