import{R as c,j as e,c as f,o as j,u as b,G as l,g as p,a as v,s as y}from"./index-219514d0.js";import{B as d}from"./Button-ee10e0b3.js";const N="/react-memory-game/assets/login-149c1734.svg",w=({onSubmit:s})=>{const[t,r]=c.useState(""),o=i=>{i.key==="Enter"&&s(t)};return e.jsxs("div",{className:"flex h-screen w-screen items-center justify-center text-xl tablet:flex-col","data-testid":"login",children:[e.jsx("img",{src:N,alt:"login",draggable:!1}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center mb-large2",children:[e.jsx("div",{className:"mr-small1 selection:bg-text selection:text-bg",children:"My username is:"}),e.jsx(k,{onChange:r,onKeyPress:o})]}),e.jsx(d,{onClick:()=>s(t),outline:!0,children:"....AAAAND Let's start!"})]})]})},C="/react-memory-game/assets/finish-602a117a.svg",S=({moves:s,onPlayClick:t,onQuitClick:r})=>e.jsxs("div",{className:"flex flex-col h-screen w-screen items-center justify-center text-3xl selection:bg-text selection:text-bg","data-testid":"finish",children:[e.jsx("div",{children:"Woo-hoo! Congratulations!"}),e.jsxs("div",{children:["You won in ",e.jsx("span",{className:"font-bold",children:s})," moves"]}),e.jsx("img",{src:C,alt:"finish",draggable:!1}),e.jsxs("div",{className:"flex gap-8",children:[e.jsx(d,{onClick:t,children:"Play again"}),e.jsx(d,{onClick:r,children:"Quit"})]})]}),k=({onChange:s,onKeyPress:t})=>{const[r,o]=c.useState(""),i=a=>{o(a),s(a)};return e.jsx("input",{className:"bg-transparent border-b border-dashed outline-none p-small2 text-overflow font-semibold selection:bg-text selection:text-bg",onChange:({target:a})=>i(a.value),onKeyPress:t,value:r})},E=({text:s,show:t})=>e.jsx("div",{className:f("half-translate absolute border border-text rounded-3xl top-[20%] tablet:top-[5%] phone:top-[15%] left-1/2 p-default animate-bounce transition-opacity duration-300 whitespace-nowrap",{"opacity-0":!t,"opacity-100":t}),"data-testid":"error-modal",children:e.jsx("div",{className:"text-2xl text-text",children:s})});class P{static isEmptyString(t){return t?!(t.trim().length>0):!0}}const A=j(()=>{const{setUsername:s}=y,{gameStatus:t,moves:r,setGameStatus:o,resetGame:i}=p,[a,x]=c.useState(!1),m=b(),g=n=>{P.isEmptyString(n)?x(!0):(o(l.InProgress),s(n))},u=()=>{let n;switch(t){case l.Login:n=e.jsx(w,{onSubmit:g});break;case l.InProgress:n=e.jsx(v,{});break;case l.Win:n=e.jsx(S,{moves:r,onPlayClick:()=>i(),onQuitClick:()=>m("/")});break;default:n=e.jsx("div",{children:"Unknown status"})}return n};c.useEffect(()=>{a&&setTimeout(()=>{x(!1)},3e3)},[a]);const h=u();return e.jsxs("div",{className:"w-screen h-screen overflow-hidden relative","data-testid":"game-page",children:[e.jsx(E,{text:"Please enter a username",show:a}),h]})});export{A as GamePage};