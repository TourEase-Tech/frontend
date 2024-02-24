import{h as l,j as e,v as i,p as n,w as d,r as m,H as o}from"./index-cda8695a.js";import{P as c}from"./Pagination-9e1aceec.js";import{u as p}from"./useQueryTourConfig-88b021b3.js";import{G as h}from"./getAllTours.query-a25b426a.js";import"./lodash-ff72b6af.js";import{C as g}from"./CircularProgress-c47e95e0.js";import"./useQueryParam-6301601d.js";import"./tour.services-29c71848.js";const u=({tour:t})=>{const s=l(),a=r=>{s({pathname:n.tour_detail,search:d({id:r}).toString()})};return e.jsxs("div",{className:"min-w-[30%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:rounded-3xl max-sm:rounded-xl cursor-pointer",onClick:()=>a(t.id),role:"button",tabIndex:0,children:[e.jsx("div",{className:"md:px-4 md:py-4 max-md:px-2 max-md:py-1 flex justify-center items-center w-full",children:e.jsx("img",{src:t.images,alt:"ui/ux review check",className:"sm:rounded-2xl max-sm:rounded-lg border object-cover lg:h-[320px] md:h-[180px] max-md:h-[100px] w-full "})}),e.jsxs("div",{className:"lg:pb-8 md:px-4 md:pb-6 max-md:px-2 max-md:pb-4 overflow-hidden",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-normal leading-7 text-[#a1c19c] lg:text-[24px] md:text-[16px] max-md:text-[12px] whitespace-nowrap break-words truncate",children:t.name}),e.jsx("div",{className:"flex items-end justify-between md:gap-4 lg:text-[16px] md:text-[12px] max-md:text-[8px] overflow-hidden",children:e.jsx("span",{className:"line-clamp-1",children:t.destination})})]}),e.jsxs("div",{className:"mt-4 flex flex-col justify-start md:gap-4 max-md:gap-2 overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"text-[#E80505] flex-shrink-0 lg:w-5 lg:h-5 md:w-4 md:h-4 max-md:w-3 max-md:h-3",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),e.jsx("span",{className:"text-[#A0A2A4] font-normal lg:text-[14px] md:text-[10px] max-md:text-[8px] truncate",children:t.departureLocation})]}),e.jsxs("div",{className:"flex items-center gap-1 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"text-[#00F335] flex-shrink-0 lg:w-5 lg:h-5 md:w-4 md:h-4 max-md:w-3 max-md:h-3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"})}),e.jsx("div",{className:"flex items-center gap-2 text-[#A0A2A4] font-normal lg:text-[14px] md:text-[10px] max-md:text-[8px]",children:e.jsx("span",{children:i(t.departureDay)})})]}),e.jsxs("div",{className:"flex items-center gap-1 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"text-[#195E8E] lg:w-5 lg:h-5 md:w-4 md:h-4 max-md:w-2 max-md:h-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),e.jsx("div",{className:"flex items-center gap-2 text-[#A0A2A4] font-normal lg:text-[14px] md:text-[10px] max-md:text-[8px]",children:e.jsxs("span",{children:[Number(t.price).toLocaleString()," VNĐ"]})})]})]})]})]})},j=({tours:t,total:s})=>{const a=p();return e.jsxs(m.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-3 max-md:grid-cols-2 lg:gap-12 md:gap-6 max-md:gap-2 mx-auto xl:px-36 lg:px-20 md:px-14 max-md:px-5",children:t&&t.data.data.length>0&&t.data.data.map((r,x)=>e.jsx(u,{tour:r},x))}),t&&t.data.data.length>0&&e.jsx(c,{queryConfig:{...a,limit:9},total:s,pathname:n.tour_client,className:"flex justify-center"})]})},f=()=>{const t=new h,s=t.fetch();return e.jsxs(m.Fragment,{children:[e.jsxs(o,{children:[e.jsx("title",{children:"Tours"}),e.jsx("meta",{name:"description",content:"This is home page of the project"})]}),s?e.jsx("div",{className:"flex flex-col justify-center items-center mx-auto py-10",children:e.jsx(j,{tours:s,total:t.getTotal()})}):e.jsx("div",{className:"flex items-center justify-center w-full h-[200px]",children:e.jsx(g,{color:"secondary",variant:"indeterminate"})})]})},b=f;export{b as default};
