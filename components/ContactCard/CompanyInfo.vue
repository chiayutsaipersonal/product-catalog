<template>
  <div class="company-info">
    <icon-info>
      <template slot="fa-icon">
        <i class="fas fa-building"/>
      </template>
      <template slot="text">
        <span class="company-title-text">
          {{ company.name }}
        </span>
      </template>
    </icon-info>
    <icon-info>
      <template slot="fa-icon">
        <i class="fas fa-location-arrow"/>
      </template>
      <template slot="text">
        <div class="address-text">
          {{ company.address }}
        </div>
      </template>
    </icon-info>
    <icon-info>
      <template slot="fa-icon">
        <i class="fas fa-phone"/>
      </template>
      <template slot="text">
        <span class="phone-text">
          {{ company.telephone }}
        </span>
      </template>
    </icon-info>
    <icon-info>
      <template slot="fa-icon">
        <i class="fas fa-fax"/>
      </template>
      <template slot="text">
        <span class="fax-text">
          {{ company.fax }}
        </span>
      </template>
    </icon-info>
    <certifications :certifications="company.certifications"/>
  </div>
</template>

<script>
import Certifications from './Certifications'
import IconInfo from './IconInfo'

export default {
  name: 'CountryInfo',
  components: {
    Certifications,
    IconInfo,
  },
  props: {
    company: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Anton);
.company-title-text {
  font-family: 'Anton';
  font-style: italic;
  font-size: 140%;
  text-decoration: underline;
}
.address-text,
.phone-text,
.fax-text {
  font-size: 50%;
  font-weight: bold;
}
.address-text {
  line-height: 140%;
}
</style>
