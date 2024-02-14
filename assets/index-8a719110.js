var F=Object.defineProperty;var S=(n,t,s)=>t in n?F(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var j=(n,t,s)=>(S(n,typeof t!="symbol"?t+"":t,s),s);import{U as k,k as E,j as e,r as b,C as m,e as p,f as x,T as f,$ as N,u as L,m as _,H as M,B as T,o as A,p as I}from"./index-9f700162.js";import{I as w,a as P,D as H,b as q,F as B}from"./tour.rules-fa30ae12.js";import"./lodash-c27996ad.js";import{t as Y}from"./tour.services-99c8afa2.js";import"./index-2db0ea2b.js";class R{constructor(){j(this,"_queryClient");j(this,"_createTourMutation");j(this,"handle",async(t,s,l)=>{await this._createTourMutation.mutateAsync(t,{onSuccess:()=>{this._queryClient.invalidateQueries({queryKey:["tours"]}),s()},onError:d=>{l(d)}})});this._queryClient=k(),this._createTourMutation=E({mutationFn:t=>Y.createTour(t)})}isLoading(){return this._createTourMutation.isLoading}}const U=({register:n,onChange:t,control:s,errors:l,tour:d,previewImage:C})=>{var u,r;return e.jsx(b.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-7 gap-4 mx-6",children:[e.jsxs("div",{className:"col-span-7 grid grid-cols-2 ",children:[e.jsx(w,{register:n,id:"name",name:"name",placeholder:"Tour name",className:"col-span-2",classNameInput:"w-full text-[#195E8E] text-[42px] font-bold placeholder:text-[42px] placeholder:text-[#195E8E] placeholder-bold bg-transparent outline-none",error:(u=l.name)==null?void 0:u.message}),e.jsx(w,{register:n,id:"destination",name:"destination",placeholder:"Destination",className:"col-span-2",classNameInput:"w-full text-black/90 text-[16px] placeholder:text-black/90 bg-transparent outline-none h-[28px]",error:(r=l.destination)==null?void 0:r.message})]}),e.jsx("div",{className:"col-span-7",children:e.jsx(P,{register:n,onChange:t,previewImage:C})}),e.jsxs("div",{className:"col-span-7 grid grid-cols-2 gap-x-4 text-[14px] font-semibold text-gray-600 placeholder:text-black",children:[e.jsx(m,{name:"departureLocation",control:s,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{children:[e.jsx(f,{id:"departureLocation",label:"Departure Location",placeholder:"Enter Location: Ex: Hanoi, Vietnam",className:"w-full bg-white",onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})}),e.jsx(m,{name:"period",control:s,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{children:[e.jsx(f,{id:"period",label:"Period",placeholder:"Enter Period",className:"w-full bg-white",onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})}),e.jsx(m,{name:"price",control:s,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{className:"pt-[8px]",children:[e.jsx(f,{id:"price",label:"Price",placeholder:"Enter price",className:"w-full bg-white",onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})}),e.jsx(m,{name:"departureDay",control:s,render:({field:{onChange:i,value:a},fieldState:{error:c}})=>{var h;return e.jsxs("div",{children:[e.jsx(p,{dateAdapter:x,children:e.jsx(H,{components:["DateTimeField"],children:e.jsx(q,{label:"Departure Day",format:"DD/MM/YYYY HH:mm",onChange:i,value:d?N(a):a!==void 0?N(a):null,className:"bg-white"})})}),e.jsxs("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:[c&&c.message,(h=l.departureDay)==null?void 0:h.message]})]})}}),e.jsx(m,{name:"description",control:s,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{className:"col-span-2",children:[e.jsx(f,{id:"description",label:"Description",placeholder:"Enter Description",className:"w-full bg-white ",multiline:!0,rows:4,onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})})]})]})})},z=()=>{const[n,t]=b.useState(),s=L(),l=b.useMemo(()=>n?URL.createObjectURL(n):"",[n]),{register:d,control:C,handleSubmit:u,setValue:r,formState:{errors:i}}=_({resolver:A(B)}),a=async g=>{t(g),r("images",[]);try{const o=new FormData;o.append("file",g),o.append("upload_preset","uploadImage");const y=await fetch("https://api.cloudinary.com/v1_1/dz1kgngrn/image/upload",{method:"POST",body:o});if(y.ok){const D=await y.json();r("images",[D.secure_url])}else console.log("Failed to uploading file: "+y.statusText)}catch(o){console.log("Failed to uploading file: "+o)}},c=new R,h=u(async g=>{c.handle(g,()=>{console.log("Create tour successfully")},o=>{console.log("Create tour failed: "+o)})}),v=()=>{s({pathname:I.tour})};return e.jsxs(b.Fragment,{children:[e.jsxs(M,{children:[e.jsx("title",{children:"Create Tour"}),e.jsx("meta",{name:"description",content:"This is create tour page of the project"})]}),e.jsxs("form",{onSubmit:h,children:[e.jsx(U,{register:d,previewImage:l,onChange:a,control:C,errors:i}),e.jsxs("div",{className:"flex justify-end gap-6 mx-6",children:[e.jsx(T,{type:"button",classNameButton:"bg-gray-300 py-2 px-4 rounded-lg text-[14px] text-gray-800 font-semibold mt-6",onClick:v,children:"Cancel"}),e.jsx(T,{classNameButton:"bg-[#26C6DA] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6 w-[90px]",type:"submit",isLoading:c.isLoading(),children:"Create"})]})]})]})},J=z;export{J as default};
