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
        module_name: 'http',
        columns: [
          {
            'name': 'project',
            'label': '概述',
            "width": 500,
            'render': function (row){
              let favicon = ""
              let title = row.title.length===0 ? "": `${row.title}<br>`
              if(row.favicon){
                favicon = `<img src="data:image/png;base64,${row.favicon}" width="30px" height="30px">`
              }
              return `
        ${row.url}  ${favicon}<br>
        (${row.project})<br>
        ${title}
        <br>
        IP: ${row.host}<br>
        Content-Length: ${row.content_length}<br>
        Content-Type: ${row.content_type}<br>
        Server: ${row.server}<br>
       `
            },
          },
          {
            'name': 'header',
            'label': '响应头',
            'width': 600,
            'custom_template': true,
            'sortable': false,
          },
          {
            'name': 'content',
            'label': '响应内容',
            'width': 600,
            'custom_template': true,
            'sortable': false,
          },
          {
            'name': 'query',
            'label': 'query',
            'search': true,
          },
        ],
      }
    },
  }
</script>

