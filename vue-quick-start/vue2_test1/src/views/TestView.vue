<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"/>
    <el-table-column prop="name" label="姓名" width="180"/>
    <el-table-column prop="address" label="地址"/>
  </el-table>
</template>

<script>
export default {
  name: "TestView",
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>