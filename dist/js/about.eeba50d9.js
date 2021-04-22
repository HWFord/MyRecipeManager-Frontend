(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2d11":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"recipe"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/auth/recipes"}},[t._v(" Recipes ")])],1),a("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[t._v(t._s(t.recipe.title))])])])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 text-left"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("h4",[t._v(t._s(t.recipe.title))])]),a("div",{staticClass:"col-2"},[a("router-link",{attrs:{to:{name:"UpdateRecipe",params:{recipeId:t.recipe.id}}}},[a("button",{staticClass:"btn btn-secondary btn-sm w-100",attrs:{type:"button"}},[t._v("Update recipe")])])],1),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-danger btn-sm w-100",attrs:{type:"button"},on:{click:t.deleteRecipe}},[t._v("Delete recipe")])])]),a("small",[t._v(t._s(t.recipe.description))]),a("table",{staticClass:" mt-3"},[a("tr",[a("th",{staticClass:"pr-2"},[t._v("Estimated time of preparation")]),a("td",[t._v(t._s(t.recipe.timeOfPrepa)+" min")])]),a("tr",[a("th",{staticClass:"pr-2"},[t._v("Difficulty level")]),a("td",[t._v(t._s(t.recipe.difficultyLvl)+"/5")])]),a("tr",[a("th",{staticClass:"pr-2"},[t._v("Creation date")]),a("td",[t._v(t._s(t.recipe.creationDate))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"text-left col-md-4 col-sm-12 pt-3"},[a("th",{staticClass:" lead"},[t._v("List of ingredients:")]),a("table",{staticClass:"table table-striped table-hover"},[a("thead",[a("tr",[a("th",[a("router-link",{attrs:{to:{name:"Ingredients",params:{recipeId:t.recipe.id}}}},[t._v(" Ingredients ")])],1)])]),a("tbody",t._l(t.ingredients,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))])])})),0)])]),a("div",{staticClass:"text-left col-md-8 col-sm-12 pt-3"},[a("th",{staticClass:"lead"},[t._v("Cooking Instructions:")]),a("table",{staticClass:"table table-striped table-hover"},[a("tbody",[a("tr",[a("td",[t._v(t._s(t.recipe.cookingInstruction))])])])])])])])])])])},s=[],c=(a("b0c0"),a("99af"),a("1021")),r=a("bc3a"),n=a.n(r),l={name:"Recipe",data:function(){return{recipeId:"",recipe:{},ingredients:[],config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.recipeId=this.$route.params.recipeId,this.getRecipe(),this.getIngredients(),this.name=JSON.parse(localStorage.getItem("userData")).name},methods:{getRecipe:function(){var t=this;console.log(this.recipeId),n.a.get("".concat(c["a"].baseURL,"/auth/recipe/").concat(this.recipeId),this.config).then((function(e){t.recipe=e.data,console.log(t.recipe)}))},getIngredients:function(){var t=this;n.a.get("".concat(c["a"].baseURL,"/auth/recipe/").concat(this.recipeId,"/ingredients"),this.config).then((function(e){t.ingredients=e.data,console.log(t.ingredients)}))},deleteRecipe:function(){n.a.delete("".concat(c["a"].baseURL,"/auth/recipe/").concat(this.recipeId),this.config).then((function(t){console.log(t),window.location="/auth/recipes"}))}}},o=l,d=a("2877"),p=Object(d["a"])(o,i,s,!1,null,null,null);e["default"]=p.exports},9637:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"recipes"}},[t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 mt-4"},[a("div",{staticClass:"col-8 text-left d-inline-block"},[a("h3",[t._v("Recipes added by "+t._s(t.name))])]),a("div",{staticClass:"col-4 text-right d-inline-block"},[a("router-link",{attrs:{to:{name:"AddRecipe"}}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Add recipe")])])],1)]),t._l(t.recipes,(function(e){return a("div",{key:e.id},[t.userId==e.owner?a("div",[a("div",{},[a("div",{staticClass:"card mt-4 text-center"},[a("div",{staticClass:"card-body pt-3 "},[a("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("div",{staticClass:"col-12"},[a("router-link",{attrs:{to:{name:"Recipe",params:{recipeId:e.id}}}},[a("button",{staticClass:"btn btn-secondary btn-sm w-100 my-2",attrs:{type:"button"}},[t._v("See recipe")])])],1)]),a("div",{staticClass:"card-footer text-muted"},[t._v(" "+t._s(t.recipes[0].created)+" ")])])])]):a("div",{staticStyle:{display:"none"}})])}))],2)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[t._v("Recipes")])])])])])])}],c=(a("b0c0"),a("1021")),r=a("bc3a"),n=a.n(r),l={name:"Recipes",data:function(){return{userId:"",recipeId:"",recipes:[],name:"",config:{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}}},created:function(){this.userId=JSON.parse(localStorage.getItem("userData"))._id,this.recipeId=this.$route.params.recipeId,this.getRecipes(),this.name=JSON.parse(localStorage.getItem("userData")).name},methods:{getRecipes:function(){var t=this;n.a.get("".concat(c["a"].baseURL,"/auth/recipe"),this.config).then((function(e){t.recipes=e.data,console.log(t.recipes)}))}}},o=l,d=a("2877"),p=Object(d["a"])(o,i,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=about.eeba50d9.js.map