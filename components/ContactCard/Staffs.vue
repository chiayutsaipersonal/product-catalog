<template>
  <div class="staff-list-container">
    <div v-for="staff in staffs"
         :key="staff._uid"
         class="staff-card">
      <icon-info>
        <template slot="fa-icon">
          <i class="fas fa-user-circle"/>
        </template>
        <template slot="text">
          <span class="name-text">
            {{ staff.name }}
          </span>
        </template>
      </icon-info>
      <icon-info>
        <template slot="fa-icon">
          <i class="fas fa-envelope"/>
        </template>
        <template slot="text">
          <a :href="`mailto:${staff.email}`"
             class="email-text">
            {{ staff.email }}
          </a>
        </template>
      </icon-info>
      <icon-info v-if="staff.mobile">
        <template slot="fa-icon">
          <i class="fas fa-mobile"/>
        </template>
        <template slot="text">
          <span class="mobile-text">
            {{ staff.mobile }}
          </span>
        </template>
      </icon-info>
    </div>
  </div>
</template>

<script>
import IconInfo from './IconInfo'

export default {
  name: 'Staff',
  components: {IconInfo},
  props: {
    staffs: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
.staff-list-container {
  display: grid;
  grid-gap: 10px 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  margin-top: 15px;
  padding: 5px;
}

.staff-card {
  background-color: whitesmoke;
  max-width: max-content;
  min-width: 250px;
  border-left: 3px solid rgb(36, 145, 145);
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 5px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.name-text {
  font-weight: 900;
  font-style: italic;
}

.email-text,
.mobile-text {
  font-size: 80%;
}
</style>
