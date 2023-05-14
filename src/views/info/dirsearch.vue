<template>
  <cute_table :url="url" :create_flag=false :module_name="module_name" :columns="columns">
    <template slot-scope="scope" slot="custom_template">
      <el-input type="textarea" v-model="scope.row.header" :autosize="{maxRows:10,minRows:10}" v-if="scope.col['name']==='header'"> </el-input>
      <el-input type="textarea" v-model="scope.row.content" :autosize="{maxRows:10,minRows:10}" v-if="scope.col['name']==='content'"> </el-input>
    </template>
  </cute_table>
</template>
<script>
/* eslint-disable */
import cute_table from '@/components/Table/table.vue'

export default {
  name: 'app',
  components: {
    cute_table
  },
  data: function () {
    return {
      filter: {
        limit: 10, // 页大小
        offset: 1, // 当前页
        asc: 0 //默认降序
      },
      url: process.env.SOC_API,
      module_name: 'dirsearch',
      columns: [
        {
          'name': 'url',
          'label': 'url',
          'width': 500,
        },
        {
          'name': 'status',
          'label': 'status',
          'width': 100,
          'sortable': false,
        },
        {
          'name': 'title',
          'label': 'title',
          'width': 200,
          'sortable': false,
        },
        {
          'name': 'project',
          'label': 'project',
          'width': 100,
          'sortable': false,
        },
        {
          'name': 'content_type',
          'label': 'content_type',
          'width': 150,
          'sortable': false,
        },
        {
          'name': 'redirect',
          'label': 'redirect',
          'width': 150,
          'sortable': false,
        },
        {
          'name': '长度信息',
          'label': '长度信息',
          'width': 200,
          'sortable': false,
          'render': function (row){
            let length = row.length[0]
            let lines = row.lines
            let words = row.words
            return `length: ${length} <br> lines: ${lines} <br> words: ${words}`;
          },
        },
        {
          'name': 'timestamp',
          'label': 'timestamp',
          'width': 250,
          'sortable': false,
        },
        {
          'name': 'query',
          'label': 'query',
          'search': true,
          'val': '*',
        },
      ],
    }
  },
}
</script>

<style>
textarea{
  min-width: 500px;
  max-width: 1000px;
  min-height: 500px;
  max-height: 600px
}
</style>
