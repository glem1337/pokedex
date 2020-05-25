(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{114:function(e,t,a){e.exports=a(166)},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=a(181),i=a(184),s=a(185),u=a(203),m=a(186),p=a(170),d=a(36),E=a.n(d),g=a(99),f=a.n(g),k=a(179),h=Object(k.a)({loader:{width:"100%",position:"absolute",top:"0",left:"0"},poison:{backgroundColor:"#b97fc9",color:"white"},grass:{backgroundColor:"#9bcc50",color:"white"},fire:{backgroundColor:"#fd7d24",color:"white"},flying:{backgroundColor:"#3dc7ef",color:"white"},water:{backgroundColor:"#4592c4",color:"white"},bug:{backgroundColor:"#729f3f",color:"white"},normal:{backgroundColor:"#a4acaf",color:"white"},electric:{backgroundColor:"#eed535",color:"white"},ground:{backgroundColor:"#ab9842",color:"white"},fairy:{backgroundColor:"#fdb9e9",color:"white"},fighting:{backgroundColor:"#d56723",color:"white"},psychic:{backgroundColor:"#f366b9",color:"white"},rock:{backgroundColor:"#a38c21",color:"white"},steel:{backgroundColor:"#9eb7b8",color:"white"},ice:{backgroundColor:"#51c4e7",color:"white"},dragon:{backgroundColor:"#f16e57",color:"white"},dark:{backgroundColor:"#707070",color:"white"},ghost:{backgroundColor:"#7b62a3",color:"white"}}),b=a(28),v=function(e){return e.pokeList&&e.pokeList.pokemons},y=function(e){return e.pokeList&&e.pokeList.loading},w=function(e){return e.pokeList&&e.pokeList.error},O=function(e){return e.pokeList&&e.pokeList.nextUrl},x=function(e){return e.pokeDetail&&e.pokeDetail.pokemon},L=function(e){return e.pokeDetail&&e.pokeDetail.loading},j=function(e){return e.pokeDetail&&e.pokeDetail.error},C=function(){var e=h(),t=Object(b.c)((function(e){return{listLoading:y(e),detailLoading:L(e)}})),a=t.listLoading,n=t.detailLoading;return r.a.createElement(l.a,{position:"sticky"},(a||n)&&r.a.createElement(f.a,{className:e.loader,color:"secondary"}),r.a.createElement(i.a,{maxWidth:"lg"},r.a.createElement(s.a,{disableGutters:!0},r.a.createElement(u.a,{display:"flex",flexGrow:"1",alignItems:"center"},r.a.createElement(u.a,{mr:2},r.a.createElement(m.a,{href:"/pokedex/"},r.a.createElement("img",{width:"48",height:"48",src:E.a,alt:"Pokedex"}))),r.a.createElement(p.a,{variant:"h6"},"Pokedex")))))},P=a(192),_=a(198),S=a(201),T=a(106),I=a(187),U=a(188),D=a(189),A=a(190),N=a(191),K=a(202),R=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},B=function(e){var t=e.pokemon,a=e.fetchPokemon;h();return r.a.createElement(S.a,{in:!0},r.a.createElement(I.a,{className:"poke-card"},r.a.createElement(U.a,{onClick:function(){a(t.name)}},r.a.createElement(D.a,{component:"img",alt:t.name,height:"96",image:t.sprites.front_default,title:t.name,onError:function(e){e.target.src=E.a}}),r.a.createElement(A.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h6",component:"h2"},R(t.name)))),r.a.createElement(N.a,null,t.types.map((function(e){return r.a.createElement(K.a,{key:"item-type-".concat(e.type.name),className:e.type.name,label:R(e.type.name)})})))))},F=function(e){var t=e.pokemons,a=Object(T.a)(e,["pokemons"]);return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(P.a,{key:"poke-card-".concat(e.name),item:!0,xs:4},r.a.createElement(B,Object.assign({},a,{pokemon:e})))})))},W=a(193),M=a(108),X=a(194),Q=a(195),G=a(196),J=a(197),z=function(e){var t=e.rows;return r.a.createElement(W.a,{component:M.a},r.a.createElement(X.a,{"aria-label":"simple table"},r.a.createElement(Q.a,null,t.map((function(e){return r.a.createElement(G.a,{key:e.name},r.a.createElement(J.a,{component:"th",scope:"row"},R(e.name)),r.a.createElement(J.a,{align:"right"},e.value))})))))};function V(e,t){return{name:e,value:t}}var $=function(e){var t=e.pokemon,a=""+t.id,n="000".substring(0,"000".length-a.length)+a,o=Object.values(t.stats),c=h(),l=o.map((function(e){return V(e.stat.name,e.base_stat)}));return l.push(V("Weight",t.weight)),l.push(V("Total moves",t.moves.length)),r.a.createElement(I.a,null,r.a.createElement(D.a,{component:"img",alt:t.name,height:"96",image:t.sprites.front_default,title:t.name,onError:function(e){e.target.src=E.a}}),r.a.createElement(A.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h4",component:"h2"},R(t.name)," #",n),r.a.createElement(z,{rows:l})),r.a.createElement(N.a,null,t.types.map((function(e){return r.a.createElement(K.a,{key:"item-type-".concat(e.type.name),className:c[e.type.name],label:R(e.type.name)})}))))},q=a(18),H=a.n(q),Y=a(27),Z=a(62),ee=a(100).create({baseURL:"https://pokeapi.co/api/v2/"}),te=function e(){Object(Z.a)(this,e)};te.getPokemonsList=function(){var e=Object(Y.a)(H.a.mark((function e(t,a){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("pokemon/?offset=".concat(t,"&limit=").concat(a));case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n.data);case 6:e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.error("PokeAPI.getPokemonsList() error: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),te.getPokemonByName=function(){var e=Object(Y.a)(H.a.mark((function e(t){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("pokemon/".concat(t,"/"));case 3:if(200!==(a=e.sent).status){e.next=6;break}return e.abrupt("return",a.data);case 6:e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.error("PokeAPI.getPokemonByName() error: ",e.t0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();var ae="POKE_LIST/REQUEST",ne="POKE_LIST/SUCCESS",re="POKE_LIST/FAILURE";function oe(e){return{type:ne,payload:e}}var ce=a(104);function le(e){return{type:"POKE_DETAIL/SUCCESS",payload:e}}var ie=a(200),se=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return{pokemons:v(e),nextUrl:O(e),listLoading:y(e),listError:w(e),pokemon:x(e),detailError:j(e)}})),a=t.pokemons,o=t.nextUrl,c=t.listLoading,l=t.listError,s=t.pokemon,m=t.detailError,p=function(){var t,n;e((t=a.length,n=12,function(){var e=Object(Y.a)(H.a.mark((function e(a){var r,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:ae}),e.prev=1,e.next=4,te.getPokemonsList(t,n);case 4:if(!((r=e.sent).results.length>0)){e.next=11;break}return e.next=8,Promise.all(r.results.map((function(e){return te.getPokemonByName(e.name)})));case 8:o=e.sent,a({type:"POKE_LIST/SET_NEXT_URL",payload:r.next}),a(oe(o));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("Error: ",e.t0),a((c=e.t0.message,{type:re,payload:c}));case 17:case"end":return e.stop()}var c}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()))};return Object(n.useEffect)((function(){p()}),[]),r.a.createElement(u.a,{mt:5},r.a.createElement(i.a,{maxWidth:"lg"},r.a.createElement(P.a,{container:!0,spacing:4},r.a.createElement(P.a,{item:!0,container:!0,xs:7,spacing:3},a&&r.a.createElement(F,{pokemons:a,fetchPokemon:function(t){e(function(e){return function(){var t=Object(Y.a)(H.a.mark((function t(a){var n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"POKE_DETAIL/REQUEST"}),t.prev=1,t.next=4,te.getPokemonByName(e);case 4:(n=t.sent)&&a(le(n)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Error: ",t.t0),a({type:"POKE_DETAIL/FAILURE",payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}),l&&r.a.createElement(P.a,{item:!0,xs:12},r.a.createElement(ie.a,{severity:"error"},l)),o&&r.a.createElement(P.a,{item:!0,xs:12},r.a.createElement(u.a,{mt:5,display:"flex",justifyContent:"center"},r.a.createElement(_.a,{variant:"contained",color:"secondary",size:"large",onClick:p,disabled:c},"Load More")))),r.a.createElement(P.a,{item:!0,xs:4},r.a.createElement(ce.a,{offsetTop:100,offsetBottom:20},s&&r.a.createElement(S.a,{in:!0},r.a.createElement(u.a,{mb:2,minWidth:.75},r.a.createElement($,{pokemon:s}))),m&&r.a.createElement(ie.a,{severity:"error"},m))))))},ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(30),pe=a(102),de=a(71),Ee=a(13),ge={pokemons:[],loading:!1,error:null,nextUrl:null},fe={pokemon:null,loading:!1,error:null},ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,he=Object(me.c)({pokeList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case ae:return Object(Ee.a)(Object(Ee.a)({},e),{},{error:null,loading:!0});case ne:return Object(Ee.a)(Object(Ee.a)({},e),{},{pokemons:[].concat(Object(de.a)(e.pokemons),Object(de.a)(n)),error:null,loading:!1});case re:return Object(Ee.a)(Object(Ee.a)({},e),{},{error:n,loading:!1});case"POKE_LIST/SET_NEXT_URL":return Object(Ee.a)(Object(Ee.a)({},e),{},{nextUrl:n});default:return e}},pokeDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"POKE_DETAIL/REQUEST":return Object(Ee.a)(Object(Ee.a)({},e),{},{pokemon:null,error:null,loading:!0});case"POKE_DETAIL/SUCCESS":return Object(Ee.a)(Object(Ee.a)({},e),{},{pokemon:n,error:null,loading:!1});case"POKE_DETAIL/FAILURE":return Object(Ee.a)(Object(Ee.a)({},e),{},{error:n,loading:!1});default:return e}}}),be=Object(me.a)(pe.a),ve=Object(me.e)(he,ke(be)),ye=a(199),we=a(183),Oe=a(103),xe=Object(Oe.a)({overrides:{MuiCardMedia:{img:{objectFit:"contain",padding:"8px"}}}});a(165);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,{store:ve},r.a.createElement(ye.a,null),r.a.createElement(we.a,{theme:xe},r.a.createElement(ue,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a.p+"static/media/logo.3726ed66.svg"}},[[114,1,2]]]);
//# sourceMappingURL=main.90f90c51.chunk.js.map