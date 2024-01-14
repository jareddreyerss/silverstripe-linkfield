!function(){"use strict";var e={274:function(e,t,n){var r,l=(r=n(521))&&r.__esModule?r:{default:r};document.addEventListener("DOMContentLoaded",(()=>{(0,l.default)()}))},521:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(648)),l=u(n(809)),o=u(n(852)),i=u(n(117)),a=u(n(606));function u(e){return e&&e.__esModule?e:{default:e}}var s=()=>{r.default.component.registerMany({LinkPicker:l.default,LinkField:o.default,"LinkModal.FormBuilderModal":i.default,"LinkModal.InsertMediaModal":a.default})};t.default=s},852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LinkFieldContext=t.Component=void 0;var r=O(n(363)),l=n(827),o=n(624),i=(n(648),m(n(42))),a=m(n(809)),u=m(n(734)),s=m(n(264)),d=(m(n(686)),m(n(697))),c=O(n(123)),f=m(n(159)),p=m(n(510)),y=m(n(86)),v=m(n(754)),_=m(n(872)),k=m(n(902));function m(e){return e&&e.__esModule?e:{default:e}}function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}const g=(0,r.createContext)(null);t.LinkFieldContext=g;const b="SilverStripe\\LinkField\\Controllers\\LinkFieldController",C=e=>{var t;let{value:n=null,onChange:l,types:o={},actions:i,isMulti:c=!1,canCreate:y,ownerID:m,ownerClass:h,ownerRelation:O}=e;const[C,E]=(0,r.useState)({}),[R,M]=(0,r.useState)(0),[w,D]=(0,r.useState)(!1);let j=n;Array.isArray(j)||("number"==typeof j&&0!=j&&(j=[j]),j||(j=[])),(0,r.useEffect)((()=>{if(!R&&j.length>0){D(!0);const e=[];for(const t of j)e.push(`itemIDs[]=${t}`);const t=`${p.default.getSection(b).form.linkForm.dataUrl}?${e.join("&")}`;f.default.get(t).then((e=>e.json())).then((e=>{E(e),D(!1)})).catch((()=>{i.toasts.error(v.default._t("LinkField.FAILED_TO_LOAD_LINKS","Failed to load links")),D(!1)}))}}),[R,n&&n.length]);const I=()=>{M(0)},L=e=>{M(0);const t=[...j];t.includes(e)||t.push(e),l(c?t:t[0]),i.toasts.success(v.default._t("LinkField.SAVE_SUCCESS","Saved link"))},S=e=>{var t;let n=`${p.default.getSection(b).form.linkForm.deleteUrl}/${e}`;const r=_.default.parse(n),o=k.default.parse(r.query);o.ownerID=m,o.ownerClass=h,o.ownerRelation=O,n=_.default.format({...r,search:k.default.stringify(o)});const a=(null===(t=C[e])||void 0===t?void 0:t.versionState)||"",u=["draft","modified","published"].includes(a),s=u?v.default._t("LinkField.ARCHIVE_SUCCESS","Archived link"):v.default._t("LinkField.DELETE_SUCCESS","Deleted link"),d=u?v.default._t("LinkField.ARCHIVE_ERROR","Failed to archive link"):v.default._t("LinkField.DELETE_ERROR","Failed to delete link");f.default.delete(n,{},{"X-SecurityID":p.default.get("SecurityID")}).then((()=>i.toasts.success(s))).catch((()=>i.toasts.error(d)));const y={...C};delete y[e],E(y),l(c?Object.keys(y):0)},F=0===m,P=!F&&(c||0===Object.keys(C).length),T=!F&&Boolean(R),q=v.default._t("LinkField.SAVE_RECORD_FIRST","Cannot add links until the record has been saved");return w&&!F?r.default.createElement("div",{className:"link-field__loading"},r.default.createElement(s.default,null)):r.default.createElement(g.Provider,{value:{ownerID:m,ownerClass:h,ownerRelation:O,actions:i}},F&&r.default.createElement("div",{className:"link-field__save-record-first"},q),P&&r.default.createElement(a.default,{onModalSuccess:L,onModalClosed:I,types:o,canCreate:y}),r.default.createElement("div",null," ",(()=>{const e=[];for(const d of j){var t,n,l,i,a,s;if(!C[d])continue;const c=o.hasOwnProperty(null===(t=C[d])||void 0===t?void 0:t.typeKey)?o[null===(n=C[d])||void 0===n?void 0:n.typeKey]:{};e.push(r.default.createElement(u.default,{key:d,id:d,title:null===(l=C[d])||void 0===l?void 0:l.Title,description:null===(i=C[d])||void 0===i?void 0:i.description,versionState:null===(a=C[d])||void 0===a?void 0:a.versionState,typeTitle:c.title||"",typeIcon:c.icon,onDelete:S,onClick:()=>{M(d)},canDelete:!(null===(s=C[d])||void 0===s||!s.canDelete)}))}return e})()," "),T&&r.default.createElement(d.default,{types:o,typeKey:null===(t=C[R])||void 0===t?void 0:t.typeKey,isOpen:Boolean(R),onSuccess:L,onClosed:I,linkID:R}))};t.Component=C,C.propTypes={value:y.default.oneOfType([y.default.arrayOf(y.default.number),y.default.number]),onChange:y.default.func.isRequired,types:y.default.object.isRequired,actions:y.default.object.isRequired,isMulti:y.default.bool,canCreate:y.default.bool.isRequired,ownerID:y.default.number.isRequired,ownerClass:y.default.string.isRequired,ownerRelation:y.default.string.isRequired};var E=(0,l.compose)(i.default,(0,o.connect)(null,(e=>({actions:{toasts:(0,l.bindActionCreators)(c,e)}}))))(C);t.default=E},606:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n(754));var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(363)),l=s(n(475)),o=n(624),i=s(n(686)),a=s(n(86));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const c=e=>{let{type:t,editing:n,data:o,actions:i,onSubmit:a,...u}=e;if(!t)return!1;(0,r.useEffect)((()=>{n?i.initModal():i.reset()}),[n]);const s=o?{ID:o.FileID,Description:o.Title,TargetBlank:!!o.OpenInNew}:{};return r.default.createElement(l.default,d({isOpen:n,type:"insert-link",title:!1,bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--internal",fileAttributes:s,onInsert:e=>{let{ID:n,Description:r,TargetBlank:l}=e;return a({FileID:n,Title:r,OpenInNew:l,typeKey:t.key},"",(()=>{}))}},u))};c.propTypes={type:i.default.isRequired,editing:a.default.bool.isRequired,data:a.default.object.isRequired,actions:a.default.object.isRequired,onClick:a.default.func.isRequired};var f=(0,o.connect)((function(){return{}}),(function(e){return{actions:{initModal:()=>e({type:"INIT_FORM_SCHEMA_STACK",payload:{formSchema:{type:"insert-link",nextType:"admin"}}}),reset:()=>e({type:"RESET"})}}}))(c);t.default=f},117:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(363)),l=d(n(912)),o=n(852),i=d(n(872)),a=d(n(902)),u=d(n(510)),s=d(n(86));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}const f=(e,t)=>{const{schemaUrl:n}=u.default.getSection("SilverStripe\\LinkField\\Controllers\\LinkFieldController").form.linkForm,l=i.default.parse(n),s=a.default.parse(l.query);s.typeKey=e;const{ownerID:d,ownerClass:c,ownerRelation:f}=(0,r.useContext)(o.LinkFieldContext);s.ownerID=d,s.ownerClass=c,s.ownerRelation=f;for(const e of["href","path","pathname"])l[e]=`${l[e]}/${t}`;return i.default.format({...l,search:a.default.stringify(s)})},p=e=>{let{typeTitle:t,typeKey:n,linkID:i=0,isOpen:a,onSuccess:u,onClosed:s}=e;const{actions:d}=(0,r.useContext)(o.LinkFieldContext);if(!n)return!1;return r.default.createElement(l.default,{title:t,isOpen:a,schemaUrl:f(n,i),identifier:"Link.EditingLinkInfo",onSubmit:async(e,t,n)=>{let r=null;try{r=await n()}catch(e){return d.toasts.error(i18n._t("LinkField.FAILED_TO_SAVE_LINK","Failed to save link")),Promise.resolve()}if(!r.id.match(/\/schema\/linkfield\/([0-9]+)/)){const e=r.id.match(/\/linkForm\/([0-9]+)/),t=parseInt(e[1],10);u(t)}return Promise.resolve()},onClosed:s})};p.propTypes={typeTitle:s.default.string.isRequired,typeKey:s.default.string.isRequired,linkID:s.default.number,isOpen:s.default.bool.isRequired,onSuccess:s.default.func.isRequired,onClosed:s.default.func.isRequired};var y=p;t.default=y},809:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Component=void 0;var r=d(n(754)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(363)),o=d(n(86)),i=d(n(820)),a=d(n(97)),u=(d(n(686)),d(n(697)));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}const c=e=>{let{types:t,onModalSuccess:n,onModalClosed:o,canCreate:s}=e;const[d,c]=(0,l.useState)(""),f=""!==d,p=(0,i.default)("link-picker","form-control"),y=Object.values(t);return s?l.default.createElement("div",{className:p},l.default.createElement(a.default,{types:y,onSelect:e=>{c(e)}}),f&&l.default.createElement(u.default,{types:t,typeKey:d,isOpen:f,onSuccess:e=>{c(""),n(e)},onClosed:()=>{"function"==typeof o&&o(),c("")}})):l.default.createElement("div",{className:p},l.default.createElement("div",{className:"link-picker__cannot-create"},r.default._t("LinkField.CANNOT_CREATE_LINK","Cannot create link")))};t.Component=c,c.propTypes={types:o.default.object.isRequired,onModalSuccess:o.default.func.isRequired,onModalClosed:o.default.func,canCreate:o.default.bool.isRequired};var f=c;t.default=f},97:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(754)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(363)),o=s(n(86)),i=n(127),a=s(n(686));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}const d=e=>{let{types:t,onSelect:n}=e;const[o,a]=(0,l.useState)(!1);return l.default.createElement(i.Dropdown,{isOpen:o,toggle:()=>a((e=>!e)),className:"link-picker__menu"},l.default.createElement(i.DropdownToggle,{className:"link-picker__menu-toggle font-icon-plus-1",caret:!0},r.default._t("LinkField.ADD_LINK","Add Link")),l.default.createElement(i.DropdownMenu,null,t.map((e=>{let{key:t,title:r,icon:o}=e;return l.default.createElement(i.DropdownItem,{key:t,onClick:()=>n(t)},l.default.createElement("span",{className:`link-picker__menu-icon ${o}`}),r)}))))};d.propTypes={types:o.default.arrayOf(a.default).isRequired,onSelect:o.default.func.isRequired};var c=d;t.default=c},734:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(820)),l=u(n(754)),o=u(n(363)),i=u(n(86)),a=n(127);function u(e){return e&&e.__esModule?e:{default:e}}const s=e=>t=>{t.nativeEvent.stopImmediatePropagation(),t.preventDefault(),t.nativeEvent.preventDefault(),t.stopPropagation(),e&&e()},d=e=>{let{id:t,title:n,description:i,versionState:u,typeTitle:d,typeIcon:c,onDelete:f,onClick:p,canDelete:y}=e;const v={"link-picker__link":!0,"form-control":!0};u&&(v[` link-picker__link--${u}`]=!0);const _=(0,r.default)(v),k=["unversioned","unsaved"].includes(u)?l.default._t("LinkField.DELETE","Delete"):l.default._t("LinkField.ARCHIVE","Archive");return o.default.createElement("div",{className:_},o.default.createElement(a.Button,{className:`link-picker__button ${c}`,color:"secondary",onClick:s(p)},o.default.createElement("div",{className:"link-picker__link-detail"},o.default.createElement("div",{className:"link-picker__title"},o.default.createElement("span",{className:"link-picker__title-text"},n),(e=>{let t="",n="";if("draft"===e)t=l.default._t("LinkField.LINK_DRAFT_TITLE","Link has draft changes"),n=l.default._t("LinkField.LINK_DRAFT_LABEL","Draft");else{if("modified"!==e)return null;t=l.default._t("LinkField.LINK_MODIFIED_TITLE","Link has unpublished changes"),n=l.default._t("LinkField.LINK_MODIFIED_LABEL","Modified")}const i=(0,r.default)("badge",`status-${e}`);return o.default.createElement("span",{className:i,title:t},n)})(u)),o.default.createElement("small",{className:"link-picker__type"},d,": ",o.default.createElement("span",{className:"link-picker__url"},i)))),y&&o.default.createElement(a.Button,{className:"link-picker__delete",color:"link",onClick:s((()=>f(t)))},k))};d.propTypes={id:i.default.number.isRequired,title:i.default.string,description:i.default.string,versionState:i.default.string,typeTitle:i.default.string.isRequired,typeIcon:i.default.string.isRequired,onDelete:i.default.func.isRequired,onClick:i.default.func.isRequired,canDelete:i.default.bool.isRequired};var c=d;t.default=c},697:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(363)),l=n(648),o=i(n(86));function i(e){return e&&e.__esModule?e:{default:e}}const a=e=>{let{types:t,typeKey:n,linkID:o=0,isOpen:i,onSuccess:a,onClosed:u}=e;if(!n)return!1;const s=t.hasOwnProperty(n)?t[n]:{},d=s&&s.hasOwnProperty("handlerName")?s.handlerName:"FormBuilderModal",c=(0,l.loadComponent)(`LinkModal.${d}`);return r.default.createElement(c,{typeTitle:s.title||"",typeKey:n,linkID:o,isOpen:i,onSuccess:a,onClosed:u})};a.propTypes={types:o.default.object.isRequired,typeKey:o.default.string.isRequired,linkID:o.default.number,isOpen:o.default.bool.isRequired,onSuccess:o.default.func.isRequired,onClosed:o.default.func.isRequired};var u=a;t.default=u},41:function(e,t,n){var r=a(n(311)),l=a(n(363)),o=a(n(691)),i=n(648);function a(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}r.default.entwine("ss",(e=>{e(".js-injector-boot .entwine-linkfield").entwine({Component:null,Root:null,onmatch(){const e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},n=this.data("schema-component"),r=(0,i.loadComponent)(n,t);this.setComponent(r),this.setRoot(o.default.createRoot(this[0])),this._super(),this.refresh()},refresh(){const e=this.getProps();this.getInputField().val(e.value);const t=this.getComponent();this.getRoot().render(l.default.createElement(t,u({},e,{noHolder:!0})))},handleChange(e){this.getInputField().data("value",e),this.refresh()},getProps(){const e=this.getInputField();return{value:e.data("value"),ownerID:e.data("owner-id"),ownerClass:e.data("owner-class"),ownerRelation:e.data("owner-relation"),onChange:this.handleChange.bind(this),isMulti:this.data("is-multi")??!1,types:this.data("types")??{},canCreate:!!e.data("can-create")}},getInputField(){const t=this.data("field-id");return e(`#${t}`)},onunmatch(){const e=this.getRoot();e&&e.unmount()}})}))},686:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(86))&&r.__esModule?r:{default:r};var o=l.default.shape({key:l.default.string.isRequired,title:l.default.string.isRequired,icon:l.default.string.isRequired});t.default=o},159:function(e){e.exports=Backend},510:function(e){e.exports=Config},42:function(e){e.exports=FieldHolder},912:function(e){e.exports=FormBuilderModal},648:function(e){e.exports=Injector},475:function(e){e.exports=InsertMediaModal},264:function(e){e.exports=Loading},872:function(e){e.exports=NodeUrl},86:function(e){e.exports=PropTypes},363:function(e){e.exports=React},691:function(e){e.exports=ReactDomClient},624:function(e){e.exports=ReactRedux},127:function(e){e.exports=Reactstrap},827:function(e){e.exports=Redux},123:function(e){e.exports=ToastsActions},820:function(e){e.exports=classnames},754:function(e){e.exports=i18n},311:function(e){e.exports=jQuery},902:function(e){e.exports=qs}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n(274),n(41)}();