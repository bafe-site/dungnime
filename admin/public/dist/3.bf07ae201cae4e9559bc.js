(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"KHd+":function(t,e,a){"use strict";function n(t,e,a,n,r,i,d,l){var o,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=a,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),d?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(d)},s._ssrRegister=o):r&&(o=l?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(s.functional){s._injectStyles=o;var u=s.render;s.render=function(t,e){return o.call(e),u(t,e)}}else{var c=s.beforeCreate;s.beforeCreate=c?[].concat(c,o):[o]}return{exports:t,options:s}}a.d(e,"a",(function(){return n}))},"Y+7t":function(t,e,a){"use strict";var n;a.r(e);var r={props:{uri:{type:String,required:!0},headers:{type:Array,required:!0},noDataText:{type:String,default:"No data found."},noResultsText:{type:String,default:"No data found."},searchText:{type:String,default:"Search"},searchIcon:{type:String,default:"mdi-magnify"},refreshText:{type:String,default:"Reload"},refreshIcon:{type:String,default:"mdi-sync"},customButtonText:{type:String,default:"Custom Button"},customButtonIcon:{type:String,default:"mdi-cloud-upload"},customButtonUri:{type:String,default:""},customButtonColor:{type:String,default:"warning"},addNewText:{type:String,default:"Add New"},addNewIcon:{type:String,default:"mdi-plus"},addNewUri:{type:String,default:""},addNewColor:{type:String,default:"info"},itemsPerPageAllText:{type:String,default:"All"},itemsPerPageText:{type:String,default:"Rows per page:"},pageTextLocale:{type:String,default:"en"},detailUri:{type:String,default:""},detailUriParameter:{type:String,default:""},detailText:{type:String,default:"Detail"},detailIcon:{type:String,default:"mdi-eye"},detailColor:{type:String,default:"primary"},editUri:{type:String,default:""},editUriParameter:{type:String,default:""},editText:{type:String,default:"Edit"},editIcon:{type:String,default:"mdi-pencil"},editColor:{type:String,default:"primary"},deleteUri:{type:String,default:""},deleteUriParameter:{type:String,default:""},deleteText:{type:String,default:"Delete"},deleteIcon:{type:String,default:"mdi-trash-can-outline"},deleteColor:{type:String,default:"red lighten-1"},deleteConfirmationText:{type:String,default:"Are you sure want to delete this data ?"},deleteCancelText:{type:String,default:"Cancel"},tableNumber:{type:Boolean,default:function(){return!1}},withActions:{type:Boolean,default:function(){return!1}}},data:function(){return{prompt_delete:!1,search:"",total_data:0,from_data:0,to_data:0,table_headers:[],table_items:[],loading:!0,options:{},selected:null,delete_loader:!1,table_alert:!1,table_alert_text:"",table_alert_state:"info"}},watch:{options:{handler:function(){this.dataHandler()},deep:!0}},mounted:function(){this.dataHandler()},computed:{query:function(){return"?page="+this.options.page+"&search="+this.search+"&paginate="+this.options.itemsPerPage}},methods:{dataHandler:function(){if(this.tableNumber){this.table_headers=_.concat([{text:"#",align:"center",sortable:!1,value:"table_index"}],this.headers)}else this.table_headers=this.headers;if(this.withActions){this.table_headers=_.concat(this.table_headers,[{text:"Aksi",align:"center",sortable:!1,value:"actions"}])}setTimeout(this.getData(),2e3)},getData:function(){var t=this;this.loading=!0,n&&n.cancel(),n=axios.CancelToken.source(),axios.get(this.uri+this.query,{cancelToken:n.token}).then((function(e){t.setData(e.data.data.data),t.total_data=e.data.data.total,t.from_data=e.data.data.from,t.to_data=e.data.data.to,t.loading=!1})).catch((function(e){t.loading=!1}))},setData:function(t){var e=[];_.forEach(t,(function(t,a){t.table_index=parseInt(a)+1,e.push(t)})),this.table_items=e},promptDeleteItem:function(t){this.prompt_delete=!0,this.selected=t},deleteItem:function(){var t=this;this.delete_loader=!0,axios.delete(this.ziggy(this.deleteUri,[this.selected[this.deleteUriParameter]]).url()).then((function(e){e.data.success?(t.table_alert=!0,t.table_alert_state="success",t.table_alert_text=e.data.message,t.dataHandler()):(t.table_alert=!0,t.table_alert_state="error",t.table_alert_text=e.data.message),t.delete_loader=!1,t.prompt_delete=!1})).catch((function(e){t.table_alert=!0,t.table_alert_state="error",t.table_alert_text="Oops, something went wrong. Please try again later.",t.delete_loader=!1,t.prompt_delete=!1}))}}},i=a("KHd+"),d=Object(i.a)(r,void 0,void 0,!1,null,null,null);e.default=d.exports}}]);