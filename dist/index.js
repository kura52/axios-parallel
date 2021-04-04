module.exports=(()=>{"use strict";var e={607:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};const u=r(87),l=r(13),a=i(r(622)),c=s(r(865)),f=u.cpus().length||1,h=a.resolve(__dirname,"fetch.worker.js");e.exports=function(e,t=25){return new Promise((r=>{Array.isArray(e)||(e=[e]);const n=e.filter((e=>{var t;return""!==(null===(t=null==e?void 0:e.url)||void 0===t?void 0:t.trim())}));if(!n.length)return console.error("[Fetch] Empty or not valid input."),r([]);const o=[];for(let e=f;e>0;e--){const t=n.splice(0,Math.ceil(n.length/e));t.length&&o.push(t)}if(!o.length)return console.error("[Fetch] failed to split requests on threads."),r([]);let i=0;const s=[];o.forEach((e=>{const n=new l.Worker(h,{workerData:{requests:e,limit:c.default(t)||25}});n.once("message",(e=>{Array.isArray(e)&&e.length&&e.forEach((e=>s.push(e)))})),n.once("exit",(()=>{n.unref(),i++,i===o.length&&r(s)}))}))}))}},865:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>{const t=parseFloat(e);return isNaN(t)?0:t}},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},13:e=>{e.exports=require("worker_threads")}},t={};return function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(607)})();