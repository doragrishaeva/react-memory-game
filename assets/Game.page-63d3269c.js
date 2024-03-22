import{R as c,j as e,c as f,o as j,u as b,G as l,g as p,a as v,s as w}from"./index-2ede4525.js";import{B as x}from"./Button-a6378275.js";const N=""+new URL("login-149c1734.svg",import.meta.url).href,y=({onSubmit:t})=>{const[s,r]=c.useState(""),o=i=>{i.key==="Enter"&&t(s)};return e.jsxs("div",{className:"flex h-screen w-screen items-center justify-center text-xl tablet:flex-col",children:[e.jsx("img",{src:N,alt:"login",draggable:!1}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center mb-large2",children:[e.jsx("div",{className:"mr-small1 selection:bg-text selection:text-bg",children:"My username is:"}),e.jsx(k,{onChange:r,onKeyPress:o})]}),e.jsx(x,{onClick:()=>t(s),outline:!0,children:"....AAAAND Let's start!"})]})]})},C=""+new URL("finish-602a117a.svg",import.meta.url).href,S=({moves:t,onPlayClick:s,onQuitClick:r})=>e.jsxs("div",{className:"flex flex-col h-screen w-screen items-center justify-center text-3xl selection:bg-text selection:text-bg",children:[e.jsx("div",{children:"Woo-hoo! Congratulations!"}),e.jsxs("div",{children:["You won in ",e.jsx("span",{className:"font-bold",children:t})," moves"]}),e.jsx("img",{src:C,alt:"finish",draggable:!1}),e.jsxs("div",{className:"flex gap-8",children:[e.jsx(x,{onClick:s,children:"Play again"}),e.jsx(x,{onClick:r,children:"Quit"})]})]}),k=({onChange:t,onKeyPress:s})=>{const[r,o]=c.useState(""),i=n=>{o(n),t(n)};return e.jsx("input",{className:"bg-transparent border-b border-dashed outline-none p-small2 text-overflow font-semibold selection:bg-text selection:text-bg",onChange:({target:n})=>i(n.value),onKeyPress:s,value:r})},E=({text:t,show:s})=>e.jsx("div",{className:f("half-translate absolute border border-text rounded-3xl top-[20%] tablet:top-[5%] phone:top-[15%] left-1/2 p-default animate-bounce transition-opacity duration-300 whitespace-nowrap",{"opacity-0":!s,"opacity-100":s}),children:e.jsx("div",{className:"text-2xl text-text",children:t})});class P{static isEmptyString(s){return s?!(s.trim().length>0):!0}}const I=j(()=>{const{setUsername:t}=w,{gameStatus:s,moves:r,setGameStatus:o,resetGame:i}=p,[n,m]=c.useState(!1),d=b(),u=a=>{P.isEmptyString(a)?m(!0):(o(l.InProgress),t(a))},g=()=>{let a;switch(s){case l.Login:a=e.jsx(y,{onSubmit:u});break;case l.InProgress:a=e.jsx(v,{});break;case l.Win:a=e.jsx(S,{moves:r,onPlayClick:()=>i(),onQuitClick:()=>d("/")});break;default:a=e.jsx("div",{children:"Unknown status"})}return a};c.useEffect(()=>{n&&setTimeout(()=>{m(!1)},3e3)},[n]);const h=g();return e.jsxs("div",{className:"w-screen h-screen overflow-hidden relative",children:[e.jsx(E,{text:"Please enter a username",show:n}),h]})});export{I as GamePage};