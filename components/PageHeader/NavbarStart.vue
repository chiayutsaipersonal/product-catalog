<template>
  <div id="navbar-start"
       class="navbar-start">
    <nuxt-link
      :class="{'is-active':$route.name==='index'}"
      class="navbar-item"
      to="/"
      tag="a"
      @click.native="activateInProgressOverlay">
      <span>HOME</span>
    </nuxt-link>
    <nuxt-link v-if="$route.name!=='catalog'"
               :class="{'is-active':$route.name==='catalog'}"
               class="navbar-item"
               to="/catalog"
               tag="a"
               @click.native="activateInProgressOverlay">
      <span>CATALOG</span>
    </nuxt-link>
    <div v-else
         class="navbar-item has-dropdown is-active">
      <a class="navbar-link">
        CATALOG
      </a>
      <div class="navbar-dropdown">
        <div class="navbar-item dropdown-catalog-frame">
          <category-menu/>
        </div>
      </div>
    </div>
    <nuxt-link
      :class="{'is-active':$route.name==='contact'}"
      class="navbar-item"
      to="/contact"
      tag="a"
      @click.native="activateInProgressOverlay">
      <span>CONTACT</span>
    </nuxt-link>
  </div>
</template>

<script>
import vuexMappers from 'vuex'

import CategoryMenu from '~/components/catalog/CategoryMenu'

export default {
  name: 'NavbarStart',
  components: {
    CategoryMenu,
  },
  methods: {
    ...vuexMappers.mapMutations('inProgress', {
      activateInProgressOverlay: 'activateInProgressOverlay',
    }),
  },
}
</script>

<style scoped>
.dropdown-catalog-frame {
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 0px;
  padding: 5px;
}

@media all and (min-width: 1088px) {
  #navbar-start {
    display: none;
  }
}

a.is-active {
  pointer-events: none;
}
</style>
