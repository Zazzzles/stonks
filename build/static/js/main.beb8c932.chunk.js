(this["webpackJsonpstonks-dev"]=this["webpackJsonpstonks-dev"]||[]).push([[0],{10:function(e,a,t){e.exports={Container:"topbar_Container__32Y-A",TextContainer:"topbar_TextContainer__3P8bB",Value:"topbar_Value__2mlcN",Label:"topbar_Label__CqKpe"}},11:function(e,a,t){e.exports={Container:"purchase-history_Container__3Nd72",PlaceholderContainer:"purchase-history_PlaceholderContainer__2pdm3",Topbar:"purchase-history_Topbar__3Xara",PurchaseItemsWrapper:"purchase-history_PurchaseItemsWrapper__1aC6I",PurchaseItem:"purchase-history_PurchaseItem__3Psic",ProfitLoss:"purchase-history_ProfitLoss__sxRUR",Negative:"purchase-history_Negative__I7pND"}},14:function(e,a,t){e.exports={Container:"current-price_Container__uCQmW",LabelContainer:"current-price_LabelContainer___Lvhc",Label:"current-price_Label__3X6cH",Value:"current-price_Value__22qfX",GrowIcon:"current-price_GrowIcon__2sKPz"}},15:function(e,a,t){e.exports={Container:"amount-slider_Container__2ao5e",Slider:"amount-slider_Slider__3jzRY",Track:"amount-slider_Track__3UiPU",Thumb:"amount-slider_Thumb__2Llv5",Amount:"amount-slider_Amount__3kOEN"}},19:function(e,a,t){e.exports={Container:"src_Container__1DKWR",ContentWrapper:"src_ContentWrapper__4O1y3",TableTrayContainer:"src_TableTrayContainer__20GhI",ButtonContainer:"src_ButtonContainer__1PpgA"}},27:function(e,a,t){e.exports={Container:"button_Container__1aevy",Primary:"button_Primary__Eh_Op",Secondary:"button_Secondary__1NyMu"}},28:function(e,a,t){e.exports={Container:"flavor-text_Container__2xxDh",Text:"flavor-text_Text__sn6cF",Animating:"flavor-text_Animating__lu4jh"}},3:function(e,a,t){e.exports={Container:"open-position_Container__2O1bh",PanelTopbar:"open-position_PanelTopbar__sYe2Y",PanelContent:"open-position_PanelContent__2eows",PanelTitle:"open-position_PanelTitle__M4Krg",MetricContainer:"open-position_MetricContainer__3eStq",MetricValue:"open-position_MetricValue__30hUK",MetricTitle:"open-position_MetricTitle__1r63_",Bad:"open-position_Bad__2LqxJ",Good:"open-position_Good__19i-h"}},47:function(e,a,t){e.exports={Container:"linechart_Container__33qYS"}},48:function(e,a,t){e.exports={Container:"panel_Container__3or4Y"}},5:function(e,a,t){e.exports={Container:"new-position_Container__3EiGO",ContentWrapper:"new-position_ContentWrapper__129l_",AmountContainer:"new-position_AmountContainer__1fvKI",DetailsContainer:"new-position_DetailsContainer__7W-Rj",Valset:"new-position_Valset__15Spf",Label:"new-position_Label__2KpZb",CostValue:"new-position_CostValue__3JKOz",Value:"new-position_Value__2gnKC",AmountTitle:"new-position_AmountTitle__1vCHl",PanelTopbar:"new-position_PanelTopbar__1Alwb",PanelTitle:"new-position_PanelTitle__2DxEd"}},50:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAcklEQVRIDWNgGAWjITC8QqDod345CJPiKyZiFRf9LmhgYGDoAGEoG8gkjBgJK2FggBj4vx5VLWNjH+uEBgYCgKAF2A2HmUrYErwW4DecOEtwWkCc4YQtwWoBaYbjtwTDAvIMx28JTHaUHg2B0RCgUQgAAHQcLnm4BMasAAAAAElFTkSuQmCC"},51:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAj0lEQVRIDe1SSQ6AIAyk/ge+pzfxpt+DB1WGAyEEWYzeSmjSklnIgFKyJAFJ4PcEqHRgrc9wtoZ6sy/yfsuJSz6gjwCiA/1UBU7kFiQq5jSyMVYx7+mg1UDcOasq69EA2CGThjg0mgYANE064uB3DQCqmgyIgztcMAk/jGPhfYaZE8Bo8pf4xD0EKgl8nMAN8ckyaDnNYmUAAAAASUVORK5CYII="},56:function(e,a,t){e.exports=t(84)},61:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(46),o=t.n(c),s=(t(61),t(2)),i=t(19),l=t(4),u=t(6),m=t.n(u),p=t(27),_=function(e){var a,t=e.label,n=e.onClick,c=e.primary,o=e.secondary;return r.a.createElement("button",{onClick:n,className:m()(p.Container,(a={},Object(l.a)(a,p.Primary,c),Object(l.a)(a,p.Secondary,o),a))},t)},d=t(47),h=t(48),b=Object(n.forwardRef)((function(e,a){var t=e.className,n=e.children;return r.a.createElement("div",{ref:a,className:m()(h.Container,t)},n)})),f=t(21),E=function(e){var a=e.data,t=e.staticLines,c=void 0===t?[]:t,o=Object(n.useRef)(),s=function(e){return a.map((function(a,t){return{x:t,y:e}}))};return r.a.createElement(b,{className:d.Container,ref:o},o.current&&r.a.createElement(f.b,{width:o.current.getBoundingClientRect().width,height:o.current.getBoundingClientRect().height+25},r.a.createElement(f.c,{hideLine:!0,tickSize:4,left:15}),r.a.createElement(f.a,{className:"first-series",strokeWidth:4,color:"#46a6f8",curve:"curveMonotoneX",data:a.map((function(e,a){return{x:a,y:e}}))}),c.map(s).map((function(e,a){return r.a.createElement(f.a,{key:a,className:"first-series",strokeWidth:2,color:"#24fbff",curve:"curveMonotoneX",data:e})}))))},C=t(14),A=t(50),g=t.n(A),v=t(51),N=t.n(v),O=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},j=function(e){var a=e.rising;return r.a.createElement("img",{className:C.GrowIcon,src:a?g.a:N.a,alt:a?"rising":"falling"})},T=function(e){var a=e.price,t=void 0===a?0:a,n=e.rising,c=void 0!==n&&n;return r.a.createElement("div",{className:C.Container},r.a.createElement("div",{className:C.LabelContainer},r.a.createElement("span",{className:C.Label},"Current price"),r.a.createElement(j,{rising:c})),r.a.createElement("span",{className:C.Value},"$",O(t)))},P=t(3),V=function(e){return parseInt(e.toFixed(0))},y=function(e){var a,t,n,c,o=e.purchase,s=e.currentValue,i=o.purchaseValue<s;return r.a.createElement(b,{className:P.Container},r.a.createElement("div",{className:P.PanelTopbar},r.a.createElement("span",{className:P.PanelTitle},"Current position")),r.a.createElement("div",{className:P.PanelContent},r.a.createElement("div",{className:P.MetricContainer},r.a.createElement("span",{className:P.MetricValue},"$",O(o.purchaseValue)),r.a.createElement("span",{className:P.MetricTitle},"Opening value")),r.a.createElement("div",{className:P.MetricContainer},r.a.createElement("span",{className:m()(P.MetricValue,(a={},Object(l.a)(a,P.Bad,!i),Object(l.a)(a,P.Good,i),a))},"$",O(V(o.amount*s)-o.purchaseValue)),r.a.createElement("span",{className:P.MetricTitle},"Profit/loss")),r.a.createElement("div",{className:P.MetricContainer},r.a.createElement("span",{className:m()(P.MetricValue,(t={},Object(l.a)(t,P.Bad,!i),Object(l.a)(t,P.Good,i),t))},!i&&"-"," %",(n=o.purchaseValue,c=s*o.amount,console.log(n,c),Math.abs((n-c)/c*100)).toFixed(0)),r.a.createElement("span",{className:P.MetricTitle},"% change"))))},S=t(5),x=t(53),w=t(52),L=t(15),I=function(e){var a=e.amount,t=Object(x.a)(e,["amount"]);return r.a.createElement("div",{className:L.Container},r.a.createElement("span",{className:L.Amount},a),r.a.createElement(w.a,Object.assign({max:10,min:1,value:a,step:.1},t,{className:L.Slider,thumbClassName:L.Thumb,trackClassName:L.Track,renderThumb:function(e,a){return r.a.createElement("div",e)}})))},M=function(e){var a=e.currentValue,t=e.setPurchase,c=e.balance,o=Object(n.useState)(1),i=Object(s.a)(o,2),l=i[0],u=i[1];return Object(n.useEffect)((function(){t({amount:l,purchaseValue:V(a*l),openedAt:a})}),[l,a,t]),r.a.createElement(b,{className:S.Container},r.a.createElement("div",{className:S.PanelTopbar},r.a.createElement("span",{className:S.PanelTitle},"New trade")),r.a.createElement("div",{className:S.ContentWrapper},r.a.createElement("div",{className:S.AmountContainer},r.a.createElement("span",{className:S.AmountTitle},"Amount of shares"),r.a.createElement(I,{amount:l,onChange:u})),r.a.createElement("div",{className:S.DetailsContainer},r.a.createElement("div",{className:S.Valset},r.a.createElement("span",{className:S.Label},"Cost"),r.a.createElement("span",{className:S.CostValue},"$",O((l*a).toFixed(0)))),r.a.createElement("div",{className:S.Valset},r.a.createElement("span",{className:S.Label},"Remaining balance"),r.a.createElement("span",{className:S.Value},"$",O(c-(l*a).toFixed(0)))))))},B=t(10),k=function(e){var a=e.balance,t=e.equity;return r.a.createElement("div",{className:B.Container},r.a.createElement("div",{className:B.TextContainer},r.a.createElement("span",{className:B.Label},"Available balance"),r.a.createElement("span",{className:B.Value},"$",O(a))),r.a.createElement("div",{className:B.TextContainer},r.a.createElement("span",{className:B.Label},"Equity"),r.a.createElement("span",{className:B.Value},"$",O(t))))},W=t(28),Y={varianceCap:300,refreshInterval:100,changeIntervalCap:10,rollingWindowSize:200,startingValue:55600,comments:{good:["Nice!","Hell yeah!","Good trade!","Good!","Legit!","Super!","Yeah!","Legend!","Boss!","Champion!"],bad:["Oof!","Ouch!","Yikes!","Oh no!","Damn!","Ugh!","Awww!"]}},D=function(e){var a=e.positionOpen,t=e.lastPurchase,c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],u=o[1],p=Object(n.useState)(!1),_=Object(s.a)(p,2),d=_[0],h=_[1],b=Object(n.useState)(""),f=Object(s.a)(b,2),E=f[0],C=f[1];Object(n.useEffect)((function(){a||(A(),u(!0),setTimeout((function(){u(!1)}),300))}),[a]),Object(n.useEffect)((function(){a||(h(!0),setTimeout((function(){h(!1)}),600))}),[a]);var A=function(){var e=t.purchaseValue<t.closedAt,a=e?Y.comments.good.length:Y.comments.bad.length,n=Math.floor(Math.random()*a),r=e?Y.comments.good:Y.comments.bad;C(r[n])};return r.a.createElement("div",{className:m()(W.Container)},d&&r.a.createElement("span",{className:m()(W.Text,Object(l.a)({},W.Animating,i))},E))},G=t(11),R=function(e){var a=e.purchaseItems;return 0===a.length?r.a.createElement("div",{className:G.PlaceholderContainer},"Trade history empty"):r.a.createElement("div",{className:G.Container},r.a.createElement("div",{className:G.Topbar},r.a.createElement("span",null,"Shares"),r.a.createElement("span",null,"Opening value"),r.a.createElement("span",null,"closing value"),r.a.createElement("span",null,"Profit/loss")),r.a.createElement("div",{className:G.PurchaseItemsWrapper},a.map((function(e){var a=e.amount,t=e.openedAt,n=e.closedAt,c=e.purchaseValue,o=e.positive;return r.a.createElement(b,{className:G.PurchaseItem,key:t},r.a.createElement("span",null,a),r.a.createElement("span",null,"$",O(V(c))),r.a.createElement("span",null,"$",O(V(n))),r.a.createElement("span",{className:m()(G.ProfitLoss,Object(l.a)({},G.Negative,!o))},"$",O(V(n-c))))}))))},U=t(18),K=t(20);var q=function(){var e=Object(n.useState)(3e5),a=Object(s.a)(e,2),t=a[0],c=a[1],o=function(){var e=Object(n.useState)({amount:0,purchaseValue:0,openedAt:0,closedAt:0}),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({amount:0,purchaseValue:0,openedAt:0}),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)([]),m=Object(s.a)(u,2),p=m[0],_=m[1];return{doSell:function(e){r(Object(K.a)(Object(K.a)({},i),{},{closedAt:e*i.amount})),_([Object(K.a)(Object(K.a)({},i),{},{closedAt:e*i.amount,positive:i.purchaseValue<e*i.amount})].concat(Object(U.a)(p))),l({amount:0,purchaseValue:0,openedAt:0})},setPurchase:l,purchase:i,lastPurchase:t,purchaseHistory:p}}(),l=o.doSell,u=o.setPurchase,m=o.lastPurchase,p=o.purchase,d=o.purchaseHistory,h=function(){var e=Object(n.useState)([Y.startingValue]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(Y.startingValue),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),p=m[0],_=m[1],d=Object(n.useState)(null),h=Object(s.a)(d,2),b=h[0],f=h[1],E=Object(n.useState)(!1),C=Object(s.a)(E,2),A=C[0],g=C[1],v=Object(n.useState)(!1),N=Object(s.a)(v,2),O=N[0],j=N[1];Object(n.useEffect)((function(){return function(){return clearInterval(b)}}),[b]),Object(n.useEffect)((function(){l(t[t.length-1]),j(t[t.length-1]>t[t.length-2])}),[t]);return{startLoop:function(){var e=0,a=Y.changeIntervalCap,t=!1;_(!0),f(setInterval((function(){r((function(n){var r,c=n[n.length-1],o=Math.floor(Math.random()*Y.varianceCap+1);return e>=a?(e=0,a=Math.floor(Math.random()*Y.changeIntervalCap+1),t=0===Math.floor(2*Math.random())):e+=1,(r=[].concat(Object(U.a)(n),t?[c+o]:[c-o])).length>Y.rollingWindowSize+1&&r.shift(1),r}))}),Y.refreshInterval))},stopLoop:function(){_(!1),clearInterval(b)},setPositionOpen:g,positionOpen:A,rising:O,started:p,currentValue:i,data:t}}(),b=h.startLoop,f=h.setPositionOpen,C=h.positionOpen,A=h.rising,g=h.currentValue,v=h.data;Object(n.useEffect)((function(){b()}),[]);var N=function(){if(C){var e=v[v.length-1],a=p.amount;return V(a*e)}return 0};return r.a.createElement("div",{className:i.Container},r.a.createElement("div",{className:i.ContentWrapper},r.a.createElement(k,{balance:t,equity:N()}),r.a.createElement(E,{data:v,staticLines:function(){var e=[];return C&&e.push(p.openedAt),e}()}),r.a.createElement("div",{className:i.TableTrayContainer},C?r.a.createElement(y,{purchase:p,currentValue:g}):r.a.createElement(M,{currentValue:g,setPurchase:u,balance:t}),r.a.createElement("div",{className:i.ButtonContainer},r.a.createElement(_,{onClick:C?function(){c((function(e){return e+N()})),f(!1),l(g)}:function(){c((function(e){return e-p.purchaseValue})),f(!0)},primary:!C,secondary:C,label:C?"SELL":"BUY"}),r.a.createElement(D,{positionOpen:C,lastPurchase:m})),r.a.createElement(T,{price:g,rising:A})),r.a.createElement(R,{purchaseItems:d})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.beb8c932.chunk.js.map