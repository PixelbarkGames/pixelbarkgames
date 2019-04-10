import { Component, Vue } from 'vue-property-decorator';
import Logo from '../../components/logo/Logo';
import GamesList from '../../components/games-list/GamesList';

@Component({
  components: {
    Logo,
    GamesList
  },
})
export default class Homepage extends Vue {
}
