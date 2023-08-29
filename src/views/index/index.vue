<template>
  <div class="pageContainer">
    <div class="indexContainer">
      <pagination :limit="pagination.limit" :page="pagination.page" :page-sizes="pageSizes" :total="total" @pagination="upadteUserList" />
    </div>
  </div>
</template>

<script>
  import pageMixin from '@/utils/mixin/routerPage'
  import Pagination from '@/components/Pagination'
  export default {
    name: 'Index',
    components: {
      Pagination,
    },
    mixins: [pageMixin],
    data() {
      return {}
    },
    beforeDestroy() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .indexContainer {
    height: 100vh;
  }
</style>
