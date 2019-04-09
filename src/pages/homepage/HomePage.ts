import { Component, Vue } from 'vue-property-decorator';
import Logo from '../../components/logo/Logo';

@Component({
  components: {
    Logo,
  },
})
export default class Homepage extends Vue {
}
