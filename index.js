"use strict";var h=Object.defineProperty;var w=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var p=(e,t,a)=>w(e,typeof t!="symbol"?t+"":t,a);const{Plugin:v}=require("siyuan");class B extends v{constructor(){super(...arguments);p(this,"onunloadFn",[])}addUnloadFn(a){this.onunloadFn.push(a)}onunload(){this.onunloadFn.forEach(a=>a())}}const{fetchSyncPost:m}=require("siyuan");async function r(e,t){let a=await m(e,t);return a.code===0?a.data:null}async function D(){return r("/api/notebook/lsNotebooks","")}async function S(e){return r("/api/notebook/openNotebook",{notebook:e})}async function x(e){return r("/api/notebook/closeNotebook",{notebook:e})}async function N(e,t){return r("/api/notebook/renameNotebook",{notebook:e,name:t})}async function I(e){return r("/api/notebook/createNotebook",{name:e})}async function P(e){return r("/api/notebook/removeNotebook",{notebook:e})}async function F(e){return r("/api/notebook/getNotebookConf",{notebook:e})}async function $(e,t){return r("/api/notebook/setNotebookConf",{notebook:e,conf:t})}async function M(e,t,a){return r("/api/filetree/createDocWithMd",{notebook:e,path:t,markdown:a})}async function q(e,t,a){return r("/api/filetree/renameDoc",{doc:e,path:t,title:a})}async function A(e,t){return r("/api/filetree/removeDoc",{notebook:e,path:t})}async function C(e,t,a){return r("/api/filetree/moveDocs",{fromPaths:e,toNotebook:t,toPath:a})}async function E(e,t){return r("/api/filetree/getHPathByPath",{notebook:e,path:t})}async function T(e){return r("/api/filetree/getHPathByID",{id:e})}async function _(e,t){let a=new FormData;a.append("assetsDirPath",e);for(let o of t)a.append("file[]",o);return r("/api/asset/upload",a)}async function k(e,t,a,n,o){return r("/api/block/insertBlock",{dataType:e,data:t,nextID:a,previousID:n,parentID:o})}async function j(e,t,a){return r("/api/block/prependBlock",{dataType:e,data:t,parentID:a})}async function L(e,t,a){return r("/api/block/appendBlock",{dataType:e,data:t,parentID:a})}async function g(e,t,a){return r("/api/block/updateBlock",{dataType:e,data:t,id:a})}async function H(e){return r("/api/block/deleteBlock",{id:e})}async function R(e,t,a){return r("/api/block/moveBlock",{id:e,previousID:t,parentID:a})}async function W(e){return r("/api/block/getBlockKramdown",{id:e})}async function U(e){return r("/api/block/getChildBlocks",{id:e})}async function K(e,t,a){return r("/api/block/transferBlockRef",{fromID:e,toID:t,refIDs:a})}async function O(e,t){return r("/api/attr/setBlockAttrs",{id:e,attrs:t})}async function z(e){return r("/api/attr/getBlockAttrs",{id:e})}async function b(e){return r("/api/query/sql",{stmt:e})}async function G(e){let t=`select * from blocks where id ='${e}'`;return(await b(t))[0]}async function Y(e,t){return r("/api/template/render",{id:e,path:t})}async function Z(e){return r("/api/template/renderSprig",{template:e})}async function J(e){let t={path:e},a="/api/file/getFile";try{return await m(a,t)}catch(n){throw n}}async function Q(e,t,a){let n=new FormData;return n.append("path",e),n.append("isDir",t.toString()),n.append("modTime",Math.floor(Date.now()/1e3).toString()),n.append("file",a),r("/api/file/putFile",n)}async function V(e){return r("/api/file/removeFile",{path:e})}async function X(e){return r("/api/file/readDir",{path:e})}async function ee(e){return r("/api/export/exportMdContent",{id:e})}async function te(e,t){return r("/api/export/exportResources",{paths:e,name:t})}async function ae(e){return r("/api/convert/pandoc",{args:e})}async function ne(e,t=7e3){return r("/api/notification/pushMsg",{msg:e,timeout:t})}async function re(e,t=7e3){return r("/api/notification/pushErrMsg",{msg:e,timeout:t})}async function oe(e,t="GET",a={},n=[],o=7e3,l="text/html"){return r("/api/network/forwardProxy",{url:e,method:t,timeout:o,contentType:l,headers:n,payload:a})}async function le(){return r("/api/system/bootProgress",{})}async function ie(){return r("/api/system/version",{})}async function ue(){return r("/api/system/currentTime",{})}async function se(e){return r("/api/asset/insertLocalAssets",e)}const ce=Object.freeze(Object.defineProperty({__proto__:null,appendBlock:L,bootProgress:le,closeNotebook:x,createDocWithMd:M,createNotebook:I,currentTime:ue,deleteBlock:H,exportMdContent:ee,exportResources:te,forwardProxy:oe,getBlockAttrs:z,getBlockByID:G,getBlockKramdown:W,getChildBlocks:U,getFile:J,getHPathByID:T,getHPathByPath:E,getNotebookConf:F,insertBlock:k,insertLocalAssets:se,lsNotebooks:D,moveBlock:R,moveDocs:C,openNotebook:S,pandoc:ae,prependBlock:j,pushErrMsg:re,pushMsg:ne,putFile:Q,readDir:X,removeDoc:A,removeFile:V,removeNotebook:P,renameDoc:q,renameNotebook:N,render:Y,renderSprig:Z,setBlockAttrs:O,setNotebookConf:$,sql:b,transferBlockRef:K,updateBlock:g,upload:_,version:ie},Symbol.toStringTag,{value:"Module"}));function d(){const e=new Date;return[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()].map(t=>t.toString().padStart(2,"0")).join("")}function f(){const e=Math.random().toString(36).substring(2,9);return`${d()}-${e}`}class de extends B{onload(){this.eventBus.on("click-blockicon",t=>{const a=window.siyuan.menus.menu;a.addSeparator(),a.addItem({label:"univer:插入 sheet ",icon:"",click:()=>{var l;const n=f(),o=d();k("markdown",y({updated:o,id:n,src:`/plugins/univer-siyuan-plugin/univer.html?id=${n}&type=sheet`}),void 0,(l=t.detail.blockElements[0])==null?void 0:l.dataset.nodeId)}})}),this.protyleSlash.push({id:"univer-add-sheet",filter:["excel","sheet","表格","univer"],callback(t){console.log("[protyle]",t);const a=f(),n=d();t.insert(`<div data-node-id="${a}" data-type="NodeIFrame" class="iframe" updated="${n}"><div class="iframe-content"><iframe sandbox="allow-forms allow-presentation allow-same-origin allow-scripts allow-modals allow-popups" src="/plugins/univer-siyuan-plugin/univer.html?id=${a}&amp;type=sheet" data-src="" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 1028px; height: 438px;"></iframe><span class="protyle-action__drag" contenteditable="false"></span></div><div class="protyle-attr" contenteditable="false">&ZeroWidthSpace;</div></div>`,!0,!0)},html:"univer:sheet"})}onLayoutReady(){window.univerPlugin=this;const t=async a=>{const n=a.data;if(n.type==="llej-plugin-rpc-univer-check-id"){const o=document.querySelectorAll(`iframe[src*="univer-siyuan-plugin/univer.html?id=${n.blockId}"]`);for(const l of o){const i=l.closest('[data-type="NodeIFrame"]').dataset.nodeId;if(i!==n.blockId){await new Promise(c=>setTimeout(c,500));let u=l.src.replace(`id=${n.blockId}`,`id=${i}&copy=${n.blockId}`);u.startsWith(location.origin)&&(u=u.slice(location.origin.length)),await g("markdown",y({updated:d(),id:i,src:u}),i)}}}else if(n.type==="llej-plugin-rpc"){const o=n.payload,l=[...document.querySelectorAll(`iframe[src*="univer-siyuan-plugin/univer.html?id=${o.blockId}"]`)];ce[o.apiName](...o.args).then(s=>{const i={type:"llej-plugin-rpc-reply",msgID:n.msgID,payload:s};l.forEach(u=>{var c;(c=u.contentWindow)==null||c.postMessage(i,"*")})})}};window.addEventListener("message",t)}}const y=e=>`<iframe sandbox="allow-forms allow-presentation allow-same-origin allow-scripts allow-modals allow-popups" src="${e.src}" data-src="" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 794px; height: 636px;"></iframe>

{: updated="${e.updated}" id="${e.id}"}`;module.exports=de;
//# sourceMappingURL=index.js.map
