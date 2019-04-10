import { Component, Vue, Prop } from 'vue-property-decorator';
import Game from '../../types/game';

@Component
export default class GamesList extends Vue {
    @Prop() public games!: Game[];
}
