import { v4 as uuidv4 } from 'uuid'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTheme']),
    theme() {
      return this.getTheme()
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    createModal(name, props) {
      const component = {
        component: name,
        props,
        guid: uuidv4()
      }

      this.$store.commit('ADD_MODAL', component)
    }
  }
}
