<template>
  <div class="pageContainer">
    <div class="indexContainer">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="学校名称" prop="schoolName" />
        <el-table-column align="center" label="创建人" prop="userName" />
        <el-table-column align="center" label="创建日期" prop="createTime">
          <template #default="scope">
            {{ scope.row.createTime | dateFormat }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button class="delBtn" type="text" @click="delSchool(scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        :limit="pagination.limit"
        :page="pagination.page"
        :page-sizes="pageSizes"
        :total="total"
        @pagination="upadteUserList"
      />
    </div>
  </div>
</template>

<script>
  import pageMixin from '@/utils/mixin/routerPage'

  export default {
    name: 'Index',
    mixins: [pageMixin],
    data() {
      return {
        tableData: [],
      }
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
