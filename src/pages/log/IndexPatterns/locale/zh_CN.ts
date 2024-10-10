const zh_CN = {
  unauthorized: '没有权限',
  title: '索引模式',
  name: '名称',
  name_msg1: '请输入名称',
  name_msg2: '已存在同名的规则',
  time_field: '时间字段',
  allow_hide_system_indices: '匹配隐藏的索引',
  create_btn: '新增索引模式',
  create_title: '创建索引模式',
  indexes_empty: '没有匹配的索引',
  keyword: '字段',
  should_not_empty: '不可为空',
  should_not_dup: '字段不能重复',
  tipDisplay: '展开',
  tipCollapse: '收起',
  link: '跳转链接',
  displayStyle: '展示样式',
  tip1:"其中{{value}}为指定字段的值，可在跳转链接中引用，也可在该变量的基础上增加信息。",
  field: {
    name: '字段名称',
    type: '字段类型',
    type_placeholder: '请选择字段类型',
    edit_title: '编辑索引',
    alias: '字段别名',
    alias_tip: '日志查询中显示的字段名称, 查询和过滤使用原字段名称',
    format: {
      title: '自定义展示格式',
      type: '自定义展示格式',
      params: {
        date: {
          pattern: '日期格式',
          pattern_tip: '使用 Moment.js 格式模式，默认值为 YYYY-MM-DD HH:mm:ss.SSS',
          pattern_placeholder: 'YYYY-MM-DD HH:mm:ss.SSS',
        },
        url: {
          urlTemplate: 'URL 模板',
          urlTemplateTip: '可用{{value}}代表该字段的值,其他字段均可被作为变量引用，如${key1}，${key2}',
          urlTemplateTip1: '如跳转tracing系统：http://flashcat.cloud/trace?traceId={{value}}&dataSourceName=traceSystemName',
          urlTemplatePlaceholder: 'http://flashcat.cloud/trace?traceId={{value}}&dataSourceName=traceSystemName',
          urlTemplatePlaceholder1: 'http://${local_url}/dashboards/132?param1=${sample_field}',
          labelTemplate: '标签模板',
          labelTemplatePlaceholder: '{{value}}',
        },
      },
    },
  },
};
export default zh_CN;
