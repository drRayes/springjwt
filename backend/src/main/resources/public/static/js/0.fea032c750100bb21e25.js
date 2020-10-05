webpackJsonp([0],{"07Us":function(t,e){},Atqm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mtWM"),i=n.n(a),r=n("NYxO"),u={name:"CreateEquip",data:function(){return{currentEquip:{name:"",serialNumber:"",location:{}},status:" "}},computed:Object(r.b)(["getLocations"]),methods:{createEquip:function(){var t=this;i.a.post("http://localhost:8088/api/equip/createEquip",this.currentEquip).then(function(e){t.status="Equip "+e.data.name+" was created successfully"})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(t._s(t.status))]),t._v(" "),n("table",[t._m(0),t._v(" "),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentEquip.name,expression:"currentEquip.name"}],domProps:{value:t.currentEquip.name},on:{input:function(e){e.target.composing||t.$set(t.currentEquip,"name",e.target.value)}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentEquip.serialNumber,expression:"currentEquip.serialNumber"}],domProps:{value:t.currentEquip.serialNumber},on:{input:function(e){e.target.composing||t.$set(t.currentEquip,"serialNumber",e.target.value)}}})]),t._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentEquip.location,expression:"currentEquip.location"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.currentEquip,"location",e.target.multiple?n:n[0])}}},t._l(t.getLocations,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e.name))])}),0)]),t._v(" "),n("td",[n("button",{on:{click:t.createEquip}},[t._v("Create equip")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Name")]),e("th",[this._v("Serial number")]),this._v(" "),e("th",[this._v("Location")])])}]},s=n("VU/8")(u,o,!1,null,null,null).exports,c={name:"CreateLocation",data:function(){return{name:"",status:"Status of operation"}},methods:{createLocation:function(){var t=this;return i.a.post("http://localhost:8088/api/equip/createLocation",{name:this.name}).then(function(e){e.data.name===t.name&&(t.status="Location "+e.data.name+" was created successfully!")})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(t._s(t.status))]),t._v(" "),n("table",[t._m(0),t._v(" "),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("td",[n("button",{on:{click:t.createLocation}},[t._v("Create location")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Name")])])}]},p=n("VU/8")(c,l,!1,null,null,null).exports,m={name:"SearchEquip",data:function(){return{tab:1,name:"",serialNumber:""}},computed:Object(r.b)(["getEquipList"]),methods:{clickTab:function(){this.$store.dispatch("clearEquipList"),1==this.tab?this.tab=2:this.tab=1},searchByName:function(){this.$store.dispatch("fetchEquipByName",this.name)},searchBySerialNumber:function(){this.$store.dispatch("fetchEquipBySerialNumber",this.serialNumber)},selectCurrentEquip:function(t){this.$store.dispatch("setEquip",this.getEquipList[t.target.selectedIndex])}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tab"},[n("button",{on:{click:t.clickTab}},[t._v("Search by name")]),t._v(" "),n("button",{on:{click:t.clickTab}},[t._v("Search by serial number")])]),t._v(" "),1==t.tab?n("div",{staticClass:"tabcontent"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.searchByName}},[t._v("Search by name")])]):t._e(),t._v(" "),2==t.tab?n("div",{staticClass:"tabcontent"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.serialNumber,expression:"serialNumber"}],domProps:{value:t.serialNumber},on:{input:function(e){e.target.composing||(t.serialNumber=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.searchBySerialNumber}},[t._v("Search by serial number")])]):t._e(),t._v(" "),t.getEquipList.length>0?n("table",{staticClass:"tabcontent"},[t._m(0),t._v(" "),t._l(t.getEquipList,function(e,a){return n("tr",{key:e.id,on:{click:t.setCurrentEquip}},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.serialNumber))]),t._v(" "),n("td",[t._v(t._s(e.location.name))])])})],2):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Serial number")]),this._v(" "),e("th",[this._v("Location")])])}]};var d=n("VU/8")(m,v,!1,function(t){n("i/nH")},null,null).exports,_={components:{SearchEquip:d},name:"UpdateEquip",data:function(){return{currentEquip:{}}},methods:{updateEquip:function(){var t=this;i.a.post("http://localhost:8088/api/equip/updateEquip/",this.currentEquip).then(function(e){t.getCurrentEquip=e.data})}},computed:Object(r.b)(["getCurrentEquip","getLocations"]),mounted:function(){}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SearchEquip"),t._v(" "),n("div",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentEquip.name,expression:"currentEquip.name"}],domProps:{value:t.currentEquip.name},on:{input:function(e){e.target.composing||t.$set(t.currentEquip,"name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentEquip.serialNumber,expression:"currentEquip.serialNumber"}],domProps:{value:t.currentEquip.serialNumber},on:{input:function(e){e.target.composing||t.$set(t.currentEquip,"serialNumber",e.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentEquip.location,expression:"currentEquip.location"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.currentEquip,"location",e.target.multiple?n:n[0])}}},t._l(t.getLocations,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e.name))])}),0),t._v(" "),n("button",{on:{click:t.updateEquip}},[t._v("Update equip")])])])],1)},staticRenderFns:[]};var b={name:"BoardAdmin",components:{CreateLocation:p,CreateEquip:s,SearchEquip:d,UpdateEquip:n("VU/8")(_,h,!1,function(t){n("07Us")},null,null).exports},data:function(){return{tab:1}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tab"},[n("button",{on:{click:function(e){t.tab=1}}},[t._v("Create equip")]),t._v(" "),n("button",{on:{click:function(e){t.tab=2}}},[t._v("Create location")]),t._v(" "),n("button",{on:{click:function(e){t.tab=3}}},[t._v("Search equip")]),t._v(" "),n("button",{on:{click:function(e){t.tab=4}}},[t._v("Update equip")])]),t._v(" "),1==t.tab?n("div",{staticClass:"tabcontent"},[n("CreateEquip")],1):t._e(),t._v(" "),2==t.tab?n("div",{staticClass:"tabcontent"},[n("CreateLocation")],1):t._e(),t._v(" "),3==t.tab?n("div",{staticClass:"tabcontent"},[n("SearchEquip")],1):t._e(),t._v(" "),4==t.tab?n("div",{staticClass:"tabcontent"},[n("UpdateEquip")],1):t._e()])},staticRenderFns:[]};var q=n("VU/8")(b,f,!1,function(t){n("HMHS")},null,null);e.default=q.exports},HMHS:function(t,e){},"i/nH":function(t,e){}});
//# sourceMappingURL=0.fea032c750100bb21e25.js.map