import{Y as y,r as a,Z as b,j as e,B as l,T as i,D as w,w as t,I as n,W as h,H as k}from"./index-CR4YJYRb.js";import{C as I}from"./config-global-DHSlOPSa.js";import{T as d}from"./TextField-Cg7P5nTY.js";import{L as P}from"./LoadingButton-DLDzGztQ.js";import"./Select-zM4QBtrf.js";function S(){const p=y(),[s,m]=a.useState(!1),[j,o]=a.useState(!1),[u,c]=a.useState(""),[v,x]=b(["token"]),f=a.useCallback(()=>{o(!0),c(""),fetch("https://aayushparmar.com/api/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:document.getElementsByName("name")[0].value,email:document.getElementsByName("email")[0].value,password:document.getElementsByName("password")[0].value})}).then(r=>r.json()).then(r=>{r.success?(o(!1),x("token",r.token),p.push("/")):(c("Already Registered"),o(!1))}).catch(r=>{c("Error! Try Again Later"),o(!1)})},[p,x]),g=e.jsxs(l,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(d,{fullWidth:!0,name:"name",label:"Name",placeholder:"Enter Your Name",InputLabelProps:{shrink:!0},sx:{mb:3}}),e.jsx(d,{fullWidth:!0,name:"email",label:"Email address",placeholder:"Email Address",InputLabelProps:{shrink:!0},sx:{mb:3}}),e.jsx(d,{fullWidth:!0,name:"password",label:"Password",placeholder:"Password",InputLabelProps:{shrink:!0},type:s?"text":"password",InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(t,{onClick:()=>m(!s),edge:"end",children:e.jsx(n,{icon:s?"solar:eye-bold":"solar:eye-closed-bold"})})})},sx:{mb:3}}),e.jsx(d,{fullWidth:!0,name:"password",label:"Retype Password",placeholder:"Enter Password Again",InputLabelProps:{shrink:!0},type:s?"text":"password",InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(t,{onClick:()=>m(!s),edge:"end",children:e.jsx(n,{icon:s?"solar:eye-bold":"solar:eye-closed-bold"})})})},sx:{mb:3}}),e.jsx(l,{gap:.5,display:"flex",flexDirection:"column",sx:{mb:2},children:e.jsx(i,{variant:"body2",color:"error",children:u})}),e.jsx(P,{fullWidth:!0,loading:j,size:"large",type:"submit",color:u!==""?"error":"inherit",variant:"contained",onClick:f,children:"Sign Up"})]});return e.jsxs(e.Fragment,{children:[e.jsxs(l,{gap:1.5,display:"flex",flexDirection:"column",alignItems:"center",sx:{mb:5},children:[e.jsx(i,{variant:"h5",children:"Sign Up"}),e.jsx(i,{variant:"body2",color:"text.secondary",children:"It only takes a minute to get started."})]}),g,e.jsx(w,{sx:{my:3,"&::before, &::after":{borderTopStyle:"dashed"}},children:e.jsx(i,{variant:"overline",sx:{color:"text.secondary",fontWeight:"fontWeightMedium"},children:"OR"})}),e.jsxs(l,{gap:1,display:"flex",justifyContent:"center",children:[e.jsx(t,{color:"inherit",children:e.jsx(n,{icon:"logos:google-icon"})}),e.jsx(t,{color:"inherit",children:e.jsx(n,{icon:"eva:github-fill"})}),e.jsx(t,{color:"inherit",children:e.jsx(n,{icon:"ri:twitter-x-fill"})})]})]})}function A(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsxs("title",{children:[" ",`Sign in - ${I.appName}`]})}),e.jsx(S,{})]})}export{A as default};
