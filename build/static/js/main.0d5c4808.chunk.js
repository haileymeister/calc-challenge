(this["webpackJsonpcalc-challenge"]=this["webpackJsonpcalc-challenge"]||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(21),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),firebase_app__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),firebase_database__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(23),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),App=function(_Component){Object(_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_Component);var _super=Object(_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(props){var _this;return Object(_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),_this=_super.call(this,props),_this.ref=firebase_app__WEBPACK_IMPORTED_MODULE_7__.a.database().ref("/"),_this.updateValue=function(_){return _=_,console.log(_),_},_this.handleChange=function(_){_this.setState({currentEquation:_.target.value})},_this.result=function(){var result=eval(_this.state.currentEquation);return result},_this.addToFirebase=function(){var _=_this.state.currentEquation+"="+_this.result();_this.setState({currentEquation:_}),_this.ref.push({equation:_})},_this.updateState=function(){_this.ref.on("value",(function(_){var e=_.val(),t=Object.keys(e).map((function(_){return Object(_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({key:_},e[_])}));_this.setState({pastEquations:t})}))},_this.resetForm=function(){document.querySelector("#equation").value=""},_this.showValues=function(){document.querySelector("#previous").style.display="block",_this.displayValues()},_this.displayValues=function(){var _=document.querySelector("#previous"),e="",t=_this.state.pastEquations.reverse();if(console.log(t),t.length>10)for(var a=0;a<10;a++)e+=" "+Object.values(t)[a].equation+"<br>";else for(var s=0;s<t.length;s++)e+=" "+Object.values(t)[s].equation+"<br>";_.innerHTML=e},_this.handleClick=function(_){_.preventDefault(),_this.showValues(),_this.result(),_this.addToFirebase(),_this.showValues(),_this.resetForm(),_this.setState({currentEquation:""})},_this.state={pastEquations:[],currentEquation:""},_this}return Object(_Users_haileymeister_VisualStudio_calc_challenge_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"componentDidMount",value:function(){var _=this;this.ref.on("value",(function(e){var t=[];e.forEach((function(_){var e=_.val();t.push(e)})),_.setState({pastEquations:t}),_.showValues()}))}},{key:"componentWillUnmount",value:function(){this.ref.off()}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"calculator",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"flex-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"flex-item",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form",{id:"input-form",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label",{htmlFor:"calc",id:"math-lab",children:"Enter a math problem:"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input",{type:"text",id:"equation",name:"input-bar",className:"math-input",placeholder:"type here",value:this.state.value,onChange:this.handleChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input",{type:"submit",value:"Evaluate",className:"submit-button","aria-label":"submit button",onClick:this.handleClick})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("section",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p",{children:"Previous Problems"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{id:"previous",className:"answer-list"})})]})})]})})})}}]),App}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=App},20:function(_,e,t){},21:function(_,e,t){},28:function(_,e,t){"use strict";t.r(e);var a=t(5),s=t.n(a),r=t(9),i=t.n(r),n=(t(20),t(10)),l=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;t(_),a(_),s(_),r(_),i(_)}))},c=t(7),u=t(2);c.a.initializeApp({apiKey:"AIzaSyD_E2EZMnErGgYbnCRYEZoDyh8ItcSeEBM",authDomain:"calc-challenge.firebaseapp.com",databaseURL:"https://calc-challenge-default-rtdb.firebaseio.com",projectId:"calc-challenge",storageBucket:"calc-challenge.appspot.com",messagingSenderId:"1024475497479",appId:"1:1024475497479:web:e102eb7c82fadaa2bad6a2"}),i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(n.a,{})}),document.getElementById("root")),l()}},[[28,1,2]]]);
//# sourceMappingURL=main.0d5c4808.chunk.js.map