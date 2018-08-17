webpackJsonp([1],{OP51:function(e,t){},o1sB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{treeData:[{label:"行为分析",checked:!0,children:[{label:"时间",checked:!0,children:[{label:"二级",checked:!0,children:[{label:"三一级",checked:!1},{label:"三二级",checked:!0}]}]},{label:"操作类型",checked:!0}]},{label:"漏斗分析",checked:!0},{label:"路径分析",checked:!0}]}},methods:{treeChange:function(e,t,a){console.dir(e),console.dir(t),console.dir(a)},nodeClick:function(e,t,a){console.dir(e),console.dir(t),console.dir(a)},nodeExpand:function(e,t,a){console.dir(e),console.dir(t),console.dir(a)},nodeCollapse:function(e,t,a){console.dir(e),console.dir(t),console.dir(a)}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("au-panel",{staticClass:"section",attrs:{title:"组件描述"}},[a("p",{staticClass:"paragraph"},[e._v("\n      树组件\n    ")]),e._v(" "),a("div",{staticClass:"component-example"},[a("au-tree",{attrs:{"tree-data":e.treeData,"show-children":!0,"show-checkbox":!0},on:{"node-click":e.nodeClick,"check-change":e.treeChange,"node-expand":e.nodeExpand,"node-collapse":e.nodeCollapse}})],1)]),e._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"Props"}},[a("au-table",[a("thead",[a("tr",[a("th",[e._v("字段")]),e._v(" "),a("th",[e._v("必填")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认")]),e._v(" "),a("th",[e._v("可选")]),e._v(" "),a("th",[e._v("说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("treeData")]),e._v(" "),a("td",[a("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),e._v(" "),a("td",[e._v("\n            Array "),a("br"),e._v("\n              -Object\n          ")]),e._v(" "),a("td",[e._v("[]")]),e._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("label: String, 树节点显示的文字")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("checked: Boolean 树节点的选中状态,默认为true")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("children: Array 子节点")])])]),e._v(" "),a("td",[e._v("\n            树数据\n          ")])]),e._v(" "),a("tr",[a("td",[e._v("showCheckbox")]),e._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("true")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("false")])])]),e._v(" "),a("td",[e._v("\n            是否显示checkbox，默认带checkbox\n          ")])]),e._v(" "),a("tr",[a("td",[e._v("showChildren")]),e._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("true")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("false")])])]),e._v(" "),a("td",[e._v("是否展开子节点，默认展开")])])])])],1),e._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"Events"}},[a("au-table",[a("thead",[a("tr",[a("th",[e._v("名称")]),e._v(" "),a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("@node-click")]),e._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("item 点击的节点数据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("items 整个树的树据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("event")])])]),e._v(" "),a("td",[e._v("点击节点事件")])]),e._v(" "),a("tr",[a("td",[e._v("@check-change")]),e._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("item 点击的节点数据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("items 整个树的树据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("event")])])]),e._v(" "),a("td",[e._v("节点checkbox 选中事件")])]),e._v(" "),a("tr",[a("td",[e._v("@node-expand")]),e._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("item 点击的节点数据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("items 整个树的树据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("event")])])]),e._v(" "),a("td",[e._v("节点展开事件")])]),e._v(" "),a("tr",[a("td",[e._v("@node-collapse")]),e._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("item 点击的节点数据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("items 整个树的树据")]),e._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[e._v("event")])])]),e._v(" "),a("td",[e._v("节点收起事件")])])])])],1),e._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"使用示例"}},[a("h4",{staticClass:"title-1"},[e._v("基础用例")]),e._v(" "),a("code-h",{attrs:{lang:"html",content:'\n     <au-tree :tree-data="treeData" :show-children="true" :show-checkbox="true" @node-click="nodeClick" @check-change="treeChange"></au-tree>\n    '}}),e._v(" "),a("code-h",{attrs:{lang:"js"}},[e._v("\n      export default {\n        data () {\n          return {\n            treeData: [\n              {\n                label: '行为分析',\n                checked: true,\n                children: [\n                  {\n                    label: '时间',\n                    checked: true\n                  },\n                  {\n                    label: '操作类型',\n                    checked: true\n                  }\n                ]\n              },\n              {\n                label: '路径分析',\n                checked: true\n              }\n            ]\n          }\n        },\n        methods: {\n          treeChange (item, items, e) {\n            console.dir(item)\n            console.dir(items)\n            console.dir(e)\n          },\n          nodeClick (item, items, e) {\n            console.dir(item)\n            console.dir(items)\n            console.dir(e)\n          }\n        }\n      }\n    ")])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,o,!1,function(e){a("OP51")},"data-v-731ef021",null);t.default=l.exports}});
//# sourceMappingURL=1.6a3f59dcb0037ea3ac87.js.map