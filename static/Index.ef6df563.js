import"./vue.c1672130.js";import{S as v}from"./sortablejs.a0bf7037.js";import{Q as m,R as p,S as f}from"./@element-plus.7e1bc788.js";import U from"./PinnedCard.95a5c569.js";import{d as V,e as x,a2 as z,j as J,J as M,a6 as h,o as w,c as F,Z as s,S as t,a as e,F as I,a9 as j,R as P,Y as b,u as l,X as n,M as T,az as q,aA as G}from"./@vue.09569551.js";import{_ as Q}from"./index.eaf6131b.js";import"./element-plus.4f823412.js";import"./lodash-es.dc961dbb.js";import"./@vueuse.b65f177f.js";import"./@popperjs.1b99db09.js";import"./@ctrl.9835af1a.js";import"./dayjs.6f64b8ed.js";import"./@amap.355e2153.js";import"./async-validator.7d7c1b66.js";import"./memoize-one.af833c6f.js";import"./escape-html.540651be.js";import"./normalize-wheel-es.322481fb.js";import"./@floating-ui.338bbb63.js";import"./pinia.883ae6ad.js";import"./chroma-js.74ccae7c.js";import"./axios.1b92673f.js";import"./nprogress.f2ef1f3b.js";import"./vue-router.c7420244.js";import"./@iconify.69a8b4f7.js";import"./vite-plugin-mock.aff57788.js";import"./mockjs.9dfcd39d.js";import"./path-to-regexp.17960349.js";const a=k=>(q("data-v-7097f3af"),k=k(),G(),k),X={class:"dragable-container"},Y=a(()=>e("h4",{class:"page-title"},"\u62D6\u62FD\u7EC4\u4EF6",-1)),Z={class:"page-title-right"},H={style:{"margin-right":"10px"}},K={style:{"text-align":"left"}},W=n("\u62D6\u62FD\u7EC4\u4EF6\u5E38\u7528\u4E8E\u5BF9\u5F53\u524D\u6D3B\u52A8\u5217\u8868\u8FDB\u884C\u4F18\u5148\u7EA7\u91CD\u65B0\u6392\u5217\u573A\u666F\u3002"),$=n("sortableJs"),ee={class:"board"},se={class:"task"},te=a(()=>e("h5",{class:"task-header text-upercase margin-top-0"},"TODO(3)",-1)),ae={class:"flex flex-row flex-between"},oe=a(()=>e("span",{class:"badge badge-secondary"},"medium",-1)),le={class:"text-muted"},ne={class:"margin-top-1 margin-bottom-1"},ce={class:"text-muted margin-bottom-1"},ie={class:"text-norap margin-right-1"},de={class:"text-norap margin-right-1"},re={class:"flex flex-row flex-between"},_e={class:"flex flex-row flex-start align-center"},ue={class:"name"},me={class:"handle"},pe={class:"task"},fe=a(()=>e("h5",{class:"task-header text-upercase margin-top-0"},"In Progress (2)",-1)),he=a(()=>e("div",{class:"flex flex-row flex-between"},[e("span",{class:"badge badge-secondary"},"medium"),e("small",{class:"text-muted"}," 18 jul 2018 ")],-1)),ge=a(()=>e("h5",{class:"margin-top-1 margin-bottom-1"},"kanban reafactor",-1)),xe={class:"text-muted margin-bottom-1"},be={class:"text-norap margin-right-1"},ve=n(" web"),we={class:"text-norap margin-right-1"},ke=n(" 22 Comments"),Fe={class:"flex flex-row flex-between"},Ee={class:"flex flex-row flex-start align-center"},ye=a(()=>e("p",{class:"name"},"\u9ED8\u8BA4\u7528\u6237",-1)),De={class:"handle"},Ae=a(()=>e("div",{class:"flex flex-row flex-between"},[e("span",{class:"badge badge-success"},"low"),e("small",{class:"text-muted"}," 19jul 2018 ")],-1)),Be=a(()=>e("h5",{class:"margin-top-1 margin-bottom-1"},"bugfix UI change",-1)),Ce={class:"text-muted margin-bottom-1"},Re={class:"text-norap margin-right-1"},ze=n(" IOS"),Ie={class:"text-norap margin-right-1"},je=n(" 28 Comments"),Se={class:"flex flex-row flex-between"},Ne={class:"flex flex-row flex-start align-center"},Le=a(()=>e("p",{class:"name"},"\u9ED8\u8BA4\u7528\u6237",-1)),Oe={class:"handle"},Ue={class:"task"},Ve=a(()=>e("h5",{class:"task-header text-upercase margin-top-0"},"review (3)",-1)),Je=a(()=>e("div",{class:"flex flex-row flex-between"},[e("span",{class:"badge badge-danger"},"heigh"),e("small",{class:"text-muted"}," 19jul 2018 ")],-1)),Me=a(()=>e("h5",{class:"margin-top-1 margin-bottom-1"},"home page refactor",-1)),Pe={class:"text-muted margin-bottom-1"},Te={class:"text-norap margin-right-1"},qe=n(" web"),Ge={class:"text-norap margin-right-1"},Qe=n(" 28 Comments"),Xe={class:"flex flex-row flex-between"},Ye={class:"flex flex-row flex-start align-center"},Ze=a(()=>e("p",{class:"name"},"\u9ED8\u8BA4\u7528\u6237",-1)),He={class:"handle"},Ke=a(()=>e("div",{class:"flex flex-row flex-between"},[e("span",{class:"badge badge-danger"},"heigh"),e("small",{class:"text-muted"}," 19jul 2018 ")],-1)),We=a(()=>e("h5",{class:"margin-top-1 margin-bottom-1"},"analysis page refactor",-1)),$e={class:"text-muted margin-bottom-1"},es={class:"text-norap margin-right-1"},ss=n(" web"),ts={class:"text-norap margin-right-1"},as=n(" 28 Comments"),os={class:"flex flex-row flex-between"},ls={class:"flex flex-row flex-start align-center"},ns=a(()=>e("p",{class:"name"},"\u9ED8\u8BA4\u7528\u6237",-1)),cs={class:"handle"},is=a(()=>e("div",{class:"flex flex-row flex-between"},[e("span",{class:"badge badge-danger"},"heigh"),e("small",{class:"text-muted"}," 19jul 2018 ")],-1)),ds=a(()=>e("h5",{class:"margin-top-1 margin-bottom-1"},"dashboard page refactor",-1)),rs={class:"text-muted margin-bottom-1"},_s={class:"text-norap margin-right-1"},us=n(" web"),ms={class:"text-norap margin-right-1"},ps=n(" 28 Comments"),fs={class:"flex flex-row flex-between"},hs={class:"flex flex-row flex-start align-center"},gs=a(()=>e("p",{class:"name"},"\u9ED8\u8BA4\u7528\u6237",-1)),xs={class:"handle"},bs={class:"task"},vs=a(()=>e("h5",{class:"task-header text-upercase margin-top-0"},"done (3)",-1)),ws=a(()=>e("div",{class:"flex flex-row flex-between"},[e("span",{class:"badge badge-success"},"low"),e("small",{class:"text-muted"}," 19jul 2018 ")],-1)),ks=a(()=>e("h5",{class:"margin-top-1 margin-bottom-1"},"draggable design width sortable",-1)),Fs={class:"text-muted margin-bottom-1"},Es={class:"text-norap margin-right-1"},ys=n(" web"),Ds={class:"text-norap margin-right-1"},As=n(" 28 Comments"),Bs={class:"flex flex-row flex-between"},Cs={class:"flex flex-row flex-start align-center"},Rs=a(()=>e("p",{class:"name"},"\u9ED8\u8BA4\u7528\u6237",-1)),zs={class:"handle"},Is={style:{"text-align":"left"}},js=a(()=>e("span",null,"overview pinned \u5C55\u793A\u573A\u666F",-1)),Ss={style:{"text-align":"left"}},Ns=a(()=>e("span",null,"\u6D3B\u52A8\u5217\u8868\u91CD\u65B0\u6392\u5217\u573A\u666F",-1)),Ls={class:"section"},Os=a(()=>e("i",{class:"list-circle"},null,-1)),Us=V({__name:"Index",setup(k){let S=0;const g=()=>String(S++),E=x(),y=x(),D=x(),A=x(),B=x();let C;const N=z({todoList:[{id:1,priority:2,date:"19jul 2018",title:"dashboard page refactor",tag:"web",comments:28,avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u7528\u6237"},{id:2,priority:1,date:"19jul 2018",title:"role page refactor",tag:"web",comments:28,avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u7528\u6237"}],inProgress:[{id:1,priority:2,date:"19jul 2018",title:"kanban reafactor",tag:"web",comments:22,avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u7528\u6237"},{id:2,priority:1,date:"19jul 2018",title:"bugfix  UI change",tag:"web",comments:13,avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",name:"\u9ED8\u8BA4\u7528\u6237"}]}),_=z({}),L=x([{id:g(),task:"task1\uFF1A\u53EF\u62D6\u62FD\u7EC4\u4EF6\u5F00\u53D1",classNames:"bg-success"},{id:g(),task:"task2\uFF1A\u76D1\u63A7\u9875\u9762\u5F00\u53D1",classNames:"bg-info"},{id:g(),task:"task3\uFF1A\u4F4E\u4EE3\u7801\u5E73\u53F0\u5F00\u53D1",classNames:"bg-warning"},{id:g(),task:"task4\uFF1A\u4F4E\u4EE3\u7801\u5E73\u53F0\u5F00\u53D1",classNames:"bg-dark"},{id:g(),task:"task5\uFF1A\u4F4E\u4EE3\u7801\u5E73\u53F0\u5F00\u53D1",classNames:"bg-danger"},{id:g(),task:"task6\uFF1A\u4F4E\u4EE3\u7801\u5E73\u53F0\u5F00\u53D1",classNames:"bg-success"}]);return J(()=>{C=v.create(E.value),_.todo=new v(y.value,{group:"shared",animation:150,easing:"cubic-bezier(1, 0, 0, 1)"}),_.progress=new v(A.value,{group:"shared",animation:150,easing:"cubic-bezier(1, 0, 0, 1)"}),_.reviewRef=new v(D.value,{group:"shared",animation:150,easing:"cubic-bezier(1, 0, 0, 1)"}),_.doneRef=new v(B.value,{group:"shared",animation:150,easing:"cubic-bezier(1, 0, 0, 1)"})}),M(()=>{C.destroy(),_.todo.destroy(),_.progress.destroy(),_.review.destroy(),_.doneRef.destroy()}),(Vs,Js)=>{const O=h("el-link"),d=h("el-col"),r=h("el-row"),o=h("el-icon"),u=h("el-avatar"),i=h("el-card"),R=h("el-divider");return w(),F("div",X,[s(i,null,{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,class:"page-title-box"},{default:t(()=>[Y,e("div",Z,[e("div",H,[e("span",K,[W,s(O,{type:"primary",href:"http://www.sortablejs.com/index.html"},{default:t(()=>[$]),_:1})])])])]),_:1})]),_:1}),s(r,null,{default:t(()=>[s(d,{span:24},{default:t(()=>[e("div",ee,[e("div",se,[te,e("div",{ref_key:"todoRef",ref:y,class:"task-list-item"},[(w(!0),F(I,null,j(N.todoList,c=>(w(),P(i,{key:c.id,shadow:"hover",class:"card"},{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,style:{"text-align":"left"}},{default:t(()=>[e("div",ae,[oe,e("small",le,b(c.date),1)]),e("h5",ne,b(c.title),1),e("p",ce,[e("span",ie,[s(o,null,{default:t(()=>[s(l(m))]),_:1}),n(" "+b(c.tag),1)]),e("span",de,[s(o,null,{default:t(()=>[s(l(p))]),_:1}),n(" "+b(c.comments)+" Comments",1)])]),e("div",re,[e("div",_e,[s(u,{size:"small",src:c.avatar},null,8,["src"]),e("p",ue,b(c.name),1)]),e("div",me,[s(o,{class:"pointer"},{default:t(()=>[s(l(f))]),_:1})])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))],512)]),e("div",pe,[fe,e("div",{ref_key:"progressRef",ref:A,class:"task-list-item"},[s(i,{shadow:"hover",class:"card"},{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,style:{"text-align":"left"}},{default:t(()=>[he,ge,e("p",xe,[e("span",be,[s(o,null,{default:t(()=>[s(l(m))]),_:1}),ve]),e("span",we,[s(o,null,{default:t(()=>[s(l(p))]),_:1}),ke])]),e("div",Fe,[e("div",Ee,[s(u,{size:"small",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),ye]),e("div",De,[s(o,{class:"pointer"},{default:t(()=>[s(l(f))]),_:1})])])]),_:1})]),_:1})]),_:1}),s(i,{shadow:"hover",class:"card"},{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,style:{"text-align":"left"}},{default:t(()=>[Ae,Be,e("p",Ce,[e("span",Re,[s(o,null,{default:t(()=>[s(l(m))]),_:1}),ze]),e("span",Ie,[s(o,null,{default:t(()=>[s(l(p))]),_:1}),je])]),e("div",Se,[e("div",Ne,[s(u,{size:"small",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),Le]),e("div",Oe,[s(o,{class:"pointer"},{default:t(()=>[s(l(f))]),_:1})])])]),_:1})]),_:1})]),_:1})],512)]),e("div",Ue,[Ve,e("div",{ref_key:"reviewRef",ref:D,class:"task-list-item"},[s(i,{shadow:"hover",class:"card"},{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,style:{"text-align":"left"}},{default:t(()=>[Je,Me,e("p",Pe,[e("span",Te,[s(o,null,{default:t(()=>[s(l(m))]),_:1}),qe]),e("span",Ge,[s(o,null,{default:t(()=>[s(l(p))]),_:1}),Qe])]),e("div",Xe,[e("div",Ye,[s(u,{size:"small",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),Ze]),e("div",He,[s(o,{class:"pointer"},{default:t(()=>[s(l(f))]),_:1})])])]),_:1})]),_:1})]),_:1}),s(i,{shadow:"hover",class:"card"},{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,style:{"text-align":"left"}},{default:t(()=>[Ke,We,e("p",$e,[e("span",es,[s(o,null,{default:t(()=>[s(l(m))]),_:1}),ss]),e("span",ts,[s(o,null,{default:t(()=>[s(l(p))]),_:1}),as])]),e("div",os,[e("div",ls,[s(u,{size:"small",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),ns]),e("div",cs,[s(o,{class:"pointer"},{default:t(()=>[s(l(f))]),_:1})])])]),_:1})]),_:1})]),_:1}),s(i,{shadow:"hover",class:"card"},{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,style:{"text-align":"left"}},{default:t(()=>[is,ds,e("p",rs,[e("span",_s,[s(o,null,{default:t(()=>[s(l(m))]),_:1}),us]),e("span",ms,[s(o,null,{default:t(()=>[s(l(p))]),_:1}),ps])]),e("div",fs,[e("div",hs,[s(u,{size:"small",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),gs]),e("div",xs,[s(o,{class:"pointer"},{default:t(()=>[s(l(f))]),_:1})])])]),_:1})]),_:1})]),_:1})],512)]),e("div",bs,[vs,e("div",{ref_key:"doneRef",ref:B,class:"task-list-item"},[s(i,{shadow:"hover",class:"card"},{default:t(()=>[s(r,null,{default:t(()=>[s(d,{span:24,style:{"text-align":"left"}},{default:t(()=>[ws,ks,e("p",Fs,[e("span",Es,[s(o,null,{default:t(()=>[s(l(m))]),_:1}),ys]),e("span",Ds,[s(o,null,{default:t(()=>[s(l(p))]),_:1}),As])]),e("div",Bs,[e("div",Cs,[s(u,{size:"small",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),Rs]),e("div",zs,[s(o,{class:"pointer"},{default:t(()=>[s(l(f))]),_:1})])])]),_:1})]),_:1})]),_:1})],512)])])]),_:1})]),_:1}),s(i,{class:"box-card"},{default:t(()=>[e("div",Is,[js,s(R)]),s(U)]),_:1}),s(i,{class:"box-card"},{default:t(()=>[e("div",Ss,[Ns,s(R)]),e("div",Ls,[e("div",{ref_key:"itemsRef",ref:E},[(w(!0),F(I,null,j(L.value,c=>(w(),F("div",{key:c.id,class:T(["external-events",[c.classNames]])},[Os,n(b(c.task),1)],2))),128))],512)])]),_:1})]),_:1})])}}});const pt=Q(Us,[["__scopeId","data-v-7097f3af"],["__file","/home/runner/work/vue-vite-ts-admin/vue-vite-ts-admin/src/views/Common/Dragable/Index.vue"]]);export{pt as default};