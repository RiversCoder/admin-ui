webpackJsonp([4],{"2VDK":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("au-panel",{staticClass:"section",attrs:{title:"组件描述"}},[s("p",{staticClass:"paragraph"},[t._v("\n      一个文件上传组件，兼具文件上传，已上传文件预览、删除、下载、描述等功能。"),s("br")]),t._v(" "),s("div",{staticClass:"component-example"},[s("au-upload",{attrs:{label:"请上传附件","button-text":"选择文件",inline:"",action:"http://localhost:3480/upload","auto-upload":!1,"can-describe":!1},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)]),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Props"}},[s("au-table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认")]),t._v(" "),s("th",[t._v("可选")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),t._v(" "),s("td",[t._v("\n            Array "),s("br"),t._v("\n            -Object\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("base64: String, 文件的base64字符串")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("description: String, 文件的描述")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("extension: String, 文件的后缀名")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("file: File, 原生的文件对象")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("isImage: Boolean, 表示当前文件是否为图片")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("name: String, 文件名")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("percent: Number, 上传进度")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("timestamp: Number, 用户选择文件时的时间戳")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("type: String, 文件类型，参考"),s("a",{staticClass:"au-theme-color--info",attrs:{href:"https://www.iana.org/assignments/media-types/media-types.xhtml",target:"_blank"}},[t._v("Media Types")])]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("url: String, 文件地址")])])]),t._v(" "),s("td",[t._v("\n            上传组件中已经选中或已经上传的文件"),s("br"),t._v("\n            支持v-model语法\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("multiple")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            是否多选文件\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("accept")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            参考："),s("a",{staticClass:"au-theme-color--info",attrs:{href:"https://www.iana.org/assignments/media-types/media-types.xhtml",target:"_blank"}},[t._v("Media Types")]),t._v("表中的template字段\n            ")]),t._v(" "),s("td",[t._v("\n            可接受的文件类型，默认不指定则全部文件类型都接受\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("auto-upload")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            是否自动上传\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("action")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            自动上传时的上传接口地址"),s("br"),t._v("\n            无论是否设置为可多选文件，组件每次仅向该地址上传一个文件（如果一次选择了5个文件，则将会发送5个上传请求）"),s("br"),t._v("\n            该地址成功时应该返回一个json字符串，包含当前上传的文件的url字段"),s("br"),t._v('\n            （例如：{"message":"upload success","url":"http://127.0.0.1:3000/upload-files/me.jpg"}），否则下载功能不可用'),s("br"),t._v("\n            仅在autoUpload为true时生效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("method")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("post")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("get")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("post")])])]),t._v(" "),s("td",[t._v("\n            自动上传时的请求类型"),s("br"),t._v("\n            仅在autoUpload为true时生效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            提供给上传接口的其它字段"),s("br"),t._v("\n            仅在autoUpload为true时生效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("withCredentials")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            访问跨域的上传接口时是否使用cookie或authorization headers"),s("br"),t._v("\n            仅在autoUpload为true时生效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("headers")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            设置或修改访问上传接口时的headers"),s("br"),t._v("\n            仅在autoUpload为true时生效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("show-upload-button")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            是否显示上传按钮\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("label")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            上传按钮前的提示文字"),s("br"),t._v("\n            仅在show-upload-button为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("button-text")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("上传文件")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            上传按钮文字"),s("br"),t._v("\n            仅在show-upload-button为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("button-type")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("primary")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("default")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("primary")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("warning")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("danger")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("success")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("info")])])]),t._v(" "),s("td",[t._v("\n            上传按钮颜色"),s("br"),t._v("\n            仅在show-upload-button为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("button-size")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("normal")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("large")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("normal")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("small")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("mini")])])]),t._v(" "),s("td",[t._v("\n            上传按钮尺寸"),s("br"),t._v("\n            仅在show-upload-button为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("button-plain")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            上传按钮是否为空心按钮"),s("br"),t._v("\n            仅在show-upload-button为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("禁用")])]),t._v(" "),s("tr",[s("td",[t._v("show-file-list")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("是否显示文件列表")])]),t._v(" "),s("tr",[s("td",[t._v("list-type")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("block")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("block")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("inline")])])]),t._v(" "),s("td",[t._v("\n            文件列表排列方式"),s("br"),t._v("\n            仅在show-file-list为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("can-remove")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            文件列表中的文件是否可以被删除"),s("br"),t._v("\n            仅在show-file-list为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("can-describe")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            文件列表中的文件是否可填写描述"),s("br"),t._v("\n            仅在show-file-list为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("can-download")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            文件列表中的文件是否可下载"),s("br"),t._v("\n            仅在show-file-list为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("can-preview")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            文件列表中的图片文件是否可预览"),s("br"),t._v("\n            仅在show-file-list为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("before-remove")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            当用户点击删除图标删除文件前调用"),s("br"),t._v("\n            接受一个表示当前要删除的文件的file参数，和第二个表示文件位置的index参数"),s("br"),t._v("\n            如果函数未返回或者返回true，则文件被删除"),s("br"),t._v("\n            如果函数返回false，则文件不被删除"),s("br"),t._v("\n            如果希望异步地做一些事情，可以返回一个promise对象，当其resolve时文件被删除，reject时文件不被删除"),s("br"),t._v("\n            仅在show-file-list和can-remove为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("before-describe")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            当用户修改文件描述后点击确认图标时调用"),s("br"),t._v("\n            接受一个表示当前用户输入的描述信息的description参数，和第二个表示文件位置的index参数"),s("br"),t._v("\n            如果函数未返回或者返回true，则文件描述被修改"),s("br"),t._v("\n            如果函数返回false，则文件描述不被修改"),s("br"),t._v("\n            如果希望异步地做一些事情，可以返回一个promise对象，当其resolve时文件描述被修改，reject时文件描述不被修改"),s("br"),t._v("\n            仅在show-file-list和can-describe为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("before-preview")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            当用户点击图片预览图片前调用"),s("br"),t._v("\n            接受一个表示当前要预览的文件的file参数，和第二个表示文件位置的index参数"),s("br"),t._v("\n            如果函数未返回或者返回true，则文件被预览"),s("br"),t._v("\n            如果函数返回false，则文件不被预览"),s("br"),t._v("\n            如果希望异步地做一些事情，可以返回一个promise对象，当其resolve时文件被预览，reject时文件不被预览"),s("br"),t._v("\n            仅在show-file-list和can-preview为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("before-download")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            当用户点击下载图标下载文件前调用"),s("br"),t._v("\n            接受一个表示当前要下载的文件的file参数，和第二个表示文件位置的index参数"),s("br"),t._v("\n            如果函数未返回或者返回true，则文件被下载"),s("br"),t._v("\n            如果函数返回false，则文件不被下载"),s("br"),t._v("\n            如果希望异步地做一些事情，可以返回一个promise对象，当其resolve时文件被下载，reject时文件不被下载"),s("br"),t._v("\n            仅在show-file-list和can-download为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("before-upload")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            当一个文件被上传前调用"),s("br"),t._v("\n            接受一个表示当前选中的所有文件的fileList参数，和第二个表示文件位置的index参数"),s("br"),t._v("\n            如果函数未返回或者返回true，则文件被上传"),s("br"),t._v("\n            如果函数返回false，则文件不被上传"),s("br"),t._v("\n            如果希望异步地做一些事情，可以返回一个promise对象，当其resolve时文件被上传，reject时文件不被上传"),s("br"),t._v("\n            仅在auto-upload为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("on-Error")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            当文件上传出错时调用"),s("br"),t._v("\n            接受一个表示错误对象的error参数"),s("br"),t._v("\n            仅在auto-upload为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("on-progress")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            文件上传进度更新时调用"),s("br"),t._v("\n            接受一个表示进度事件对象的event参数"),s("br"),t._v("\n            仅在auto-upload为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("on-success")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            文件上传成功时调用"),s("br"),t._v("\n            接受一个表示上传成功时服务器返回的responseText的body参数"),s("br"),t._v("\n            仅在auto-upload为true时有效\n          ")])])])])],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Slots"}},[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Events"}},[s("au-table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@change")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("files")])])]),t._v(" "),s("td",[t._v("\n            用户选择文件后触发"),s("br"),t._v("\n            参数files表示当前用户选中的所有文件\n          ")])])])])],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Methods"}},[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"使用示例"}},[s("h4",{staticClass:"title-1"},[t._v("基础用例")]),t._v(" "),s("code-h",{attrs:{lang:"html",content:'\n      <au-upload v-model="files" action="http://localhost:3480/upload"></au-upload>\n    '}}),t._v(" "),s("code-h",{attrs:{lang:"js"}},[t._v("\n      export default {\n        data () {\n          return {\n            files: []\n          }\n        }\n      }\n    ")])],1)],1)},staticRenderFns:[]},v=s("VU/8")({name:"upload-examples",data:function(){return{files:[]}}},a,!1,null,null,null);e.default=v.exports}});
//# sourceMappingURL=4.d61fec8f86bd91f9a4f9.js.map