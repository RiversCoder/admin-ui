webpackJsonp([12],{"sd/u":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"select-examples",data:function(){return{value:"j",values:["b","p"],options:[{text:"Breaking",value:"b"},{text:"Jazz",value:"j"},{text:"Popppin",value:"p"},{text:"Locking",value:"l"},{text:"Breaking",value:"b"},{text:"Jazz",value:"j"},{text:"Popppin",value:"p"},{text:"Locking",value:"l"},{text:"Breaking",value:"b"},{text:"Jazz",value:"j"},{text:"Popppin",value:"p"},{text:"Locking",value:"l"}],validators:[{validator:function(t){return"b"===t||t instanceof Array&&t.includes("b")},warning:"Bboy Forever"}]}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("au-panel",{staticClass:"section",attrs:{title:"组件描述"}},[e("p",{staticClass:"paragraph"},[t._v("\n      文本输入框组件\n    ")]),t._v(" "),e("div",{staticClass:"component-example"},[e("au-select",{attrs:{label:"不如跳舞",options:t.options,validators:t.validators},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),e("br"),e("br"),t._v(" "),e("au-select",{attrs:{label:"不如跳舞",options:t.options,validators:t.validators},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),e("br"),e("br"),t._v(" "),e("au-select",{attrs:{label:"不如跳舞",options:t.options,multiple:!0,validators:t.validators},model:{value:t.values,callback:function(a){t.values=a},expression:"values"}})],1)]),t._v(" "),e("au-panel",{staticClass:"section",attrs:{title:"Props"}},[e("au-table",[e("thead",[e("tr",[e("th",[t._v("字段")]),t._v(" "),e("th",[t._v("必填")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认")]),t._v(" "),e("th",[t._v("可选")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("\n            提示文字\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("label-width")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td"),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("合法的css宽度值，仅支持px单位")]),t._v(" "),e("td",[t._v("\n            输入框前的提示文字的宽度"),e("br"),t._v("\n            仅inline为true时有效\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("tips")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("\n            Array"),e("br"),t._v("\n            -String\n          ")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("\n            需要显示的解释信息"),e("br")])]),t._v(" "),e("tr",[e("td",[t._v("inline")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),e("td",[t._v("\n            是否横向放置label\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("full-width")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),e("td",[t._v("\n            是否占满父元素宽度"),e("br"),t._v("\n            仅在inline为false时有效\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("\n            合法的css长度值\n          ")]),t._v(" "),e("td",[t._v("\n            下拉框的宽度"),e("br"),t._v("\n            仅支持px单位"),e("br")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[e("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("Any")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("Array")])])]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("\n            值"),e("br"),t._v("\n            当multiple为true时，value为Array类型"),e("br"),t._v("\n            当multiple为false时，value为任意类型"),e("br")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[e("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),t._v(" "),e("td",[t._v("\n            Array"),e("br"),t._v("\n            -Object\n          ")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("text: String，选项显示的文字")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value: Any，选项的值，可以是任意类型")])])]),t._v(" "),e("td",[t._v("\n            选项配置\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("multiple")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),e("td",[t._v("\n            是否为多选\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("placeholder")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("''")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("\n            占位字符\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("normal")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("large")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("normal")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("small")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("mini")])])]),t._v(" "),e("td",[t._v("\n            尺寸（高度）"),e("br"),t._v("\n            如需调节宽度，请直接使用style进行控制\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),e("td",[t._v("禁用")])]),t._v(" "),e("tr",[e("td",[t._v("loading")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),e("td",[t._v("\n            加载状态，是否正在加载\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("warning")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),e("td",[t._v("是否显示警告样式")])]),t._v(" "),e("tr",[e("td",[t._v("warnings")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("\n            Array"),e("br"),t._v("\n            -String\n          ")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("\n            需要显示的警告信息"),e("br"),t._v("\n            如果给定了需要显示的警告信息，则组件将不执行validators中提供的验证器，而只是简单显示给定的警告"),e("br"),t._v("\n            不管warning选项是true还是false，只要给定了警告信息就一定会显示警告样式"),e("br")])]),t._v(" "),e("tr",[e("td",[t._v("validators")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("\n            Array"),e("br"),t._v("\n            -Object\n          ")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("validator: Function，接受一个表示当前值的参数value")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("warning: String，当验证失败时需要显示的警告信息")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("async: Boolean，是否为异步验证，默认为false")])])]),t._v(" "),e("td",[t._v("\n            验证器配置"),e("br"),t._v("\n            同步验证时，验证器函数只需要返回Booean类型的验证结果即可"),e("br"),t._v("\n            异步验证时，需要额外配置async为true"),e("br"),t._v("\n            同时，验证器函数需要返回一个promise，并在resolve函数中传递Boolean类型的验证结果给验证器"),e("br"),t._v("\n            既有同步验证，又有异步验证时，验证器首先执行同步验证"),e("br"),t._v("\n            只有通过了全部的同步验证时，才会执行异步验证"),e("br"),t._v("\n            不管warning选项是true还是false，只要验证未通过就一定会显示警告样式"),e("br")])]),t._v(" "),e("tr",[e("td",[t._v("validate-on-blur")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"times"}})],1),t._v(" "),e("td",[t._v("\n            Boolean\n          ")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),e("td",[t._v("\n            当配置了验证器后，是否在blur事件中验证"),e("br"),t._v("\n            默认是在change事件中验证\n          ")])])])])],1),t._v(" "),e("au-panel",{staticClass:"section",attrs:{title:"Slots"}},[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("au-panel",{staticClass:"section",attrs:{title:"Events"}},[e("au-table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("@change")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),e("td",[t._v("\n            值改变事件"),e("br"),t._v("\n            参数value表示当前值\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("@focus")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),e("td",[t._v("\n            聚焦事件"),e("br"),t._v("\n            参数value表示当前值\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("@blur")]),t._v(" "),e("td",[e("ol",{staticClass:"option-list"},[e("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),e("td",[t._v("\n            失焦事件"),e("br"),t._v("\n            参数value表示当前值\n          ")])])])])],1),t._v(" "),e("au-panel",{staticClass:"section",attrs:{title:"Methods"}},[e("au-table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("validate()")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("\n            在给定了验证器的情况下执行验证"),e("br"),t._v("\n            返回一个Promise实例"),e("br"),t._v("\n            需要同时验证多个表单时请使用Promise.all()方法\n          ")])]),t._v(" "),e("tr",[e("td",[t._v("reset()")]),t._v(" "),e("td",[e("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),e("td",[t._v("清除值和警告")])])])])],1),t._v(" "),e("au-panel",{staticClass:"section",attrs:{title:"使用示例"}},[e("h4",{staticClass:"title-1"},[t._v("基础用例")]),t._v(" "),e("code-h",{attrs:{lang:"html",content:'\n      <au-select label="不如跳舞" v-model="value" :options="options" :validators="validators"></au-select><br><br>\n      <au-select label="不如跳舞" v-model="values" :options="options" :multiple="true" :validators="validators"></au-select>\n    '}}),t._v(" "),e("code-h",{attrs:{lang:"js"}},[t._v("\n      export default {\n        data () {\n          return {\n            value: 'j',\n            values: ['b', 'p'],\n            options: [\n              {\n                text: 'Breaking',\n                value: 'b'\n              },\n              {\n                text: 'Jazz',\n                value: 'j'\n              },\n              {\n                text: 'Popppin',\n                value: 'p'\n              },\n              {\n                text: 'Locking',\n                value: 'l'\n              }\n            ],\n            validators: [\n              {\n                validator (v) {\n                  return v === 'b' || (v instanceof Array && v.includes('b'))\n                },\n                warning: 'Bboy Forever'\n              }\n            ]\n          }\n        }\n      }\n    ")])],1)],1)},staticRenderFns:[]},l=e("VU/8")(s,v,!1,null,null,null);a.default=l.exports}});
//# sourceMappingURL=12.a431625502404ace1ec0.js.map