"use strict";(self.webpackChunkb_01_hotel_github_io=self.webpackChunkb_01_hotel_github_io||[]).push([[2711],{9331:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});r(6540);var s=r(8774),a=r(1312),i=r(1003),l=r(781),n=r(1107),c=r(4848);function h(e){let{year:t,posts:r}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.A,{as:"h3",id:t,children:t}),(0,c.jsx)("ul",{children:r.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(s.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function o(e){let{years:t}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(h,{...e})},t)))})})})}function d(e){let{archive:t}=e;const r=(0,a.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,a.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const t=e.reduce(((e,t)=>{const r=t.metadata.date.split("-")[0],s=e.get(r)??[];return e.set(r,[t,...s])}),new Map);return Array.from(t,(e=>{let[t,r]=e;return{year:t,posts:r}}))}(t.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.be,{title:r,description:s}),(0,c.jsxs)(l.A,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.A,{as:"h1",className:"hero__title",children:r}),(0,c.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,c.jsx)("main",{children:h.length>0&&(0,c.jsx)(o,{years:h})})]})]})}}}]);