(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index-report"],{"02ec":function(t,a,e){"use strict";var r=e("3cbf"),o=e.n(r);o.a},"3cbf":function(t,a,e){},bc59:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Breadcrumb",[e("BreadcrumbItem",[t._v("Home")]),e("BreadcrumbItem",[t._v("Report")])],1),e("Content",{style:{padding:"24px 0 0",minHeight:"280px"}},[e("Row",{attrs:{gutter:20}},t._l(t.inforCardData,function(a,r){return e("i-col",{key:"infor-"+r,staticStyle:{height:"120px"},attrs:{span:"6"}},[e("infor-card",{attrs:{shadow:"",color:a.color,icon:a.icon,"icon-size":36}},[e("count-to",{attrs:{end:a.count,"count-class":"count-style"}}),e("p",[t._v(t._s(t.getLangInforTitle(a.title)))])],1)],1)})),e("Row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[e("i-col",{attrs:{span:"8"}},[e("Card",{attrs:{shadow:""}},[e("chart-pie",{staticStyle:{height:"300px"},attrs:{value:t.pieData,text:t.$t("dashboard.userAccess")}})],1)],1),e("i-col",{attrs:{span:"16"}},[e("Card",{attrs:{shadow:""}},[e("chart-bar",{staticStyle:{height:"300px"},attrs:{value:t.barData,text:t.$t("dashboard.weekAmountCreation")}})],1)],1)],1),e("Row",{staticStyle:{"margin-top":"20px"}},[e("Card",{attrs:{shadow:""}},[e("h4",{staticStyle:{"margin-bottom":"20px"}},[t._v(t._s(t.$t("dashboard.sysLog")))]),e("Timeline",[e("TimelineItem",{attrs:{color:"green"}},[t._v("发布1.0版本")]),e("TimelineItem",{attrs:{color:"green"}},[t._v("发布2.0版本")]),e("TimelineItem",{attrs:{color:"red"}},[t._v("严重故障")]),e("TimelineItem",{attrs:{color:"blue"}},[t._v("发布3.0版本")])],1)],1)],1)],1)],1)},o=[],n=(e("4917"),e("be94")),i=e("2f62"),c=e("3692"),s=e("5683"),l=e("c9ae"),u=e("db49"),d={components:{InforCard:c["a"],CountTo:s["a"],ChartPie:l["b"],ChartBar:l["a"]},data:function(){return{curNav:"",pageName:"",lang:"",navList:u["b"],icons:["navigate","keypad","analytics","paper","basket-outline","bug-outline","contacts-outline"].map(function(t){return"ios-".concat(t)}),inforCardData:[{title:"newCreation",icon:"md-person-add",count:803,color:"#2d8cf0"},{title:"clickTotal",icon:"md-locate",count:23432,color:"#19be6b"},{title:"newTag",icon:"md-help-circle",count:142,color:"#ff9900"},{title:"shareTotal",icon:"md-share",count:657,color:"#ed3f14"}],pieData:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:1548,name:"搜索引擎"}],barData:{Mon:13253,Tue:34235,Wed:26321,Thu:12340,Fri:24643,Sat:1322,Sun:1324}}},computed:Object(n["a"])({},Object(i["b"])({user:function(t){return t.User}})),watch:{$route:{handler:function(t){var a=t.path,e=a.match(/\/([^\/]*)/);this.pageName=""===e[1]?"Dashboard":this.$t("header.nav."+e[1]),this.curNav=a},immediate:!0}},methods:{getLangInforTitle:function(t){return this.$t("dashboard.".concat(t))}}},m=d,p=(e("02ec"),e("2877")),h=Object(p["a"])(m,r,o,!1,null,null,null);h.options.__file="report.vue";a["default"]=h.exports}}]);
//# sourceMappingURL=index-report.01e201bb.js.map