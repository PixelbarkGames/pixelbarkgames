import { Component, Vue } from 'vue-property-decorator';
import HelloWorldState from './HelloWorldState';

@Component
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
