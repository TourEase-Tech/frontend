var f=Object.defineProperty;var j=(t,s,r)=>s in t?f(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;var l=(t,s,r)=>(j(t,typeof s!="symbol"?s+"":s,r),r);import{u as v,a as b,j as e,r as h,L as u,p as i,B as N,i as P,k as F,l as k,H as S,o as y}from"./index-e884cf42.js";import{S as L}from"./index-9cb587e3.js";import{b as E}from"./forget_password.rules-28dab7b8.js";import{S as M}from"./sweetalert2.all-e82c6715.js";class B{constructor(){l(this,"_resetPasswordMutation");l(this,"handle",(s,r,a)=>this._resetPasswordMutation.mutate(s,{onSuccess:()=>{r()},onError:o=>{a(o)}}));this._resetPasswordMutation=v({mutationFn:s=>b.resetPassword(s)})}isLoading(){return this._resetPasswordMutation.isLoading}}const _=({register:t,id:s,name:r,type:a,label:o,placeholder:n,autoComplete:m,className:d,classNameInput:p,error:w,children:x,isLoading:c,disabled:g})=>e.jsxs("div",{className:d,children:[o&&e.jsx("label",{htmlFor:s,className:"mb-2",children:o}),c&&c?e.jsx(L,{className:"h-[34px]"}):e.jsx("input",{type:a,placeholder:n,autoComplete:m,id:s,className:p,...t(r),disabled:g}),x&&x,e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:w})]}),A=({register:t,errors:s,isLoading:r})=>{var a;return e.jsx(h.Fragment,{children:e.jsxs("div",{className:"px-6 sm:px-8 sm:w-[520px] flex justify-center flex-col m-auto w-full",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{children:"Email"}),e.jsx(_,{register:t,type:"email",id:"email",name:"email",placeholder:"Provide your email address",className:"flex flex-col mb-4",classNameInput:"bg-transparent px-4 py-0 h-12 border border-solid border-[#e1e1e1] focus:outline-none ",error:(a=s.email)==null?void 0:a.message})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(u,{to:i.login,className:"flex justify-center items-center bg-[#195E8E] md:w-[60px] md:h-[50px] max-md:w-[40px] max-md:h-[30px] text-white lg:p-2 md:rounded-2xl max-md:rounded-xl font-semibold md:hover:w-[70px] max-md:hover:w-[50px] hover:bg-[#dd5353] transition-all duration-300",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3 m-0",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})})}),e.jsx(N,{type:"submit",classNameButton:"flex justify-center items-center bg-[#195E8E] md:w-[70px] md:h-[50px] max-md:w-[40px] max-md:h-[30px] text-white p-2 md:rounded-2xl max-md:rounded-xl font-semibold transition-all duration-300 hover:bg-[#195E8E]/80",isLoading:r,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})})})]})]})})},C=()=>{const t=P(),{register:s,handleSubmit:r,formState:{errors:a}}=F({resolver:y(E)}),o=new B,n=r(m=>{o.handle(m,()=>{t(i.home_page),M.fire("Success","Please check your email to reset password","success")},d=>{k.error(d.response.data.message)})});return e.jsxs(h.Fragment,{children:[e.jsxs(S,{children:[e.jsx("title",{children:"Forget Password"}),e.jsx("meta",{name:"description",content:"This is forget password page of the project"})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center m-auto w-full sm:w-[520px]  px-6 h-full border mt-10 bg-white rounded-2xl py-10",children:[e.jsx(u,{to:i.home_page,className:"text-[32px]",children:"Tourease"}),e.jsx("form",{onSubmit:n,children:e.jsx(A,{register:s,errors:a,isLoading:o.isLoading()})})]})]})},z=C;export{z as default};
