var k=Object.defineProperty;var E=(n,s,t)=>s in n?k(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var j=(n,s,t)=>(E(n,typeof s!="symbol"?s+"":s,t),t);import{x as L,u as _,j as e,r as b,C as m,b as p,A as x,T as f,W as N,h as A,i as M,p as T,k as w,H as I,B as v,o as P}from"./index-95684872.js";import{I as D,a as H,D as B,b as q,F as Y}from"./comment.rules-32b74d60.js";import"./lodash-004f3237.js";import{t as R}from"./tour.services-b363663a.js";import"./index-2c226d77.js";class z{constructor(){j(this,"_queryClient");j(this,"_createTourMutation");j(this,"handle",async(s,t,l)=>{await this._createTourMutation.mutateAsync(s,{onSuccess:()=>{this._queryClient.invalidateQueries({queryKey:["tours"]}),t()},onError:r=>{l(r)}})});this._queryClient=L(),this._createTourMutation=_({mutationFn:s=>R.createTour(s)})}isLoading(){return this._createTourMutation.isLoading}}const O=({register:n,onChange:s,control:t,errors:l,tour:r,previewImage:C})=>{var u,d;return e.jsx(b.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-7 gap-4 mx-6",children:[e.jsxs("div",{className:"col-span-7 grid grid-cols-2 ",children:[e.jsx(D,{register:n,id:"name",name:"name",placeholder:"Tour name",className:"col-span-2",classNameInput:"w-full text-[#195E8E] text-[42px] font-bold placeholder:text-[42px] placeholder:text-[#195E8E] placeholder-bold bg-transparent outline-none",error:(u=l.name)==null?void 0:u.message}),e.jsx(D,{register:n,id:"destination",name:"destination",placeholder:"Destination",className:"col-span-2",classNameInput:"w-full text-black/90 text-[16px] placeholder:text-black/90 bg-transparent outline-none h-[28px]",error:(d=l.destination)==null?void 0:d.message})]}),e.jsx("div",{className:"col-span-7",children:e.jsx(H,{register:n,onChange:s,previewImage:C})}),e.jsxs("div",{className:"col-span-7 grid grid-cols-2 gap-x-4 text-[14px] font-semibold text-gray-600 placeholder:text-black",children:[e.jsx(m,{name:"departureLocation",control:t,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{children:[e.jsx(f,{id:"departureLocation",label:"Departure Location",placeholder:"Enter Location: Ex: Hanoi, Vietnam",className:"w-full bg-white",onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})}),e.jsx(m,{name:"period",control:t,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{children:[e.jsx(f,{id:"period",label:"Period",placeholder:"Enter Period",className:"w-full bg-white",onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})}),e.jsx(m,{name:"price",control:t,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{className:"pt-[8px]",children:[e.jsx(f,{id:"price",label:"Price",placeholder:"Enter price",className:"w-full bg-white",onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})}),e.jsx(m,{name:"departureDay",control:t,render:({field:{onChange:i,value:a},fieldState:{error:c}})=>{var h;return e.jsxs("div",{children:[e.jsx(p,{dateAdapter:x,children:e.jsx(B,{components:["DateTimeField"],children:e.jsx(q,{label:"Departure Day",format:"DD/MM/YYYY HH:mm",onChange:i,value:r?N(a):a!==void 0?N(a):null,className:"bg-white"})})}),e.jsxs("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:[c&&c.message,(h=l.departureDay)==null?void 0:h.message]})]})}}),e.jsx(m,{name:"description",control:t,render:({field:{onChange:i},fieldState:{error:a}})=>e.jsx(p,{dateAdapter:x,children:e.jsxs("div",{className:"col-span-2",children:[e.jsx(f,{id:"description",label:"Description",placeholder:"Enter Description",className:"w-full bg-white ",multiline:!0,rows:4,onChange:i}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:a==null?void 0:a.message})]})})})]})]})})},Q=()=>{const[n,s]=b.useState(),t=A(),l=b.useMemo(()=>n?URL.createObjectURL(n):"",[n]),{register:r,control:C,handleSubmit:u,setValue:d,formState:{errors:i}}=M({resolver:P(Y)}),a=async g=>{s(g),d("images","");try{const o=new FormData;o.append("file",g),o.append("upload_preset","uploadImage");const y=await fetch("https://api.cloudinary.com/v1_1/dz1kgngrn/image/upload",{method:"POST",body:o});if(y.ok){const S=await y.json();d("images",S.secure_url)}else console.log("Failed to uploading file: "+y.statusText)}catch(o){console.log("Failed to uploading file: "+o)}},c=new z,h=u(async g=>{c.handle(g,()=>{t(T.tour),w.success("Create tour successfully")},o=>{w.error("Create tour failed: "+o.message)})}),F=()=>{t({pathname:T.tour})};return e.jsxs(b.Fragment,{children:[e.jsxs(I,{children:[e.jsx("title",{children:"Create Tour"}),e.jsx("meta",{name:"description",content:"This is create tour page of the project"})]}),e.jsxs("form",{onSubmit:h,children:[e.jsx(O,{register:r,previewImage:l,onChange:a,control:C,errors:i}),e.jsxs("div",{className:"flex justify-end gap-6 mx-6",children:[e.jsx(v,{type:"button",classNameButton:"bg-gray-300 py-2 px-4 rounded-lg text-[14px] text-gray-800 font-semibold mt-6",onClick:F,children:"Cancel"}),e.jsx(v,{classNameButton:"bg-[#26C6DA] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6 w-[90px]",type:"submit",isLoading:c.isLoading(),children:"Create"})]})]})]})},J=Q;export{J as default};
