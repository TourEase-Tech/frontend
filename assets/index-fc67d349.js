var I=Object.defineProperty;var _=(i,s,o)=>s in i?I(i,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[s]=o;var b=(i,s,o)=>(_(i,typeof s!="symbol"?s+"":s,o),o);import{M,u as P,r as g,j as e,C as u,b as x,A as h,T as C,U as N,h as A,O as B,i as q,k as v,H,B as w,o as Q,p as U,v as Y}from"./index-18791cfa.js";import{I as S,a as O,D as R,b as z,F as G}from"./tour.rules-4ee4bf0a.js";import{u as K}from"./useQueryTourConfig-72dea6ea.js";import{G as $}from"./getTourById.query-b0313821.js";import{t as J}from"./tour.services-bc02577b.js";import"./index-3b899dd1.js";import"./lodash-a553133a.js";import"./useQueryParam-538143ac.js";class W{constructor(){b(this,"_queryClient");b(this,"_editTourMutation");b(this,"handle",async(s,o,r)=>{await this._editTourMutation.mutate(s,{onSuccess:()=>{this._queryClient.invalidateQueries({queryKey:["tours"]}),this._queryClient.invalidateQueries({queryKey:["tour"]}),o()},onError:d=>{r(d)}})});this._queryClient=M(),this._editTourMutation=P({mutationFn:s=>J.editTour(s)})}isLoading(){return this._editTourMutation.isLoading}}const X=({register:i,previewImage:s,onChange:o,errors:r,setValue:d,control:c,tour:a})=>{var f,j;return g.useEffect(()=>{a&&(d("name",a.name),d("destination",a.destination),d("images",a.images),d("departureLocation",a.departureLocation),d("period",a.period),d("price",a.price),d("departureDay",a.departureDay),d("description",a.description))},[a,d]),e.jsx(g.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-7 gap-4 mx-6",children:[e.jsxs("div",{className:"col-span-7 grid grid-cols-2 ",children:[e.jsx(S,{register:i,id:"name",name:"name",placeholder:"Tour name",className:"col-span-2",classNameInput:"w-full text-[#195E8E] text-[42px] font-bold placeholder:text-[42px] placeholder:text-[#195E8E] placeholder-bold bg-transparent outline-none",error:(f=r.name)==null?void 0:f.message}),e.jsx(S,{register:i,id:"destination",name:"destination",placeholder:"Destination",className:"col-span-2",classNameInput:"w-full text-black/90 text-[16px] placeholder:text-black/90 bg-transparent outline-none h-[28px]",error:(j=r.destination)==null?void 0:j.message})]}),e.jsx("div",{className:"col-span-7",children:e.jsx(O,{register:i,onChange:o,previewImage:s,avatar:a&&a.images})}),e.jsxs("div",{className:"col-span-7 grid grid-cols-2 gap-x-4 text-[14px] font-semibold text-gray-600 placeholder:text-black",children:[e.jsx(u,{name:"departureLocation",control:c,defaultValue:"",render:({field:{onChange:l,value:n=a&&a.departureDay},fieldState:{error:t}})=>e.jsx(x,{dateAdapter:h,children:e.jsxs("div",{children:[e.jsx(C,{id:"departureLocation",label:"Departure Location",value:n,placeholder:"Enter Location: Ex: Hanoi, Vietnam",className:"w-full bg-white",onChange:l}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:t==null?void 0:t.message})]})})}),e.jsx(u,{name:"period",control:c,defaultValue:"",render:({field:{onChange:l,value:n=a&&a.period},fieldState:{error:t}})=>e.jsx(x,{dateAdapter:h,children:e.jsxs("div",{children:[e.jsx(C,{id:"period",label:"Period",value:n,placeholder:"Enter Period",className:"w-full bg-white",onChange:l}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:t==null?void 0:t.message})]})})}),e.jsx(u,{name:"price",control:c,defaultValue:"",render:({field:{onChange:l,value:n=a&&a.price},fieldState:{error:t}})=>e.jsx(x,{dateAdapter:h,children:e.jsxs("div",{className:"pt-[8px]",children:[e.jsx(C,{id:"price",label:"Price",placeholder:"Enter price",value:n,className:"w-full bg-white",onChange:l}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:t==null?void 0:t.message})]})})}),e.jsx(u,{name:"departureDay",control:c,render:({field:{onChange:l,value:n=a&&a.departureDay},fieldState:{error:t}})=>{var m;return e.jsxs("div",{children:[e.jsx(x,{dateAdapter:h,children:e.jsx(R,{components:["DateTimeField"],children:e.jsx(z,{label:"Departure Day",format:"DD/MM/YYYY HH:mm",onChange:l,value:a?N(n):n!==void 0?N(n):null,className:"bg-white"})})}),e.jsxs("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:[t&&t.message,(m=r.departureDay)==null?void 0:m.message]})]})}}),e.jsx(u,{name:"description",defaultValue:"",control:c,render:({field:{onChange:l,value:n=a&&a.description},fieldState:{error:t}})=>e.jsx(x,{dateAdapter:h,children:e.jsxs("div",{className:"col-span-2",children:[e.jsx(C,{id:"description",label:"Description",value:n,placeholder:"Enter Description",className:"w-full bg-white ",multiline:!0,rows:8,onChange:l}),e.jsx("span",{className:"block min-h-[16px] text-red-600 text-xs mt-1 font-medium",children:t==null?void 0:t.message})]})})})]})]})})},Z=()=>{const[i,s]=g.useState(),o=g.useMemo(()=>i?URL.createObjectURL(i):"",[i]),r=async y=>{s(y),n("images","");try{const p=new FormData;p.append("file",y),p.append("upload_preset","uploadImage");const T=await fetch("https://api.cloudinary.com/v1_1/dz1kgngrn/image/upload",{method:"POST",body:p});if(T.ok){const k=await T.json();n("images",k.secure_url)}else console.log("Failed to uploading file: "+T.statusText)}catch(p){console.log("Failed to uploading file: "+p)}},d=A(),a=B().state,{register:f,handleSubmit:j,control:l,setValue:n,formState:{errors:t}}=q({resolver:Q(G)}),m=K(),E=new $(m.id).fetch(),D=new W,F=j(async y=>{D.handle({...y,id:m.id},()=>{v.success("Tour updated successfully")},()=>{v.error("Update tour failed")})}),L=()=>{d({pathname:U.tour,search:Y(a).toString()})};return e.jsxs(g.Fragment,{children:[e.jsxs(H,{children:[e.jsx("title",{children:"Edit Tour"}),e.jsx("meta",{name:"description",content:"This is edit tour page of the project"})]}),e.jsxs("form",{onSubmit:F,children:[e.jsx(X,{register:f,previewImage:o,onChange:r,errors:t,setValue:n,control:l,tour:E}),e.jsxs("div",{className:"flex justify-end gap-6 mx-6",children:[e.jsx(w,{type:"button",classNameButton:"bg-gray-300 py-2 px-4 rounded-lg text-[14px] text-gray-800 font-semibold mt-6",onClick:L,children:"Cancel"}),e.jsx(w,{classNameButton:"bg-[#26C6DA] py-2 px-4 rounded-lg text-[14px] text-white font-semibold mt-6 w-[100px]",type:"submit",isLoading:D.isLoading(),children:"Save"})]})]})]})},re=Z;export{re as default};
