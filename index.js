"use strict";var b=Object.defineProperty;var h=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var p=(t,e,a)=>h(t,typeof e!="symbol"?e+"":e,a);const{Plugin:w}=require("siyuan");class B extends w{constructor(){super(...arguments);p(this,"onunloadFn",[])}addUnloadFn(a){this.onunloadFn.push(a)}onunload(){this.onunloadFn.forEach(a=>a())}}const{fetchSyncPost:y}=require("siyuan");async function r(t,e){let a=await y(t,e);return a.code===0?a.data:null}async function v(){return r("/api/notebook/lsNotebooks","")}async function D(t){return r("/api/notebook/openNotebook",{notebook:t})}async function N(t){return r("/api/notebook/closeNotebook",{notebook:t})}async function P(t,e){return r("/api/notebook/renameNotebook",{notebook:t,name:e})}async function S(t){return r("/api/notebook/createNotebook",{name:t})}async function I(t){return r("/api/notebook/removeNotebook",{notebook:t})}async function x(t){return r("/api/notebook/getNotebookConf",{notebook:t})}async function F(t,e){return r("/api/notebook/setNotebookConf",{notebook:t,conf:e})}async function M(t,e,a){return r("/api/filetree/createDocWithMd",{notebook:t,path:e,markdown:a})}async function q(t,e,a){return r("/api/filetree/renameDoc",{doc:t,path:e,title:a})}async function $(t,e){return r("/api/filetree/removeDoc",{notebook:t,path:e})}async function A(t,e,a){return r("/api/filetree/moveDocs",{fromPaths:t,toNotebook:e,toPath:a})}async function C(t,e){return r("/api/filetree/getHPathByPath",{notebook:t,path:e})}async function E(t){return r("/api/filetree/getHPathByID",{id:t})}async function T(t,e){let a=new FormData;a.append("assetsDirPath",t);for(let o of e)a.append("file[]",o);return r("/api/asset/upload",a)}async function k(t,e,a,n,o){return r("/api/block/insertBlock",{dataType:t,data:e,nextID:a,previousID:n,parentID:o})}async function j(t,e,a){return r("/api/block/prependBlock",{dataType:t,data:e,parentID:a})}async function L(t,e,a){return r("/api/block/appendBlock",{dataType:t,data:e,parentID:a})}async function m(t,e,a){return r("/api/block/updateBlock",{dataType:t,data:e,id:a})}async function H(t){return r("/api/block/deleteBlock",{id:t})}async function R(t,e,a){return r("/api/block/moveBlock",{id:t,previousID:e,parentID:a})}async function _(t){return r("/api/block/getBlockKramdown",{id:t})}async function U(t){return r("/api/block/getChildBlocks",{id:t})}async function W(t,e,a){return r("/api/block/transferBlockRef",{fromID:t,toID:e,refIDs:a})}async function K(t,e){return r("/api/attr/setBlockAttrs",{id:t,attrs:e})}async function O(t){return r("/api/attr/getBlockAttrs",{id:t})}async function g(t){return r("/api/query/sql",{stmt:t})}async function z(t){let e=`select * from blocks where id ='${t}'`;return(await g(e))[0]}async function G(t,e){return r("/api/template/render",{id:t,path:e})}async function Y(t){return r("/api/template/renderSprig",{template:t})}async function J(t){let e={path:t},a="/api/file/getFile";try{return await y(a,e)}catch(n){throw n}}async function Q(t,e,a){let n=new FormData;return n.append("path",t),n.append("isDir",e.toString()),n.append("modTime",Math.floor(Date.now()/1e3).toString()),n.append("file",a),r("/api/file/putFile",n)}async function V(t){return r("/api/file/removeFile",{path:t})}async function X(t){return r("/api/file/readDir",{path:t})}async function Z(t){return r("/api/export/exportMdContent",{id:t})}async function tt(t,e){return r("/api/export/exportResources",{paths:t,name:e})}async function et(t){return r("/api/convert/pandoc",{args:t})}async function at(t,e=7e3){return r("/api/notification/pushMsg",{msg:t,timeout:e})}async function nt(t,e=7e3){return r("/api/notification/pushErrMsg",{msg:t,timeout:e})}async function rt(t,e="GET",a={},n=[],o=7e3,l="text/html"){return r("/api/network/forwardProxy",{url:t,method:e,timeout:o,contentType:l,headers:n,payload:a})}async function ot(){return r("/api/system/bootProgress",{})}async function lt(){return r("/api/system/version",{})}async function ut(){return r("/api/system/currentTime",{})}async function it(t){return r("/api/asset/insertLocalAssets",t)}const ct=Object.freeze(Object.defineProperty({__proto__:null,appendBlock:L,bootProgress:ot,closeNotebook:N,createDocWithMd:M,createNotebook:S,currentTime:ut,deleteBlock:H,exportMdContent:Z,exportResources:tt,forwardProxy:rt,getBlockAttrs:O,getBlockByID:z,getBlockKramdown:_,getChildBlocks:U,getFile:J,getHPathByID:E,getHPathByPath:C,getNotebookConf:x,insertBlock:k,insertLocalAssets:it,lsNotebooks:v,moveBlock:R,moveDocs:A,openNotebook:D,pandoc:et,prependBlock:j,pushErrMsg:nt,pushMsg:at,putFile:Q,readDir:X,removeDoc:$,removeFile:V,removeNotebook:I,renameDoc:q,renameNotebook:P,render:G,renderSprig:Y,setBlockAttrs:K,setNotebookConf:F,sql:g,transferBlockRef:W,updateBlock:m,upload:T,version:lt},Symbol.toStringTag,{value:"Module"}));function d(){const t=new Date;return[t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()].map(e=>e.toString().padStart(2,"0")).join("")}function st(){const t=Math.random().toString(36).substring(2,9);return`${d()}-${t}`}class dt extends B{onload(){this.eventBus.on("click-blockicon",e=>{const a=window.siyuan.menus.menu;a.addSeparator(),a.addItem({label:"univer:插入 sheet ",icon:"",click:()=>{var l;const n=st(),o=d();k("markdown",f({updated:o,id:n,src:`/plugins/univer-siyuan-plugin/univer.html?id=${n}&type=sheet`}),void 0,(l=e.detail.blockElements[0])==null?void 0:l.dataset.nodeId)}})})}onLayoutReady(){window.univerPlugin=this;const e=async a=>{const n=a.data;if(n.type==="llej-plugin-rpc-univer-check-id"){const o=document.querySelectorAll(`iframe[src*="univer-siyuan-plugin/univer.html?id=${n.blockId}"]`);for(const l of o){const u=l.closest('[data-type="NodeIFrame"]').dataset.nodeId;if(u!==n.blockId){await new Promise(c=>setTimeout(c,500));const s=l.src.replace(`id=${n.blockId}`,`id=${u}&copy=${n.blockId}`);await m("markdown",f({updated:d(),id:u,src:s}),u)}}}else if(n.type==="llej-plugin-rpc"){const o=n.payload,l=[...document.querySelectorAll(`iframe[src*="univer-siyuan-plugin/univer.html?id=${o.blockId}"]`)];ct[o.apiName](...o.args).then(i=>{const u={type:"llej-plugin-rpc-reply",msgID:n.msgID,payload:i};l.forEach(s=>{var c;(c=s.contentWindow)==null||c.postMessage(u,"*")})})}};window.addEventListener("message",e)}}const f=t=>`<iframe sandbox="allow-forms allow-presentation allow-same-origin allow-scripts allow-modals allow-popups" src="${t.src}" data-src="" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 794px; height: 636px;"></iframe>

{: updated="${t.updated}" id="${t.id}"}`;module.exports=dt;
//# sourceMappingURL=index.js.map
