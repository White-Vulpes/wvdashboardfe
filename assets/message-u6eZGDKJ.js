import{r as p,g as N,c as A,s as P,d,e as H,f as $,j as o,h as I,i as z,k as L,l as Se,m as J,n as Ie,o as se,p as ke,q as F,t as fe,w as $e,M as ve,x as ie,y as Me,z as Le,A as Ne,B as ae,T as Q,F as Ae,E as He,L as ce,I as X,P as ze,G as De,J as de,O as _e,K as Fe,N as Ue,Q as Oe,D as Ee,C as We,R as Ke,H as qe,a as Ge}from"./index-Bks8IhCe.js";import{F as Je,L as Qe,C as ye}from"./LastPage-CgbQ01Fb.js";const Ce=p.createContext();function Xe(e){return A("MuiTable",e)}N("MuiTable",["root","stickyHeader"]);const Ve=["className","component","padding","size","stickyHeader"],Ye=e=>{const{classes:t,stickyHeader:s}=e;return z({root:["root",s&&"stickyHeader"]},Xe,t)},Ze=P("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>d({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":d({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),pe="table",et=p.forwardRef(function(t,s){const a=H({props:t,name:"MuiTable"}),{className:n,component:l=pe,padding:i="normal",size:r="medium",stickyHeader:u=!1}=a,h=$(a,Ve),c=d({},a,{component:l,padding:i,size:r,stickyHeader:u}),m=Ye(c),C=p.useMemo(()=>({padding:i,size:r,stickyHeader:u}),[i,r,u]);return o.jsx(Ce.Provider,{value:C,children:o.jsx(Ze,d({as:l,role:l===pe?null:"table",ref:s,className:I(m.root,n),ownerState:c},h))})}),V=p.createContext();function tt(e){return A("MuiTableBody",e)}N("MuiTableBody",["root"]);const ot=["className","component"],st=e=>{const{classes:t}=e;return z({root:["root"]},tt,t)},at=P("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),nt={variant:"body"},ue="tbody",lt=p.forwardRef(function(t,s){const a=H({props:t,name:"MuiTableBody"}),{className:n,component:l=ue}=a,i=$(a,ot),r=d({},a,{component:l}),u=st(r);return o.jsx(V.Provider,{value:nt,children:o.jsx(at,d({className:I(u.root,n),as:l,ref:s,role:l===ue?null:"rowgroup",ownerState:r},i))})});function rt(e){return A("MuiTableCell",e)}const it=N("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ct=["align","className","component","padding","scope","size","sortDirection","variant"],dt=e=>{const{classes:t,variant:s,align:a,padding:n,size:l,stickyHeader:i}=e,r={root:["root",s,i&&"stickyHeader",a!=="inherit"&&`align${L(a)}`,n!=="normal"&&`padding${L(n)}`,`size${L(l)}`]};return z(r,rt,t)},pt=P("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`size${L(s.size)}`],s.padding!=="normal"&&t[`padding${L(s.padding)}`],s.align!=="inherit"&&t[`align${L(s.align)}`],s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>d({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Se(J(e.palette.divider,1),.88):Ie(J(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${it.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),w=p.forwardRef(function(t,s){const a=H({props:t,name:"MuiTableCell"}),{align:n="inherit",className:l,component:i,padding:r,scope:u,size:h,sortDirection:c,variant:m}=a,C=$(a,ct),x=p.useContext(Ce),v=p.useContext(V),M=v&&v.variant==="head";let b;i?b=i:b=M?"th":"td";let g=u;b==="td"?g=void 0:!g&&M&&(g="col");const j=m||v&&v.variant,k=d({},a,{align:n,component:b,padding:r||(x&&x.padding?x.padding:"normal"),size:h||(x&&x.size?x.size:"medium"),sortDirection:c,stickyHeader:j==="head"&&x&&x.stickyHeader,variant:j}),D=dt(k);let T=null;return c&&(T=c==="asc"?"ascending":"descending"),o.jsx(pt,d({as:b,ref:s,className:I(D.root,l),"aria-sort":T,scope:g,ownerState:k},C))});function ut(e){return A("MuiTableContainer",e)}N("MuiTableContainer",["root"]);const gt=["className","component"],bt=e=>{const{classes:t}=e;return z({root:["root"]},ut,t)},ht=P("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),xt=p.forwardRef(function(t,s){const a=H({props:t,name:"MuiTableContainer"}),{className:n,component:l="div"}=a,i=$(a,gt),r=d({},a,{component:l}),u=bt(r);return o.jsx(ht,d({ref:s,as:l,className:I(u.root,n),ownerState:r},i))});function mt(e){return A("MuiTableHead",e)}N("MuiTableHead",["root"]);const ft=["className","component"],vt=e=>{const{classes:t}=e;return z({root:["root"]},mt,t)},yt=P("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Ct={variant:"head"},ge="thead",Pt=p.forwardRef(function(t,s){const a=H({props:t,name:"MuiTableHead"}),{className:n,component:l=ge}=a,i=$(a,ft),r=d({},a,{component:l}),u=vt(r);return o.jsx(V.Provider,{value:Ct,children:o.jsx(yt,d({as:l,className:I(u.root,n),ref:s,role:l===ge?null:"rowgroup",ownerState:r},i))})}),jt=se(o.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Tt=se(o.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),Rt=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],wt=p.forwardRef(function(t,s){var a,n,l,i,r,u,h,c;const{backIconButtonProps:m,count:C,disabled:x=!1,getItemAriaLabel:v,nextIconButtonProps:M,onPageChange:b,page:g,rowsPerPage:j,showFirstButton:k,showLastButton:D,slots:T={},slotProps:f={}}=t,Z=$(t,Rt),y=ke(),ee=_=>{b(_,0)},te=_=>{b(_,g-1)},U=_=>{b(_,g+1)},R=_=>{b(_,Math.max(0,Math.ceil(C/j)-1))},B=(a=T.firstButton)!=null?a:F,O=(n=T.lastButton)!=null?n:F,E=(l=T.nextButton)!=null?l:F,q=(i=T.previousButton)!=null?i:F,W=(r=T.firstButtonIcon)!=null?r:Je,G=(u=T.lastButtonIcon)!=null?u:Qe,S=(h=T.nextButtonIcon)!=null?h:Tt,ne=(c=T.previousButtonIcon)!=null?c:jt,Pe=y?O:B,je=y?E:q,Te=y?q:E,Re=y?B:O,we=y?f.lastButton:f.firstButton,le=y?f.nextButton:f.previousButton,re=y?f.previousButton:f.nextButton,Be=y?f.firstButton:f.lastButton;return o.jsxs("div",d({ref:s},Z,{children:[k&&o.jsx(Pe,d({onClick:ee,disabled:x||g===0,"aria-label":v("first",g),title:v("first",g)},we,{children:y?o.jsx(G,d({},f.lastButtonIcon)):o.jsx(W,d({},f.firstButtonIcon))})),o.jsx(je,d({onClick:te,disabled:x||g===0,color:"inherit","aria-label":v("previous",g),title:v("previous",g)},le??m,{children:y?o.jsx(S,d({},f.nextButtonIcon)):o.jsx(ne,d({},f.previousButtonIcon))})),o.jsx(Te,d({onClick:U,disabled:x||(C!==-1?g>=Math.ceil(C/j)-1:!1),color:"inherit","aria-label":v("next",g),title:v("next",g)},re??M,{children:y?o.jsx(ne,d({},f.previousButtonIcon)):o.jsx(S,d({},f.nextButtonIcon))})),D&&o.jsx(Re,d({onClick:R,disabled:x||g>=Math.ceil(C/j)-1,"aria-label":v("last",g),title:v("last",g)},Be,{children:y?o.jsx(W,d({},f.firstButtonIcon)):o.jsx(G,d({},f.lastButtonIcon))}))]}))});function Bt(e){return A("MuiTablePagination",e)}const K=N("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var be;const St=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],It=P(w,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}})),kt=P(fe,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>d({[`& .${K.actions}`]:t.actions},t.toolbar)})(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${K.actions}`]:{flexShrink:0,marginLeft:20}})),$t=P("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,t)=>t.spacer})({flex:"1 1 100%"}),Mt=P("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,t)=>t.selectLabel})(({theme:e})=>d({},e.typography.body2,{flexShrink:0})),Lt=P($e,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>d({[`& .${K.selectIcon}`]:t.selectIcon,[`& .${K.select}`]:t.select},t.input,t.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${K.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),Nt=P(ve,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,t)=>t.menuItem})({}),At=P("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,t)=>t.displayedRows})(({theme:e})=>d({},e.typography.body2,{flexShrink:0}));function Ht({from:e,to:t,count:s}){return`${e}–${t} of ${s!==-1?s:`more than ${t}`}`}function zt(e){return`Go to ${e} page`}const Dt=e=>{const{classes:t}=e;return z({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},Bt,t)},_t=p.forwardRef(function(t,s){var a;const n=H({props:t,name:"MuiTablePagination"}),{ActionsComponent:l=wt,backIconButtonProps:i,className:r,colSpan:u,component:h=w,count:c,disabled:m=!1,getItemAriaLabel:C=zt,labelDisplayedRows:x=Ht,labelRowsPerPage:v="Rows per page:",nextIconButtonProps:M,onPageChange:b,onRowsPerPageChange:g,page:j,rowsPerPage:k,rowsPerPageOptions:D=[10,25,50,100],SelectProps:T={},showFirstButton:f=!1,showLastButton:Z=!1,slotProps:y={},slots:ee={}}=n,te=$(n,St),U=n,R=Dt(U),B=(a=y==null?void 0:y.select)!=null?a:T,O=B.native?"option":Nt;let E;(h===w||h==="td")&&(E=u||1e3);const q=ie(B.id),W=ie(B.labelId),G=()=>c===-1?(j+1)*k:k===-1?c:Math.min(c,(j+1)*k);return o.jsx(It,d({colSpan:E,ref:s,as:h,ownerState:U,className:I(R.root,r)},te,{children:o.jsxs(kt,{className:R.toolbar,children:[o.jsx($t,{className:R.spacer}),D.length>1&&o.jsx(Mt,{className:R.selectLabel,id:W,children:v}),D.length>1&&o.jsx(Lt,d({variant:"standard"},!B.variant&&{input:be||(be=o.jsx(Me,{}))},{value:k,onChange:g,id:q,labelId:W},B,{classes:d({},B.classes,{root:I(R.input,R.selectRoot,(B.classes||{}).root),select:I(R.select,(B.classes||{}).select),icon:I(R.selectIcon,(B.classes||{}).icon)}),disabled:m,children:D.map(S=>p.createElement(O,d({},!Le(O)&&{ownerState:U},{className:R.menuItem,key:S.label?S.label:S,value:S.value?S.value:S}),S.label?S.label:S))})),o.jsx(At,{className:R.displayedRows,children:x({from:c===0?0:j*k+1,to:G(),count:c===-1?-1:c,page:j})}),o.jsx(l,{className:R.actions,backIconButtonProps:i,count:c,nextIconButtonProps:M,onPageChange:b,page:j,rowsPerPage:k,showFirstButton:f,showLastButton:Z,slotProps:y.actions,slots:ee.actions,getItemAriaLabel:C,disabled:m})]})}))});function Ft(e){return A("MuiTableRow",e)}const he=N("MuiTableRow",["root","selected","hover","head","footer"]),Ut=["className","component","hover","selected"],Ot=e=>{const{classes:t,selected:s,hover:a,head:n,footer:l}=e;return z({root:["root",s&&"selected",a&&"hover",n&&"head",l&&"footer"]},Ft,t)},Et=P("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.head&&t.head,s.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${he.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${he.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:J(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:J(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),xe="tr",Y=p.forwardRef(function(t,s){const a=H({props:t,name:"MuiTableRow"}),{className:n,component:l=xe,hover:i=!1,selected:r=!1}=a,u=$(a,Ut),h=p.useContext(V),c=d({},a,{component:l,hover:i,selected:r,head:h&&h.variant==="head",footer:h&&h.variant==="footer"}),m=Ot(c);return o.jsx(Et,d({as:l,ref:s,className:I(m.root,n),role:l===xe?null:"row",ownerState:c},u))}),Wt=se(o.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function Kt(e){return A("MuiTableSortLabel",e)}const oe=N("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),qt=["active","children","className","direction","hideSortIcon","IconComponent"],Gt=e=>{const{classes:t,direction:s,active:a}=e,n={root:["root",a&&"active"],icon:["icon",`iconDirection${L(s)}`]};return z(n,Kt,t)},Jt=P(Ne,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.active&&t.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${oe.icon}`]:{opacity:.5}},[`&.${oe.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${oe.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),Qt=P("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.icon,t[`iconDirection${L(s.direction)}`]]}})(({theme:e,ownerState:t})=>d({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},t.direction==="desc"&&{transform:"rotate(0deg)"},t.direction==="asc"&&{transform:"rotate(180deg)"})),Xt=p.forwardRef(function(t,s){const a=H({props:t,name:"MuiTableSortLabel"}),{active:n=!1,children:l,className:i,direction:r="asc",hideSortIcon:u=!1,IconComponent:h=Wt}=a,c=$(a,qt),m=d({},a,{active:n,direction:r,hideSortIcon:u,IconComponent:h}),C=Gt(m);return o.jsxs(Jt,d({className:I(C.root,i),component:"span",disableRipple:!0,ownerState:m,ref:s},c,{children:[l,u&&!n?null:o.jsx(Qt,{as:h,className:I(C.icon),ownerState:m})]}))});function Vt({searchQuery:e,...t}){return o.jsx(Y,{...t,children:o.jsx(w,{align:"center",colSpan:7,children:o.jsxs(ae,{sx:{py:15,textAlign:"center"},children:[o.jsx(Q,{variant:"h6",sx:{mb:1},children:"Not found"}),o.jsxs(Q,{variant:"body2",children:["No results found for  ",o.jsxs("strong",{children:['"',e,'"']}),".",o.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}function Yt({row:e,selected:t,onSelectRow:s}){const[a,n]=p.useState(null),l=p.useCallback(r=>{n(r.currentTarget)},[]),i=p.useCallback(()=>{n(null)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(Ae,{in:!0,timeout:500,children:o.jsxs(Y,{hover:!0,tabIndex:-1,role:"checkbox",selected:t,children:[o.jsx(w,{padding:"checkbox",children:o.jsx(ye,{disableRipple:!0,checked:t,onChange:s})}),o.jsx(w,{component:"th",scope:"row",children:o.jsxs(ae,{gap:2,display:"flex",alignItems:"center",children:[o.jsx(He,{alt:e.name,src:"/assets/images/avatar/avatar-25.webp"}),e.name]})}),o.jsx(w,{children:e.message}),o.jsx(w,{children:o.jsx(ce,{href:`mailto:${e.email}`,children:e.email})}),o.jsx(w,{children:o.jsx(ce,{href:`tel:${e.phone}`,children:e.phone})}),o.jsx(w,{align:"right",children:o.jsx(F,{onClick:l,children:o.jsx(X,{icon:"eva:more-vertical-fill"})})})]})}),o.jsx(ze,{open:!!a,anchorEl:a,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:o.jsx(De,{disablePadding:!0,sx:{p:.5,gap:.5,width:140,display:"flex",flexDirection:"column",[`& .${de.root}`]:{px:1,gap:2,borderRadius:.75,[`&.${de.selected}`]:{bgcolor:"action.selected"}}},children:o.jsxs(ve,{onClick:i,sx:{color:"error.main"},children:[o.jsx(X,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})})]})}const Zt={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function eo(e,t,s){return e?Math.max(0,(1+e)*t-s):0}function me(e,t,s){return t[s]<e[s]?-1:t[s]>e[s]?1:0}function to(e,t){return e==="desc"?(s,a)=>me(s,a,t):(s,a)=>-me(s,a,t)}function oo({inputData:e,comparator:t,filterName:s}){const a=e.map((n,l)=>[n,l]);return a.sort((n,l)=>{const i=t(n[0],l[0]);return i!==0?i:n[1]-l[1]}),e=a.map(n=>n[0]),s&&(e=e.filter(n=>String(n.name).toLowerCase().indexOf(s.toLowerCase())!==-1)),e}function so({order:e,onSort:t,orderBy:s,rowCount:a,headLabel:n,numSelected:l,onSelectAllRows:i}){return o.jsx(Pt,{children:o.jsxs(Y,{children:[o.jsx(w,{padding:"checkbox",children:o.jsx(ye,{indeterminate:l>0&&l<a,checked:a>0&&l===a,onChange:r=>i(r.target.checked)})}),n.map(r=>o.jsx(w,{align:r.align||"left",sortDirection:s===r.id?e:!1,sx:{width:r.width,minWidth:r.minWidth},children:o.jsxs(Xt,{hideSortIcon:!0,active:s===r.id,direction:s===r.id?e:"asc",onClick:()=>t(r.id),children:[r.label,s===r.id?o.jsx(ae,{sx:{...Zt},children:e==="desc"?"sorted descending":"sorted ascending"}):null]})},r.id))]})})}function ao({emptyRows:e,height:t,sx:s,...a}){return e?o.jsx(Y,{sx:{...t&&{height:t*e},...s},...a,children:o.jsx(w,{colSpan:9})}):null}function no({numSelected:e,filterName:t,onFilterName:s}){return o.jsxs(fe,{sx:{height:96,display:"flex",justifyContent:"space-between",p:a=>a.spacing(0,1,0,3),...e>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[e>0?o.jsxs(Q,{component:"div",variant:"subtitle1",children:[e," selected"]}):o.jsx(_e,{fullWidth:!0,value:t,onChange:s,placeholder:"Search messages...",startAdornment:o.jsx(Fe,{position:"start",children:o.jsx(X,{width:20,icon:"eva:search-fill",sx:{color:"text.disabled"}})}),sx:{maxWidth:320}}),e>0?o.jsx(Ue,{title:"Delete",children:o.jsx(F,{children:o.jsx(X,{icon:"solar:trash-bin-trash-bold"})})}):o.jsx(o.Fragment,{})]})}function lo({components:e}){const t=ro(),[s,a]=Oe(),[n,l]=p.useState(""),[i,r]=p.useState([]);p.useEffect(()=>{fetch("https://white-vulpes.hasura.app/v1/graphql",{method:"POST",headers:{Authorization:`Bearer ${a}`},body:JSON.stringify({query:e.query,variables:{website_id:"267b46d5-d330-478b-9a51-89af8bfb7528"}})}).then(c=>c.json()).then(c=>{r(c.data.messages)})},[a,e]);const u=oo({inputData:i,comparator:to(t.order,t.orderBy),filterName:n}),h=!u.length&&!!n;return o.jsxs(Ee,{children:[o.jsx(Q,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Messages"}),o.jsxs(We,{children:[o.jsx(no,{numSelected:t.selected.length,filterName:n,onFilterName:c=>{l(c.target.value),t.onResetPage()}}),o.jsx(Ke,{children:o.jsx(xt,{sx:{overflow:"unset"},children:o.jsxs(et,{sx:{minWidth:800},children:[o.jsx(so,{order:t.order,orderBy:t.orderBy,rowCount:i.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:c=>t.onSelectAllRows(c,i.map(m=>m.id)),headLabel:[{id:"name",label:"Name"},{id:"message",label:"Message"},{id:"email",label:"Email"},{id:"phone",label:"Phone"},{id:""}]}),o.jsxs(lt,{children:[u.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map(c=>o.jsx(Yt,{row:c,selected:t.selected.includes(c.id?c.id:""),onSelectRow:()=>t.onSelectRow(c.id?c.id:"")},c.id)),o.jsx(ao,{height:68,emptyRows:eo(t.page,t.rowsPerPage,i.length)}),h&&o.jsx(Vt,{searchQuery:n})]})]})})}),o.jsx(_t,{component:"div",page:t.page,count:i.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:t.onChangeRowsPerPage})]})]})}function ro(){const[e,t]=p.useState(0),[s,a]=p.useState("name"),[n,l]=p.useState(5),[i,r]=p.useState([]),[u,h]=p.useState("asc"),c=p.useCallback(b=>{h(s===b&&u==="asc"?"desc":"asc"),a(b)},[u,s]),m=p.useCallback((b,g)=>{if(b){r(g);return}r([])},[]),C=p.useCallback(b=>{const g=i.includes(b)?i.filter(j=>j!==b):[...i,b];r(g)},[i]),x=p.useCallback(()=>{t(0)},[]),v=p.useCallback((b,g)=>{t(g)},[]),M=p.useCallback(b=>{l(parseInt(b.target.value,10)),x()},[x]);return{page:e,order:u,onSort:c,orderBy:s,selected:i,rowsPerPage:n,onSelectRow:C,onResetPage:x,onChangePage:v,onSelectAllRows:m,onChangeRowsPerPage:M}}function po({nav:e}){return o.jsxs(o.Fragment,{children:[o.jsx(qe,{children:o.jsxs("title",{children:[" ",`Messages - ${Ge.appName}`]})}),o.jsx(lo,{components:JSON.parse(e.components)})]})}export{po as default};