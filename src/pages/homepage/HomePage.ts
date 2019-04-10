import { Component, Vue } from 'vue-property-decorator';
import Logo from '../../components/logo/Logo';
import GamesList from '../../components/games-list/GamesList';
import GameService from '../../services/games-service';
import Game from '../../types/game';

@Component({
  components: {
    Logo,
    GamesList,
  },
})
export default class Homepage extends Vue {
  public games: Game[] = [];

  public mounted() {
    const gameService = new GameService();
    gameService.all()
      .then((games) => this.games = games);
  }
}
