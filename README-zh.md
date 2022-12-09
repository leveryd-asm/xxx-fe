# 配置选项
```
name: string # 一般是api响应中数据的字段名 
label: string # 表格中显示的字段名
width: number # 表格中显示的宽度
sortable: boolean # 是否可以排序
fixed: boolean # 是否固定列

updaet: boolean # 是否可以编辑

type: [input、select、datetime、datetimerange、date]
search: [true, false] # 是否启用搜索

inline-template: [true, false] # 是否渲染
render: function # 自定义渲染函数
custom_template: [true, false] # 是否自定义模板

options: array # select的选项
```

* options

```
'options': [
  {
  "label": "待处理",
  "value": "待处理"
  },
  {
  "label": "无须处理",
  "value": "无须处理"
  },
  {
  "label": "已处理",
  "value": "已处理"
  }
],
```

默认值,见crud.js
```
// 给数据设置默认值
let default_value = {
  'query_placeholder': '回车搜索...',
  'create_placeholder': '',
  'val': '',
  'type': 'input',
  'search': false,
  'sortable': 'custom'
}

let select_default_value = {
  'create_placeholder': '请选择',
  'query_placeholder': '请选择',
}
```

## 自定义渲染

# 自定义模板(custom_template插槽)

# 自定义操作(除了删除、修改)

# 接口规范
