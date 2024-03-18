import{j as e,r as c,B as k,P as B,i as E,k as H,H as V,o as A,n as j,p as h}from"./index-ef4d341e.js";import{C as I}from"./CardTour-dc54de6c.js";import{I as O,F as M,P as Q,u as R,G as q}from"./useQuerySearchTourConfig-406d3de8.js";import{t as T}from"./tour.services-ec4863e2.js";import"./lodash-cbe3bf36.js";import{u as G}from"./useQueryTourConfig-200aa307.js";import"./comment.rules-8619983e.js";import{F as W}from"./filter_tour.rules-4b4fa285.js";import{C as J}from"./CircularProgress-d741578b.js";import"./useQueryParam-bbcb7396.js";const K=({tours:s,total:n,queryConfig:i,handleSubmitFormFilter:m,register:u,handleOpenPopover:S,id:d,isOpen:o,anchorEl:w,handleClosePopover:l,control:y,handleResetFormFilter:p,handlePageChange:P,isNotFound:g})=>e.jsxs(c.Fragment,{children:[e.jsx("div",{className:"mb-10",children:e.jsxs("div",{className:"flex justify-center items-center pt-[16px] pb-[40px] font-normal relative ",children:[e.jsx("form",{onSubmit:m,children:e.jsx(O,{classNameInput:"bg-white border-[1px] rounded-md md:h-[44px] md:w-[500px] max-md:h-[30px] max-md:w-[250px] outline-none pl-8 pr-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] font-normal text-gray-600 placeholder:font-normal placeholder:text-[14px] max-md:placeholder:text-[12px]",name:"destination",placeholder:"Search",register:u})}),e.jsxs("div",{className:"w-full flex justify-end mx-auto ml-2 ",children:[e.jsxs(k,{onClick:S,classNameButton:"flex items-center gap-1 text-[14px] font-semibold text-white bg-[#26C6DA] px-4 py-2 max-md:px-3 rounded-lg cursor-pointer",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-4 max-md:h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"})}),e.jsx("span",{className:"max-md:text-[12px]",children:"Filter"})]}),e.jsx(B,{id:d,open:o,anchorEl:w,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorReference:"anchorEl",children:e.jsx("form",{onSubmit:m,children:e.jsx(M,{tours:s,control:y,onResetForm:p})})})]})]})}),g?e.jsx("div",{className:"flex w-full items-center justify-center min-h-[500px]",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex rounded-full bg-[#c6f8ff] p-4 overflow-hidden",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"calendar",className:"w-16 h-16",children:e.jsx("path",{d:"M53 5h-8v4H19V5h-8v4H0v50h64V9H53V5zm-6 2h4v6h-4V7zM13 7h4v6h-4V7zM2 57V19h60v38H2zm60-46v6H2v-6h9v4h8v-4h26v4h8v-4h9z"})})}),e.jsx("h1",{className:"mt-5 lg:text-[40px] md:text-[20px] max-md:text-[14px] font-bold text-slate-800",children:"No tours found"})]})}):e.jsxs("div",{className:"",children:[e.jsx("div",{className:"grid grid-cols-3 max-md:grid-cols-2 lg:gap-12 md:gap-6 max-md:gap-2 mx-auto xl:px-36 lg:px-20 md:px-14 max-md:px-5",children:s&&s.length>0&&s.map((f,v)=>e.jsx(I,{tour:f},v))}),n&&e.jsx(Q,{className:"flex justify-center",queryConfig:i,total:n,handlePageChange:P})]})]}),U=()=>{const s=G(9),n=R(),i=E(),m=new q(s),u=m.fetch(),S=m.getTotal(),[d,o]=c.useState(!1),[w,l]=c.useState(!1),[y,p]=c.useState([]),[P,g]=c.useState(""),[f,v]=c.useState(null),C=r=>{v(r.currentTarget)},F=()=>{v(null)},N=!!f,b=N?"popover":void 0,a=H({resolver:A(W)}),L=async r=>{try{const t=await T.getToursBySearch(r);t.data.data?(l(!1),o(!0),p(t.data.data),g(t.data.total)):(o(!0),l(!0))}catch(t){console.error("Error fetching tours:",t)}},$=r=>{const t={};if(r.destination&&(t.destination=r.destination),r.departureLocation&&(t.departureLocation=r.departureLocation),r.period&&(t.period=r.period),r.maxPrice&&(t.maxPrice=r.maxPrice),r.minPrice&&(t.minPrice=r.minPrice),t.limit="9",t.page=n.page,Object.keys(t).length>0){L(t),o(!0),F();const x=j({...s,...t,page:"1"}).toString();i(`${h.tour_client}?${x}`)}else{o(!1);const x=j({...s,page:"1"});i(`${h.tour_client}?${x}`)}},z=()=>{a.resetField("destination"),a.resetField("departureLocation"),a.resetField("period"),a.resetField("maxPrice"),a.resetField("minPrice"),F(),o(!1),l(!1),i(h.tour_client)},_=async r=>{try{if(d){const t=await T.getToursBySearch({...n,page:r.toString()});t.data.data?(l(!1),o(!0),p(t.data.data),g(t.data.total)):(o(!0),l(!0));const x=j({...n,page:r.toString()}).toString();i(`${h.tour_client}?${x}`)}else{const t=j({...s,page:r.toString()}).toString();i(`${h.tour_client}?${t}`)}}catch(t){console.error("Error fetching tours:",t)}};return e.jsxs(c.Fragment,{children:[e.jsxs(V,{children:[e.jsx("title",{children:"Tours"}),e.jsx("meta",{name:"description",content:"This is home page of the project"})]}),u?e.jsx("div",{className:"flex flex-col justify-center items-center mx-auto py-10",children:e.jsx(K,{tours:d?y:u,total:d?P:S,queryConfig:d?n:s,handleSubmitFormFilter:a.handleSubmit($),register:a.register,handleOpenPopover:C,id:b,anchorEl:f,isOpen:N,handleClosePopover:F,control:a.control,handleResetFormFilter:z,handlePageChange:_,isNotFound:w})}):e.jsx("div",{className:"flex items-center justify-center w-full h-[200px]",children:e.jsx(J,{color:"secondary",variant:"indeterminate"})})]})},ne=U;export{ne as default};