(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["categories"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(n(t))}},"0cb2":function(t,e,r){var n=r("7b0b"),i=Math.floor,a="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,s,l,u){var d=r+t.length,f=s.length,p=c;return void 0!==l&&(l=n(l),p=o),a.call(u,p,(function(n,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(d);case"<":o=l[a.slice(1,-1)];break;default:var c=+a;if(0===c)return n;if(c>f){var u=i(c/10);return 0===u?n:u<=f?void 0===s[u-1]?a.charAt(1):s[u-1]+a.charAt(1):n}o=s[c-1]}return void 0===o?"":o}))}},1415:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"AddRecipe"}},[r("div",{staticClass:"container "},[r("div",[r("h2",[t._v("Add Ingredient "+t._s(t.recipeId)+" ")]),r("form",{staticClass:"pt-3 text-left"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{ref:"name",staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Name"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"price"}},[t._v("Price")]),r("input",{ref:"price",staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"price of ingredient"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("input",{ref:"description",staticClass:"form-control",attrs:{type:"text",id:"price",placeholder:"description"}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addIngredient}},[t._v("Add ingredient")])])])])])},i=[],a=(r("99af"),r("b0c0"),r("a4d3"),r("e01a"),r("bc3a")),o=r.n(a),c=r("1021"),s={name:"AddRecipe",data:function(){return{recipeId:"",name:"",price:"",decription:"",config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.recipeId=this.$route.params.recipeId},methods:{addIngredient:function(){var t=this;o.a.post("".concat(c["a"].baseURL,"/auth/recipe/").concat(t.recipeId,"/ingredients"),{name:t.$refs.name.value,price:t.$refs.price.value,description:t.$refs.description.value,owner:t.recipeId},t.config).then((function(e){console.log(e),window.location="/auth/recipes/".concat(t.recipeId,"/ingredients")})).catch((function(e){console.log(e),t.error="Ingredient not added"}))}}},l=s,u=r("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"2fef":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 text-center"},[r("router-link",{attrs:{to:"/auth/register"}},[t._v("Register")]),t._v(" | "),r("router-link",{attrs:{to:"/auth/login"}},[t._v("Login")])],1)])])])},i=[],a={name:"Auth"},o=a,c=r("2877"),s=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=s.exports},"4faa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"updateRecipe"}},[r("div",{staticClass:"container "},[r("div",[r("h2",[t._v("Update Ingredient ")]),r("form",{staticClass:"pt-3 text-left"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{ref:"name",staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Name"},domProps:{value:t.ingredient.name}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Price")]),r("input",{ref:"price",staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"price of ingredient"},domProps:{value:t.ingredient.price}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("description")]),r("input",{ref:"description",staticClass:"form-control",attrs:{type:"text",id:"price",placeholder:"price of ingredient"},domProps:{value:t.ingredient.description}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateIngredient}},[t._v("Update ingredient")])])])])])},i=[],a=(r("99af"),r("b0c0"),r("a4d3"),r("e01a"),r("bc3a")),o=r.n(a),c=r("1021"),s={name:"UpdateRecipe",data:function(){return{ingredientId:"",ingredient:{},recipeId:"",config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.recipeId=this.$route.params.recipeId,this.ingredientId=this.$route.params.ingredientId,this.getRecipe(),this.getIngredient()},methods:{getRecipe:function(){var t=this;console.log(this.recipeId),o.a.get("".concat(c["a"].baseURL,"/auth/recipe/").concat(this.recipeId),this.config).then((function(e){t.recipe=e.data,console.log(t.recipe)}))},getIngredient:function(){var t=this;o.a.get("".concat(c["a"].baseURL,"/auth/recipe/").concat(this.recipeId,"/ingredients/").concat(this.ingredientId),this.config).then((function(e){t.ingredient=e.data,console.log(t.ingredient)}))},updateIngredient:function(){var t=this;o.a.patch("".concat(c["a"].baseURL,"/auth/recipe/").concat(this.recipeId,"/ingredients/").concat(this.ingredientId),{name:this.$refs.name.value,price:this.$refs.price.value,description:this.$refs.description.value,recipeId:t.recipeId},t.config).then((function(e){console.log(e),window.location="/auth/recipes/".concat(t.recipeId,"/ingredients/").concat(t.ingredientId)})).catch((function(e){console.log(e),t.error="Ingredient not updated"}))}}},l=s,u=r("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),a=r("50c4"),o=r("a691"),c=r("1d80"),s=r("8aa5"),l=r("0cb2"),u=r("14c3"),d=Math.max,f=Math.min,p=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(r,n){var i=c(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!h&&g||"string"===typeof n&&-1===n.indexOf(v)){var c=r(e,t,this,n);if(c.done)return c.value}var m=i(t),b=String(this),y="function"===typeof n;y||(n=String(n));var I=m.global;if(I){var w=m.unicode;m.lastIndex=0}var x=[];while(1){var _=u(m,b);if(null===_)break;if(x.push(_),!I)break;var C=String(_[0]);""===C&&(m.lastIndex=s(b,a(m.lastIndex),w))}for(var E="",R=0,S=0;S<x.length;S++){_=x[S];for(var L=String(_[0]),O=d(f(o(_.index),b.length),0),k=[],P=1;P<_.length;P++)k.push(p(_[P]));var $=_.groups;if(y){var j=[L].concat(k,O,b);void 0!==$&&j.push($);var N=String(n.apply(void 0,j))}else N=l(L,b,O,k,$,n);O>=R&&(E+=b.slice(R,O)+N,R=O+L.length)}return E+b.slice(R)}]}))},6236:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"updateRecipe"}},[r("div",{staticClass:"container "},[r("div",[r("h2",[t._v("Update "+t._s(t.recipe.title))]),r("form",{staticClass:"pt-3 text-left"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Title")]),r("input",{ref:"title",staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Title"},domProps:{value:t.recipe.title}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("input",{ref:"description",staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"Description of the recipe"},domProps:{value:t.recipe.description}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"timeOfPrepa"}},[t._v("Estimated time of preparation ")]),r("input",{ref:"timeOfPrepa",staticClass:"form-control",attrs:{type:"number",id:"timeOfPrepa",placeholder:"0"},domProps:{value:t.recipe.timeOfPrepa}}),r("small",{staticClass:"font-weight-bold text-info"},[t._v("Please enter a time in minutes")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"difficultyLvl"}},[t._v("Difficulty level ")]),r("input",{ref:"difficultyLvl",staticClass:"form-control",attrs:{type:"number",id:"difficultyLvl",placeholder:"0",min:"1",max:"10"},domProps:{value:t.recipe.difficultyLvl}}),r("small",{staticClass:"font-weight-bold text-info"},[t._v("Enter the difficulty on a scale of one to ten")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cookingInstructions"}},[t._v("Cooking instructions")]),r("input",{ref:"cookingInstructions",staticClass:"form-control",attrs:{type:"text",id:"cookingInstructions",placeholder:"Enter your cooking instructions here"},domProps:{value:t.recipe.cookingInstructions}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateRecipe}},[t._v("Update recipe")])])])])])},i=[],a=(r("99af"),r("a4d3"),r("e01a"),r("bc3a")),o=r.n(a),c=r("1021"),s={name:"UpdateRecipe",data:function(){return{recipe:[],recipeId:"",userId:"",title:"",description:"",timeOfPrepa:"",difficultyLvl:"",cookingInstructions:"",config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.userId=JSON.parse(localStorage.getItem("userData"))._id,this.recipeId=this.$route.params.recipeId,this.getRecipe()},methods:{getRecipe:function(){var t=this;console.log(this.recipeId),o.a.get("".concat(c["a"].baseURL,"/auth/recipe/").concat(this.recipeId),this.config).then((function(e){t.recipe=e.data,console.log(t.recipe)}))},updateRecipe:function(){var t=this;o.a.patch("".concat(c["a"].baseURL,"/auth/recipe/")+t.recipeId,{title:this.$refs.title.value,description:this.$refs.description.value,timeOfPrepa:this.$refs.timeOfPrepa.value,difficultyLvl:this.$refs.difficultyLvl.value,cookingInstructions:this.$refs.cookingInstructions.value,owner:this.userId},t.config).then((function(t){console.log(t),window.location="/auth/recipes"})).catch((function(e){console.log(e),t.error="Recipe not added"}))}}},l=s,u=r("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},"73cf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-left",attrs:{id:"Login"}},[r("div",{staticClass:"container"},[r("div",[r("h2",[t._v("Register")]),r("small",[t._v("Register a new user")]),r("form",{staticClass:"pt-3"},[t._m(0),t._m(1),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.register}},[t._v("Register")])])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"nameInputRegister"}},[t._v("Name")]),r("input",{staticClass:"form-control",attrs:{type:"text",id:"nameInputRegister",placeholder:"Enter Name"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"passwordInputRegister"}},[t._v("Password")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"passwordInputRegister",placeholder:"Password"}})])}];r("d3b7");function a(t,e,r,n,i,a,o){try{var c=t[a](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function c(t){a(o,n,i,c,s,"next",t)}function s(t){a(o,n,i,c,s,"throw",t)}c(void 0)}))}}r("96cf"),r("ac1f"),r("5319");var c={data:function(){return{name:"",password:""}},methods:{register:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,e.next=3,t.$axios.$post("/auth/register",{name:t.nameInputLogin,password:t.passwordInputLogin}).then((function(t){console.log(t),localStorage.setItem("jwt",t.accessToken),r.$nuxt.$router.replace({path:"/auth/login"})})).catch((function(t){console.log(t),r.error="name or password incorrect."}));case 3:case"end":return e.stop()}}),e)})))()}}},s=c,l=r("2877"),u=Object(l["a"])(s,n,i,!1,null,null,null);e["default"]=u.exports},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},"753a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"ingredients"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:"/auth/recipes"}},[t._v(" Recipes ")])],1),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"Recipe",params:{recipeId:t.recipeId}}}},[t._v(" "+t._s(t.recipe.title)+" ")])],1),r("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[t._v("Ingredients")])])])])])]),r("div",{staticClass:"container text-left"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 mt-4"},[r("div",{staticClass:"col-8 text-left d-inline-block"},[r("h3",[t._v("Ingredients for "+t._s(t.recipe.title))])]),r("div",{staticClass:"col-4 text-right d-inline-block"},[r("router-link",{attrs:{to:{name:"AddIngredient"}}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Add ingredient")])])],1)])]),r("div",{staticClass:"row"},t._l(t.ingredients,(function(e){return r("div",{key:e.id,staticClass:"col-md-3 col-sm-6"},[r("div",{staticClass:"card mt-4 text-center"},[r("div",{staticClass:"card-header"},[r("h4",{staticClass:"card-title lead"},[t._v(t._s(e.name))])]),r("div",{staticClass:"card-body pt-3"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.price))]),r("router-link",{attrs:{to:{name:"Ingredient",params:{recipeId:t.recipeId,ingredientId:e._id}}}},[t._v(" See ingredient ")])],1)])])})),0)])])},i=[],a=(r("b0c0"),r("99af"),r("1021")),o=r("bc3a"),c=r.n(o),s={name:"Ingredients",data:function(){return{recipeId:"",ingredients:[],recipe:{},config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.recipeId=this.$route.params.recipeId,this.getRecipe(),this.getIngredients(),this.name=JSON.parse(localStorage.getItem("userData")).name},methods:{getRecipe:function(){var t=this;console.log(this.recipeId),c.a.get("".concat(a["a"].baseURL,"/auth/recipe/").concat(this.recipeId),this.config).then((function(e){t.recipe=e.data,console.log(t.recipe)}))},getIngredients:function(){var t=this;c.a.get("".concat(a["a"].baseURL,"/auth/recipe/").concat(this.recipeId,"/ingredients"),this.config).then((function(e){t.ingredients=e.data,console.log(t.ingredients)}))}}},l=s,u=r("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=r("5692"),o=RegExp.prototype.exec,c=a("native-string-replace",String.prototype.replace),s=o,l=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=l||d||u;f&&(s=function(t){var e,r,i,a,s=this,f=u&&s.sticky,p=n.call(s),h=s.source,g=0,v=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),r=new RegExp("^(?:"+h+")",p)),d&&(r=new RegExp("^"+h+"$(?!\\s)",p)),l&&(e=s.lastIndex),i=o.call(f?r:s,v),f?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=s.lastIndex,s.lastIndex+=i[0].length):s.lastIndex=0:l&&i&&(s.lastIndex=s.global?i.index+i[0].length:e),d&&i&&i.length>1&&c.call(i[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=s},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch($){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=E(t,r,o),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch($){return{type:"throw",arg:$}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function b(){}var y={};y[a]=function(){return this};var I=Object.getPrototypeOf,w=I&&I(I(k([])));w&&w!==r&&n.call(w,a)&&(y=w);var x=b.prototype=v.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(i,a,o,c){var s=u(t[i],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,c)}))}c(s.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=d;return function(i,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return P()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var c=R(o,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?h:f,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function R(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=x.constructor=b,b.constructor=m,m.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(C.prototype),C.prototype[o]=function(){return this},t.AsyncIterator=C,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new C(l(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(x),s(x,c,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("c430"),c=r("83ab"),s=r("4930"),l=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),h=r("825a"),g=r("7b0b"),v=r("fc6a"),m=r("c04e"),b=r("5c6c"),y=r("7c73"),I=r("df75"),w=r("241c"),x=r("057f"),_=r("7418"),C=r("06cf"),E=r("9bf2"),R=r("d1e7"),S=r("9112"),L=r("6eeb"),O=r("5692"),k=r("f772"),P=r("d012"),$=r("90e3"),j=r("b622"),N=r("e538"),U=r("746f"),A=r("d44e"),T=r("69f3"),D=r("b727").forEach,B=k("hidden"),F="Symbol",G="prototype",J=j("toPrimitive"),z=T.set,K=T.getterFor(F),Y=Object[G],M=i.Symbol,X=a("JSON","stringify"),Q=C.f,W=E.f,q=x.f,H=R.f,V=O("symbols"),Z=O("op-symbols"),tt=O("string-to-symbol-registry"),et=O("symbol-to-string-registry"),rt=O("wks"),nt=i.QObject,it=!nt||!nt[G]||!nt[G].findChild,at=c&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(Y,e);n&&delete Y[e],W(t,e,r),n&&t!==Y&&W(Y,e,n)}:W,ot=function(t,e){var r=V[t]=y(M[G]);return z(r,{type:F,tag:t,description:e}),c||(r.description=e),r},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof M},st=function(t,e,r){t===Y&&st(Z,e,r),h(t);var n=m(e,!0);return h(r),d(V,n)?(r.enumerable?(d(t,B)&&t[B][n]&&(t[B][n]=!1),r=y(r,{enumerable:b(0,!1)})):(d(t,B)||W(t,B,b(1,{})),t[B][n]=!0),at(t,n,r)):W(t,n,r)},lt=function(t,e){h(t);var r=v(e),n=I(r).concat(ht(r));return D(n,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=m(t,!0),r=H.call(this,e);return!(this===Y&&d(V,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(V,e)||d(this,B)&&this[B][e])||r)},ft=function(t,e){var r=v(t),n=m(e,!0);if(r!==Y||!d(V,n)||d(Z,n)){var i=Q(r,n);return!i||!d(V,n)||d(r,B)&&r[B][n]||(i.enumerable=!0),i}},pt=function(t){var e=q(v(t)),r=[];return D(e,(function(t){d(V,t)||d(P,t)||r.push(t)})),r},ht=function(t){var e=t===Y,r=q(e?Z:v(t)),n=[];return D(r,(function(t){!d(V,t)||e&&!d(Y,t)||n.push(V[t])})),n};if(s||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),r=function(t){this===Y&&r.call(Z,t),d(this,B)&&d(this[B],e)&&(this[B][e]=!1),at(this,e,b(1,t))};return c&&it&&at(Y,e,{configurable:!0,set:r}),ot(e,t)},L(M[G],"toString",(function(){return K(this).tag})),L(M,"withoutSetter",(function(t){return ot($(t),t)})),R.f=dt,E.f=st,C.f=ft,w.f=x.f=pt,_.f=ht,N.f=function(t){return ot(j(t),t)},c&&(W(M[G],"description",{configurable:!0,get:function(){return K(this).description}}),o||L(Y,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:M}),D(I(rt),(function(t){U(t)})),n({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=M(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:u((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(g(t))}}),X){var gt=!s||u((function(){var t=M();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,X.apply(null,i)}})}M[G][J]||S(M[G],J,M[G].valueOf),A(M,F),P[B]=!0},a55b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-left",attrs:{id:"Register"}},[r("div",{staticClass:"container"},[r("div",[r("h2",[t._v("Login")]),r("small",[t._v("Login as an existing user")]),r("form",{staticClass:"pt-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"nameInputLogin"}},[t._v("Name")]),r("input",{ref:"name",staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter Name"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"passwordInputLogin"}},[t._v("Password")]),r("input",{ref:"password",staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.login}},[t._v("Login")])])])])])},i=[],a=(r("b0c0"),r("bc3a")),o=r.n(a),c=r("1021"),s={name:"Login",data:function(){return{name:"",password:""}},methods:{login:function(){var t=this;o.a.post("".concat(c["a"].baseURL,"/auth/login"),{name:this.$refs.name.value,password:this.$refs.password.value}).then((function(t){localStorage.setItem("token",t.data.token),localStorage.setItem("userData",JSON.stringify(t.data.user));var e={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};o.a.get("".concat(c["a"].baseURL,"/auth"),e).then((function(t){console.log(t),window.location="/auth/recipes"})).catch((function(t){console.log(t)}))})).catch((function(e){console.log(e),t.error="login ou mot de passe incorrect."}))}}},l=s,u=r("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),c=r("65f0"),s=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,f=7==t,p=5==t||d;return function(h,g,v,m){for(var b,y,I=a(h),w=i(I),x=n(g,v,3),_=o(w.length),C=0,E=m||c,R=e?E(h,_):r||f?E(h,0):void 0;_>C;C++)if((p||C in w)&&(b=w[C],y=x(b,C,I),t))if(e)R[C]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return C;case 2:s.call(R,b)}else switch(t){case 4:return!1;case 7:s.call(R,b)}return d?-1:l||u?u:R}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c6fa:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"ingredient"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:"/auth/recipes"}},[t._v(" Recipes ")])],1),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"Recipe",params:{recipeId:t.recipeId}}}},[t._v(" "+t._s(t.recipe.title)+" ")])],1),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"Ingredients",params:{recipeId:t.recipeId}}}},[t._v(" Ingredients ")])],1),r("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[t._v(t._s(t.ingredient.name))])])])])])]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 text-left"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-8"},[r("h4",[t._v(t._s(t.ingredient.name))])]),r("div",{staticClass:"col-2"},[r("router-link",{attrs:{to:{name:"UpdateIngredient",params:{recipeId:t.recipeId,ingredientId:t.ingredientId}}}},[r("button",{staticClass:"btn btn-secondary btn-sm w-100",attrs:{type:"button"}},[t._v("Update Ingredient")])])],1),r("div",{staticClass:"col-2"},[r("button",{staticClass:"btn btn-danger btn-sm w-100",attrs:{type:"button"},on:{click:t.deleteIngredient}},[t._v("Delete Ingredient")])])]),r("table",{staticClass:" mt-3"},[r("tr",[r("th",{staticClass:"pr-2"},[t._v("Price")]),r("td",[t._v(t._s(t.ingredient.price)+"€")])])])])])])])},i=[],a=(r("b0c0"),r("99af"),r("1021")),o=r("bc3a"),c=r.n(o),s={name:"Ingredient",data:function(){return{recipeId:"",ingredientId:"",ingredient:{},recipe:{},config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.recipeId=this.$route.params.recipeId,this.ingredientId=this.$route.params.ingredientId,this.getRecipe(),this.getIngredient(),this.name=JSON.parse(localStorage.getItem("userData")).name},methods:{getRecipe:function(){var t=this;console.log(this.recipeId),c.a.get("".concat(a["a"].baseURL,"/auth/recipe/").concat(this.recipeId),this.config).then((function(e){t.recipe=e.data,console.log(t.recipe)}))},getIngredient:function(){var t=this;c.a.get("".concat(a["a"].baseURL,"/auth/recipe/").concat(this.recipeId,"/ingredients/").concat(this.ingredientId),this.config).then((function(e){t.ingredient=e.data,console.log(t.ingredient)}))},deleteIngredient:function(){c.a.delete("".concat(a["a"].baseURL,"/auth/recipe/").concat(this.recipeId,"/ingredients/").concat(this.ingredientId),this.config).then((function(t){console.log(t),window.location="/auth/recipes"}))}}},l=s,u=r("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),o=r("9112"),c=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),u=a("replace"),d=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,u){var p=a(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!h||!g||"replace"===t&&(!s||!l||d)||"split"===t&&!f){var v=/./[p],m=r(p,""[t],(function(t,e,r,n,i){return e.exec===RegExp.prototype.exec?h&&!i?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=m[0],y=m[1];n(String.prototype,t,b),n(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}u&&o(RegExp.prototype[p],"sham",!0)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),a=r("da84"),o=r("5135"),c=r("861d"),s=r("9bf2").f,l=r("e893"),u=a.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var p=f.prototype=u.prototype;p.constructor=f;var h=p.toString,g="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(o(d,t))return"";var r=g?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var n=r("b622");e.f=n},f23a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"addRecipe"}},[r("div",{staticClass:"container "},[r("div",[r("h2",[t._v("Add a new recipe")]),r("p",[t._v(t._s(t.userId))]),r("form",{staticClass:"pt-3 text-left"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Title")]),r("input",{ref:"title",staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Title"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("input",{ref:"description",staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"Description of the recipe"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"timeOfPrepa"}},[t._v("Estimated time of preparation ")]),r("input",{ref:"timeOfPrepa",staticClass:"form-control",attrs:{type:"number",id:"timeOfPrepa",placeholder:"0"}}),r("small",{staticClass:"font-weight-bold text-info"},[t._v("Please enter a time in minutes")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"difficultyLvl"}},[t._v("Difficulty level ")]),r("input",{ref:"difficultyLvl",staticClass:"form-control",attrs:{type:"number",id:"difficultyLvl",placeholder:"0",min:"1",max:"10"}}),r("small",{staticClass:"font-weight-bold text-info"},[t._v("Enter the difficulty on a scale of one to ten")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cookingInstructions"}},[t._v("Cooking instructions")]),r("input",{ref:"cookingInstructions",staticClass:"form-control",attrs:{type:"text",id:"cookingInstructions",placeholder:"Enter your cooking instructions here"}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addRecipe}},[t._v("Add recipe")])])])])])},i=[],a=(r("a4d3"),r("e01a"),r("bc3a")),o=r.n(a),c=r("1021"),s={name:"AddRecipe",data:function(){return{userId:"",title:"",description:"",timeOfPrepa:"",difficultyLvl:"",cookingInstructions:"",config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.userId=JSON.parse(localStorage.getItem("userData"))._id},methods:{addRecipe:function(){var t=this;o.a.post("".concat(c["a"].baseURL,"/auth/recipe"),{title:this.$refs.title.value,description:this.$refs.description.value,timeOfPrepa:this.$refs.timeOfPrepa.value,difficultyLvl:this.$refs.difficultyLvl.value,cookingInstructions:this.$refs.cookingInstructions.value,owner:this.userId},t.config).then((function(t){console.log(t),window.location="/auth/recipes"})).catch((function(e){console.log(e),t.error="Recipe not added"}))}}},l=s,u=r("2877"),d=Object(u["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=categories.3d7ba522.js.map