export default {
  data() {
    return {
      pagination: {
        page: this.$route.meta.page || 1,
        limit: this.$route.meta.limit || 10,
      },
      total: 0,
      pageSizes: [10, 20, 30],
    }
  },
  watch: {
    pagination: {
      deep: true,
      handler(val) {
        this.$route.meta.page = val.page
        this.$route.meta.limit = val.limit
      },
    },
  },
  methods: {
    upadteUserList(value) {
      this.pagination = value
      this.getList()
    },
    resetsForm(form) {
      this.pagination = {
        page: 1,
        limit: 10,
      }
      this.$refs[form].resetFields()
      this.getList()
    },
    onSubmitList() {
      this.pagination = {
        page: 1,
        limit: 10,
      }
      this.getList()
    },
  },
}
