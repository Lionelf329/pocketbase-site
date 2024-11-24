import{S as Ns,i as Gs,s as Hs,k as a,a as c,q as i,l,m as s,h as t,c as d,r as n,n as o,K as ne,b as p,G as e,L as Vs,Q as Cs,H as Us,M as Js}from"../chunks/index.a7566c1a.js";function Ws(S){let u,M,B,ce,de,R,Se,O,Ft,jt,st,be,Kt,rt,Ee,Xt,ot,k,T,w,Zt,ea,x,ta,aa,z,V,g,Me,C,v,Be,la,U,sa,Gl="v0.22.27",ra,oa,ia,q,na,Hl="14",ca,da,fa,Re,N,h,Oe,pa,G,ua,Jl="v0.22.27",va,ha,ma,H,_a,Wl="14",ba,Ea,wa,Te,J,m,ze,xa,W,ka,Yl="v0.22.27",ga,ya,Aa,Y,Ia,$l="14",Da,La,Pa,$,y,Ve,Q,_,Ce,Sa,F,Ma,Ql="v0.22.27",Ba,Ra,Oa,j,Ta,Fl="13",za,Va,Ca,Ue,K,b,qe,Ua,X,qa,jl="v0.22.27",Na,Ga,Ha,Z,Ja,Kl="13",Wa,Ya,$a,Ne,ee,E,Ge,Qa,te,Fa,Xl="v0.22.27",ja,Ka,Xa,ae,Za,Zl="13",el,tl,it,A,al,le,ll,sl,nt,ct,dt,se,rl,He,Je,ol,il,ft,fe,We,nl,cl,pt,pe,we,I,D,ue,Ye,dl,fl,$e,pl,ul,vl,ve,he,Qe,hl,ml,_l,xe,me,Fe,bl,El,ut,ke,wl,vt,ge,xl,ht,re,oe,je,kl,gl,Ke,yl,Al,Il,L,Xe,Dl,Ll,Pl,Sl,ie,Ml,ye,Bl,Rl,mt,P,Ol,Ze,Tl,zl,et,Vl,Cl,es;return{c(){u=a("div"),M=a("div"),B=a("i"),ce=c(),de=a("div"),R=a("p"),Se=i(`Please keep in mind that PocketBase is still under active development and full backward
            compatibility is not guaranteed before reaching v1.0.0. PocketBase is not recommended for
            production critical applications yet, unless you are fine with reading the
            `),O=a("a"),Ft=i("changelog"),jt=i(`
            and applying some manual migration steps from time to time.`),st=c(),be=a("p"),Kt=i(`PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions,
    built-in auth management, convenient dashboard UI and simple REST-ish API.`),rt=c(),Ee=a("p"),Xt=i("The easiest way to get started is to download the prebuilt minimal PocketBase app:"),ot=c(),k=a("div"),T=a("div"),w=a("button"),Zt=i("x64"),ea=c(),x=a("button"),ta=i("ARM64"),aa=c(),z=a("div"),V=a("div"),g=a("ul"),Me=a("li"),C=a("div"),v=a("a"),Be=a("i"),la=c(),U=a("span"),sa=i("Download "),ra=i(Gl),oa=i(" for Linux x64"),ia=c(),q=a("small"),na=i("(~"),ca=i(Hl),da=i("MB zip)"),fa=c(),Re=a("li"),N=a("div"),h=a("a"),Oe=a("i"),pa=c(),G=a("span"),ua=i("Download "),va=i(Jl),ha=i(" for Windows x64"),ma=c(),H=a("small"),_a=i("(~"),ba=i(Wl),Ea=i("MB zip)"),wa=c(),Te=a("li"),J=a("div"),m=a("a"),ze=a("i"),xa=c(),W=a("span"),ka=i("Download "),ga=i(Yl),ya=i(" for macOS x64"),Aa=c(),Y=a("small"),Ia=i("(~"),Da=i($l),La=i("MB zip)"),Pa=c(),$=a("div"),y=a("ul"),Ve=a("li"),Q=a("div"),_=a("a"),Ce=a("i"),Sa=c(),F=a("span"),Ma=i("Download "),Ba=i(Ql),Ra=i(" for Linux ARM64"),Oa=c(),j=a("small"),Ta=i("(~"),za=i(Fl),Va=i("MB zip)"),Ca=c(),Ue=a("li"),K=a("div"),b=a("a"),qe=a("i"),Ua=c(),X=a("span"),qa=i("Download "),Na=i(jl),Ga=i(" for Windows ARM64"),Ha=c(),Z=a("small"),Ja=i("(~"),Wa=i(Kl),Ya=i("MB zip)"),$a=c(),Ne=a("li"),ee=a("div"),E=a("a"),Ge=a("i"),Qa=c(),te=a("span"),Fa=i("Download "),ja=i(Xl),Ka=i(" for macOS ARM64"),Xa=c(),ae=a("small"),Za=i("(~"),el=i(Zl),tl=i("MB zip)"),it=c(),A=a("p"),al=i(`See the
    `),le=a("a"),ll=i("GitHub Releases page"),sl=i(`
    for other platforms and more details.`),nt=c(),ct=a("hr"),dt=c(),se=a("p"),rl=i(`Once you've extracted the archive, you could start the application by running
    `),He=a("code"),Je=a("strong"),ol=i("./pocketbase serve"),il=i(" in the extracted directory."),ft=c(),fe=a("p"),We=a("strong"),nl=i("And that's it!"),cl=i(" A web server will be started with the following routes:"),pt=c(),pe=a("div"),we=a("div"),I=a("ul"),D=a("li"),ue=a("a"),Ye=a("code"),dl=i("http://127.0.0.1:8090"),fl=i(`
                - if `),$e=a("code"),pl=i("pb_public"),ul=i(` directory exists, serves the static content from it (html, css, images,
                etc.)`),vl=c(),ve=a("li"),he=a("a"),Qe=a("code"),hl=i("http://127.0.0.1:8090/_/"),ml=i(`
                - Admin dashboard UI`),_l=c(),xe=a("li"),me=a("a"),Fe=a("code"),bl=i("http://127.0.0.1:8090/api/"),El=i(`
                - REST API`),ut=c(),ke=a("p"),wl=i(`The first time, when you access the Admin dashboard UI, it will prompt you to create your first admin
    account (email and pass).`),vt=c(),ge=a("p"),xl=i(`The prebuilt PocketBase executable will automatically create and manage 2 new directories alongside the
    executable:`),ht=c(),re=a("ul"),oe=a("li"),je=a("code"),kl=i("pb_data"),gl=i(` - stores your application data, uploaded files, etc. (usually should be added in
        `),Ke=a("code"),yl=i(".gitignore"),Al=i(")."),Il=c(),L=a("li"),Xe=a("code"),Dl=i("pb_migrations"),Ll=i(` - contains JS migration files with your collection changes (can be safely
        committed in your repository).
        `),Pl=a("br"),Sl=c(),ie=a("div"),Ml=i(`You can even write custom migration scripts. For more info check the
            `),ye=a("a"),Bl=i("JS migrations docs"),Rl=i("."),mt=c(),P=a("p"),Ol=i(`You could find all available commands and their options by running
    `),Ze=a("code"),Tl=i("./pocketbase --help"),zl=i(` or
    `),et=a("code"),Vl=i("./pocketbase [command] --help"),this.h()},l(r){u=l(r,"DIV",{class:!0});var f=s(u);M=l(f,"DIV",{class:!0});var ts=s(M);B=l(ts,"I",{class:!0}),s(B).forEach(t),ts.forEach(t),ce=d(f),de=l(f,"DIV",{class:!0});var as=s(de);R=l(as,"P",{});var _t=s(R);Se=n(_t,`Please keep in mind that PocketBase is still under active development and full backward
            compatibility is not guaranteed before reaching v1.0.0. PocketBase is not recommended for
            production critical applications yet, unless you are fine with reading the
            `),O=l(_t,"A",{href:!0,target:!0,rel:!0});var ls=s(O);Ft=n(ls,"changelog"),ls.forEach(t),jt=n(_t,`
            and applying some manual migration steps from time to time.`),_t.forEach(t),as.forEach(t),f.forEach(t),st=d(r),be=l(r,"P",{});var ss=s(be);Kt=n(ss,`PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions,
    built-in auth management, convenient dashboard UI and simple REST-ish API.`),ss.forEach(t),rt=d(r),Ee=l(r,"P",{});var rs=s(Ee);Xt=n(rs,"The easiest way to get started is to download the prebuilt minimal PocketBase app:"),rs.forEach(t),ot=d(r),k=l(r,"DIV",{class:!0});var bt=s(k);T=l(bt,"DIV",{class:!0});var Et=s(T);w=l(Et,"BUTTON",{type:!0,class:!0});var os=s(w);Zt=n(os,"x64"),os.forEach(t),ea=d(Et),x=l(Et,"BUTTON",{type:!0,class:!0});var is=s(x);ta=n(is,"ARM64"),is.forEach(t),Et.forEach(t),aa=d(bt),z=l(bt,"DIV",{class:!0});var wt=s(z);V=l(wt,"DIV",{class:!0});var ns=s(V);g=l(ns,"UL",{});var Ae=s(g);Me=l(Ae,"LI",{});var cs=s(Me);C=l(cs,"DIV",{class:!0});var xt=s(C);v=l(xt,"A",{href:!0,class:!0,target:!0,rel:!0});var kt=s(v);Be=l(kt,"I",{class:!0}),s(Be).forEach(t),la=d(kt),U=l(kt,"SPAN",{class:!0});var gt=s(U);sa=n(gt,"Download "),ra=n(gt,Gl),oa=n(gt," for Linux x64"),gt.forEach(t),kt.forEach(t),ia=d(xt),q=l(xt,"SMALL",{class:!0});var yt=s(q);na=n(yt,"(~"),ca=n(yt,Hl),da=n(yt,"MB zip)"),yt.forEach(t),xt.forEach(t),cs.forEach(t),fa=d(Ae),Re=l(Ae,"LI",{});var ds=s(Re);N=l(ds,"DIV",{class:!0});var At=s(N);h=l(At,"A",{href:!0,class:!0,target:!0,rel:!0});var It=s(h);Oe=l(It,"I",{class:!0}),s(Oe).forEach(t),pa=d(It),G=l(It,"SPAN",{class:!0});var Dt=s(G);ua=n(Dt,"Download "),va=n(Dt,Jl),ha=n(Dt," for Windows x64"),Dt.forEach(t),It.forEach(t),ma=d(At),H=l(At,"SMALL",{class:!0});var Lt=s(H);_a=n(Lt,"(~"),ba=n(Lt,Wl),Ea=n(Lt,"MB zip)"),Lt.forEach(t),At.forEach(t),ds.forEach(t),wa=d(Ae),Te=l(Ae,"LI",{});var fs=s(Te);J=l(fs,"DIV",{class:!0});var Pt=s(J);m=l(Pt,"A",{href:!0,class:!0,target:!0,rel:!0});var St=s(m);ze=l(St,"I",{class:!0}),s(ze).forEach(t),xa=d(St),W=l(St,"SPAN",{class:!0});var Mt=s(W);ka=n(Mt,"Download "),ga=n(Mt,Yl),ya=n(Mt," for macOS x64"),Mt.forEach(t),St.forEach(t),Aa=d(Pt),Y=l(Pt,"SMALL",{class:!0});var Bt=s(Y);Ia=n(Bt,"(~"),Da=n(Bt,$l),La=n(Bt,"MB zip)"),Bt.forEach(t),Pt.forEach(t),fs.forEach(t),Ae.forEach(t),ns.forEach(t),Pa=d(wt),$=l(wt,"DIV",{class:!0});var ps=s($);y=l(ps,"UL",{});var Ie=s(y);Ve=l(Ie,"LI",{});var us=s(Ve);Q=l(us,"DIV",{class:!0});var Rt=s(Q);_=l(Rt,"A",{href:!0,class:!0,target:!0,rel:!0});var Ot=s(_);Ce=l(Ot,"I",{class:!0}),s(Ce).forEach(t),Sa=d(Ot),F=l(Ot,"SPAN",{class:!0});var Tt=s(F);Ma=n(Tt,"Download "),Ba=n(Tt,Ql),Ra=n(Tt," for Linux ARM64"),Tt.forEach(t),Ot.forEach(t),Oa=d(Rt),j=l(Rt,"SMALL",{class:!0});var zt=s(j);Ta=n(zt,"(~"),za=n(zt,Fl),Va=n(zt,"MB zip)"),zt.forEach(t),Rt.forEach(t),us.forEach(t),Ca=d(Ie),Ue=l(Ie,"LI",{});var vs=s(Ue);K=l(vs,"DIV",{class:!0});var Vt=s(K);b=l(Vt,"A",{href:!0,class:!0,target:!0,rel:!0});var Ct=s(b);qe=l(Ct,"I",{class:!0}),s(qe).forEach(t),Ua=d(Ct),X=l(Ct,"SPAN",{class:!0});var Ut=s(X);qa=n(Ut,"Download "),Na=n(Ut,jl),Ga=n(Ut," for Windows ARM64"),Ut.forEach(t),Ct.forEach(t),Ha=d(Vt),Z=l(Vt,"SMALL",{class:!0});var qt=s(Z);Ja=n(qt,"(~"),Wa=n(qt,Kl),Ya=n(qt,"MB zip)"),qt.forEach(t),Vt.forEach(t),vs.forEach(t),$a=d(Ie),Ne=l(Ie,"LI",{});var hs=s(Ne);ee=l(hs,"DIV",{class:!0});var Nt=s(ee);E=l(Nt,"A",{href:!0,class:!0,target:!0,rel:!0});var Gt=s(E);Ge=l(Gt,"I",{class:!0}),s(Ge).forEach(t),Qa=d(Gt),te=l(Gt,"SPAN",{class:!0});var Ht=s(te);Fa=n(Ht,"Download "),ja=n(Ht,Xl),Ka=n(Ht," for macOS ARM64"),Ht.forEach(t),Gt.forEach(t),Xa=d(Nt),ae=l(Nt,"SMALL",{class:!0});var Jt=s(ae);Za=n(Jt,"(~"),el=n(Jt,Zl),tl=n(Jt,"MB zip)"),Jt.forEach(t),Nt.forEach(t),hs.forEach(t),Ie.forEach(t),ps.forEach(t),wt.forEach(t),bt.forEach(t),it=d(r),A=l(r,"P",{class:!0});var Wt=s(A);al=n(Wt,`See the
    `),le=l(Wt,"A",{href:!0,target:!0,rel:!0});var ms=s(le);ll=n(ms,"GitHub Releases page"),ms.forEach(t),sl=n(Wt,`
    for other platforms and more details.`),Wt.forEach(t),nt=d(r),ct=l(r,"HR",{}),dt=d(r),se=l(r,"P",{});var Yt=s(se);rl=n(Yt,`Once you've extracted the archive, you could start the application by running
    `),He=l(Yt,"CODE",{});var _s=s(He);Je=l(_s,"STRONG",{});var bs=s(Je);ol=n(bs,"./pocketbase serve"),bs.forEach(t),_s.forEach(t),il=n(Yt," in the extracted directory."),Yt.forEach(t),ft=d(r),fe=l(r,"P",{});var Ul=s(fe);We=l(Ul,"STRONG",{});var Es=s(We);nl=n(Es,"And that's it!"),Es.forEach(t),cl=n(Ul," A web server will be started with the following routes:"),Ul.forEach(t),pt=d(r),pe=l(r,"DIV",{class:!0});var ws=s(pe);we=l(ws,"DIV",{class:!0});var xs=s(we);I=l(xs,"UL",{});var De=s(I);D=l(De,"LI",{class:!0});var tt=s(D);ue=l(tt,"A",{href:!0,target:!0});var ks=s(ue);Ye=l(ks,"CODE",{});var gs=s(Ye);dl=n(gs,"http://127.0.0.1:8090"),gs.forEach(t),ks.forEach(t),fl=n(tt,`
                - if `),$e=l(tt,"CODE",{});var ys=s($e);pl=n(ys,"pb_public"),ys.forEach(t),ul=n(tt,` directory exists, serves the static content from it (html, css, images,
                etc.)`),tt.forEach(t),vl=d(De),ve=l(De,"LI",{class:!0});var ql=s(ve);he=l(ql,"A",{href:!0,target:!0});var As=s(he);Qe=l(As,"CODE",{});var Is=s(Qe);hl=n(Is,"http://127.0.0.1:8090/_/"),Is.forEach(t),As.forEach(t),ml=n(ql,`
                - Admin dashboard UI`),ql.forEach(t),_l=d(De),xe=l(De,"LI",{});var Nl=s(xe);me=l(Nl,"A",{href:!0,target:!0});var Ds=s(me);Fe=l(Ds,"CODE",{});var Ls=s(Fe);bl=n(Ls,"http://127.0.0.1:8090/api/"),Ls.forEach(t),Ds.forEach(t),El=n(Nl,`
                - REST API`),Nl.forEach(t),De.forEach(t),xs.forEach(t),ws.forEach(t),ut=d(r),ke=l(r,"P",{});var Ps=s(ke);wl=n(Ps,`The first time, when you access the Admin dashboard UI, it will prompt you to create your first admin
    account (email and pass).`),Ps.forEach(t),vt=d(r),ge=l(r,"P",{});var Ss=s(ge);xl=n(Ss,`The prebuilt PocketBase executable will automatically create and manage 2 new directories alongside the
    executable:`),Ss.forEach(t),ht=d(r),re=l(r,"UL",{});var $t=s(re);oe=l($t,"LI",{});var at=s(oe);je=l(at,"CODE",{});var Ms=s(je);kl=n(Ms,"pb_data"),Ms.forEach(t),gl=n(at,` - stores your application data, uploaded files, etc. (usually should be added in
        `),Ke=l(at,"CODE",{});var Bs=s(Ke);yl=n(Bs,".gitignore"),Bs.forEach(t),Al=n(at,")."),at.forEach(t),Il=d($t),L=l($t,"LI",{});var Le=s(L);Xe=l(Le,"CODE",{});var Rs=s(Xe);Dl=n(Rs,"pb_migrations"),Rs.forEach(t),Ll=n(Le,` - contains JS migration files with your collection changes (can be safely
        committed in your repository).
        `),Pl=l(Le,"BR",{}),Sl=d(Le),ie=l(Le,"DIV",{class:!0});var Qt=s(ie);Ml=n(Qt,`You can even write custom migration scripts. For more info check the
            `),ye=l(Qt,"A",{href:!0});var Os=s(ye);Bl=n(Os,"JS migrations docs"),Os.forEach(t),Rl=n(Qt,"."),Qt.forEach(t),Le.forEach(t),$t.forEach(t),mt=d(r),P=l(r,"P",{});var lt=s(P);Ol=n(lt,`You could find all available commands and their options by running
    `),Ze=l(lt,"CODE",{});var Ts=s(Ze);Tl=n(Ts,"./pocketbase --help"),Ts.forEach(t),zl=n(lt,` or
    `),et=l(lt,"CODE",{});var zs=s(et);Vl=n(zs,"./pocketbase [command] --help"),zs.forEach(t),lt.forEach(t),this.h()},h(){o(B,"class","ri-alert-line"),o(M,"class","icon"),o(O,"href","https://github.com/pocketbase/pocketbase/blob/master/CHANGELOG.md"),o(O,"target","_blank"),o(O,"rel","noopener noreferrer"),o(de,"class","content"),o(u,"class","alert alert-danger m-b-sm"),o(w,"type","button"),o(w,"class","tab-item svelte-q6wypr"),ne(w,"active",S[0]==_e),o(x,"type","button"),o(x,"class","tab-item svelte-q6wypr"),ne(x,"active",S[0]==Pe),o(T,"class","tabs-header left"),o(Be,"class","ri-qq-fill"),o(U,"class","txt"),o(v,"href","https://github.com/pocketbase/pocketbase/releases/download/v0.22.27/pocketbase_0.22.27_linux_amd64.zip"),o(v,"class","inline-flex flex-gap-5 txt-bold"),o(v,"target","_blank"),o(v,"rel","noreferrer noopener"),o(q,"class","txt-hint"),o(C,"class","inline-flex flex-gap-5"),o(Oe,"class","ri-windows-fill"),o(G,"class","txt"),o(h,"href","https://github.com/pocketbase/pocketbase/releases/download/v0.22.27/pocketbase_0.22.27_windows_amd64.zip"),o(h,"class","inline-flex flex-gap-5 txt-bold"),o(h,"target","_blank"),o(h,"rel","noreferrer noopener"),o(H,"class","txt-hint"),o(N,"class","inline-flex flex-gap-5"),o(ze,"class","ri-apple-fill"),o(W,"class","txt"),o(m,"href","https://github.com/pocketbase/pocketbase/releases/download/v0.22.27/pocketbase_0.22.27_darwin_amd64.zip"),o(m,"class","inline-flex flex-gap-5 txt-bold"),o(m,"target","_blank"),o(m,"rel","noreferrer noopener"),o(Y,"class","txt-hint"),o(J,"class","inline-flex flex-gap-5"),o(V,"class","tab-item svelte-q6wypr"),ne(V,"active",S[0]==_e),o(Ce,"class","ri-qq-fill"),o(F,"class","txt"),o(_,"href","https://github.com/pocketbase/pocketbase/releases/download/v0.22.27/pocketbase_0.22.27_linux_arm64.zip"),o(_,"class","inline-flex flex-gap-5 txt-bold"),o(_,"target","_blank"),o(_,"rel","noreferrer noopener"),o(j,"class","txt-hint"),o(Q,"class","inline-flex flex-gap-5"),o(qe,"class","ri-windows-fill"),o(X,"class","txt"),o(b,"href","https://github.com/pocketbase/pocketbase/releases/download/v0.22.27/pocketbase_0.22.27_windows_arm64.zip"),o(b,"class","inline-flex flex-gap-5 txt-bold"),o(b,"target","_blank"),o(b,"rel","noreferrer noopener"),o(Z,"class","txt-hint"),o(K,"class","inline-flex flex-gap-5"),o(Ge,"class","ri-apple-fill"),o(te,"class","txt"),o(E,"href","https://github.com/pocketbase/pocketbase/releases/download/v0.22.27/pocketbase_0.22.27_darwin_arm64.zip"),o(E,"class","inline-flex flex-gap-5 txt-bold"),o(E,"target","_blank"),o(E,"rel","noreferrer noopener"),o(ae,"class","txt-hint"),o(ee,"class","inline-flex flex-gap-5"),o($,"class","tab-item svelte-q6wypr"),ne($,"active",S[0]==Pe),o(z,"class","tabs-content"),o(k,"class","tabs compact tabs-architecture m-b-sm svelte-q6wypr"),o(le,"href","https://github.com/pocketbase/pocketbase/releases"),o(le,"target","_blank"),o(le,"rel","noreferrer noopener"),o(A,"class","txt-sm txt-hint"),o(ue,"href","http://127.0.0.1:8090"),o(ue,"target","_blank"),o(D,"class","m-b-5"),o(he,"href","http://127.0.0.1:8090/_/"),o(he,"target","_blank"),o(ve,"class","m-b-5"),o(me,"href","http://127.0.0.1:8090/api/"),o(me,"target","_blank"),o(we,"class","content"),o(pe,"class","alert m-t-10 m-b-xs"),o(ye,"href","/docs/js-migrations"),o(ie,"class","txt-hint m-b-xs")},m(r,f){p(r,u,f),e(u,M),e(M,B),e(u,ce),e(u,de),e(de,R),e(R,Se),e(R,O),e(O,Ft),e(R,jt),p(r,st,f),p(r,be,f),e(be,Kt),p(r,rt,f),p(r,Ee,f),e(Ee,Xt),p(r,ot,f),p(r,k,f),e(k,T),e(T,w),e(w,Zt),e(T,ea),e(T,x),e(x,ta),e(k,aa),e(k,z),e(z,V),e(V,g),e(g,Me),e(Me,C),e(C,v),e(v,Be),e(v,la),e(v,U),e(U,sa),e(U,ra),e(U,oa),e(C,ia),e(C,q),e(q,na),e(q,ca),e(q,da),e(g,fa),e(g,Re),e(Re,N),e(N,h),e(h,Oe),e(h,pa),e(h,G),e(G,ua),e(G,va),e(G,ha),e(N,ma),e(N,H),e(H,_a),e(H,ba),e(H,Ea),e(g,wa),e(g,Te),e(Te,J),e(J,m),e(m,ze),e(m,xa),e(m,W),e(W,ka),e(W,ga),e(W,ya),e(J,Aa),e(J,Y),e(Y,Ia),e(Y,Da),e(Y,La),e(z,Pa),e(z,$),e($,y),e(y,Ve),e(Ve,Q),e(Q,_),e(_,Ce),e(_,Sa),e(_,F),e(F,Ma),e(F,Ba),e(F,Ra),e(Q,Oa),e(Q,j),e(j,Ta),e(j,za),e(j,Va),e(y,Ca),e(y,Ue),e(Ue,K),e(K,b),e(b,qe),e(b,Ua),e(b,X),e(X,qa),e(X,Na),e(X,Ga),e(K,Ha),e(K,Z),e(Z,Ja),e(Z,Wa),e(Z,Ya),e(y,$a),e(y,Ne),e(Ne,ee),e(ee,E),e(E,Ge),e(E,Qa),e(E,te),e(te,Fa),e(te,ja),e(te,Ka),e(ee,Xa),e(ee,ae),e(ae,Za),e(ae,el),e(ae,tl),p(r,it,f),p(r,A,f),e(A,al),e(A,le),e(le,ll),e(A,sl),p(r,nt,f),p(r,ct,f),p(r,dt,f),p(r,se,f),e(se,rl),e(se,He),e(He,Je),e(Je,ol),e(se,il),p(r,ft,f),p(r,fe,f),e(fe,We),e(We,nl),e(fe,cl),p(r,pt,f),p(r,pe,f),e(pe,we),e(we,I),e(I,D),e(D,ue),e(ue,Ye),e(Ye,dl),e(D,fl),e(D,$e),e($e,pl),e(D,ul),e(I,vl),e(I,ve),e(ve,he),e(he,Qe),e(Qe,hl),e(ve,ml),e(I,_l),e(I,xe),e(xe,me),e(me,Fe),e(Fe,bl),e(xe,El),p(r,ut,f),p(r,ke,f),e(ke,wl),p(r,vt,f),p(r,ge,f),e(ge,xl),p(r,ht,f),p(r,re,f),e(re,oe),e(oe,je),e(je,kl),e(oe,gl),e(oe,Ke),e(Ke,yl),e(oe,Al),e(re,Il),e(re,L),e(L,Xe),e(Xe,Dl),e(L,Ll),e(L,Pl),e(L,Sl),e(L,ie),e(ie,Ml),e(ie,ye),e(ye,Bl),e(ie,Rl),p(r,mt,f),p(r,P,f),e(P,Ol),e(P,Ze),e(Ze,Tl),e(P,zl),e(P,et),e(et,Vl),Cl||(es=[Vs(w,"click",Cs(S[2])),Vs(x,"click",Cs(S[3]))],Cl=!0)},p(r,[f]){f&1&&ne(w,"active",r[0]==_e),f&1&&ne(x,"active",r[0]==Pe),f&1&&ne(V,"active",r[0]==_e),f&1&&ne($,"active",r[0]==Pe)},i:Us,o:Us,d(r){r&&t(u),r&&t(st),r&&t(be),r&&t(rt),r&&t(Ee),r&&t(ot),r&&t(k),r&&t(it),r&&t(A),r&&t(nt),r&&t(ct),r&&t(dt),r&&t(se),r&&t(ft),r&&t(fe),r&&t(pt),r&&t(pe),r&&t(ut),r&&t(ke),r&&t(vt),r&&t(ge),r&&t(ht),r&&t(re),r&&t(mt),r&&t(P),Cl=!1,Js(es)}}}const _e="amd",Pe="arm";function qs(){return typeof window<"u"&&window.UA_ARCHITECTURE&&window.UA_ARCHITECTURE==="arm"?Pe:_e}function Ys(S,u,M){let B=qs();function ce(Se){M(0,B=Se||qs())}return[B,ce,()=>ce(_e),()=>ce(Pe)]}class Qs extends Ns{constructor(u){super(),Gs(this,u,Ys,Ws,Hs,{})}}export{Qs as component};