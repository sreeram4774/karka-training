"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[54973,96299,31798,57213,47748,6365],{93230:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(87462),a=r(67294),o=r(45697),i=r.n(o),l=r(1497),c=r(54922),d=r(49864),s=r(9127),u=r(15567),p=e=>{var{isHomePage:t,errorMainIcon:r,title:o,subtitle:i,actionButtonData:p,actionButtonClick:m,primaryButtonData:g,primaryButtonClick:f,customContainerStyle:h}=e;return a.createElement(u.ErrorContainer,{isHomePage:t,style:h},r&&(e=>{var t=s.ErrorIconsMap[e]||s.ErrorIconsMap.default;return a.createElement(u.ErrorMainIconWrapper,null,e&&"noNetworkError"!==e?a.createElement(l.default,{fileName:"discovery",svgName:e}):a.createElement(t,null))})(r),o&&a.createElement(c.default.text,{text:o,hybridStyle:{font:"subtitle-regular",margin:"40,46,16,46"}}),i&&a.createElement(c.default.text,{text:i,hybridStyle:{font:"body-regular",margin:"0,51,24,51"}}),a.createElement(u.ActionButtonWrapper,null,g&&a.createElement(d.default,(0,n.Z)({},g,{onClick:f})),p&&a.createElement(d.default,(0,n.Z)({},p,{onClick:m}))))};p.defaultProps={isHomePage:!1,errorMainIcon:"default",title:"",subtitle:"",actionButtonData:null,actionButtonClick:()=>{},customContainerStyle:{}},p.propTypes={isHomePage:i().bool,errorMainIcon:i().string,title:i().string,subtitle:i().string,actionButtonData:i().shape({}),customContainerStyle:i().shape({}),actionButtonClick:i().func};const m=p},15567:(e,t,r)=>{r.r(t),r.d(t,{ActionButtonWrapper:()=>l,ErrorContainer:()=>o,ErrorMainIconWrapper:()=>i});var n=r(93352),a=r(46381),o=(0,n.default)(a.HorizontalFlexBox).withConfig({componentId:"sc-41ciaf-0"})(["align-items:center;justify-content:center;text-align:center;background:",";max-width:unset;min-height:calc(100vh - ","px);margin:0;@media ","{background:transparent;max-width:500px;min-height:600px;margin:0 auto;}"],(e=>e.theme.WHITE),(e=>{var{isHomePage:t}=e;return t?111:56}),(e=>e.theme.laptopMin)),i=n.default.div.withConfig({componentId:"sc-41ciaf-1"})(["width:100%;padding:0 28px;"]),l=n.default.div.withConfig({componentId:"sc-41ciaf-2"})(["display:flex;"])},99090:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(67294),a=r(45697),o=r.n(a),i=r(8592),l=r(70423),c=r(95563),d=r(3811),s=e=>{var{status:t,fetchData:r}=e,[a,o]=(0,c.default)();return(0,n.useEffect)((()=>{o&&t===i.RESOLVED&&r()}),[o]),n.createElement(d.LoadMoreComponentContainer,{ref:a},n.createElement(l.default,null))};s.defaultProps={status:"",fetchData:()=>null},s.propTypes={status:o().string,fetchData:o().func};const u=s},3811:(e,t,r)=>{r.r(t),r.d(t,{LoadMoreComponentContainer:()=>n,default:()=>a});var n=r(93352).default.div.withConfig({componentId:"sc-11eizz1-0"})(["display:flex;justify-content:center;align-items:center;margin-top:16px;height:80px;background:",";@media ","{background:transparent;max-width:1240px;margin:24px auto;}"],(e=>e.theme.WHITE),(e=>e.theme.laptopMin));const a=null},8202:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(67294),a=r(45697),o=r(8592),i=r(1497),l=r(95563),c=r(42094),d=e=>{var{status:t,fetchData:r,isMoreAvailable:a}=e,[d,s]=(0,l.default)(),u=a?"View More Movies":"That’s all for now!";return n.createElement(c.LoadMoreWrapper,{ref:d,onClick:()=>{a&&s&&t===o.RESOLVED&&r()}},n.createElement(c.HorizontalLine,null),n.createElement(c.LoadMoreContainer,{isMoreAvailable:a},n.createElement(c.LoadMoreText,{isMoreAvailable:a},u),a&&n.createElement(i.default,{fileName:"common",svgName:"left-chevron-black",width:"16px",height:"16px"})),n.createElement(c.HorizontalLine,null))};d.defaultProps={isMoreAvailable:!1,status:"",fetchData:()=>null},d.propTypes={isMoreAvailable:a.bool,status:a.string,fetchData:a.func};const s=d},42094:(e,t,r)=>{r.r(t),r.d(t,{HorizontalLine:()=>l,LoadMoreContainer:()=>d,LoadMoreText:()=>s,LoadMoreWrapper:()=>i});var n=r(85809),a=r(93352),o=r(3811),i=(0,a.default)(o.LoadMoreComponentContainer).withConfig({componentId:"sc-plyeud-0"})(["height:unset;hr:first-child{margin:0px 8px 0px 16px;}"]),l=a.default.hr.withConfig({componentId:"sc-plyeud-1"})(["display:flex;flex-grow:1;margin:0px 16px 0px 8px;border-color:",";;"],(e=>e.theme.GREY_11)),c=(0,a.css)(["border:1px solid ",";border-radius:16px;"],(e=>e.theme.GREY_5)),d=a.default.div.withConfig({componentId:"sc-plyeud-2"})(["display:flex;padding:8px 12px;",";svg{transform:rotate(270deg);stroke:",";margin-left:4px;}"],(e=>e.isMoreAvailable&&c),(e=>e.theme.BLACK)),s=a.default.div.withConfig({componentId:"sc-plyeud-3"})(["",";"," color:",";"],(e=>e.isMoreAvailable?e.theme["tiny-regular"]:e.theme["subtitle-large"]),n.flexYAxisCss,(e=>e.isMoreAvailable?e.theme.BMS_PINK_1:e.theme.GREY_1))},46195:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(4942),a=r(67294),o=r(49486),i=r(45697),l=r.n(i),c=r(40650),d=r(9127),s=r(24223),u=r(66783),p=r(59839);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=e=>{var{isHomePage:t,isLoading:r,history:n,data:i,analytics:l,cookies:m,filterRoute:f}=e,h=(0,a.useRef)(!1),[v,b]=(0,s.useSticky)(!0,t?63:55),y=(0,a.useRef)(null),[C,x]=(0,a.useState)(i||{});(0,a.useEffect)((()=>{h.current?(y&&y.current&&(y.current.scrollLeft=0),(0,u.applyFilters)(n,f,C,l,m)):h.current=!0}),[C]);var I,w,k=(e,t)=>()=>{r||x((0,u.getUpdatedFilterData)(i,e,t))},S=()=>a.createElement(p.FilterItemCloseIconWrapper,null,a.createElement(d.FilterClose,null)),E=(I=[],w=[],Object.keys(i).forEach((e=>{i[e].items.forEach((t=>{t.quickFilter&&(t.selected?I.push(g(g({},t),{},{filterKey:e,quickFilterIndex:i[e].quickFilterIndex})):w.push(g(g({},t),{},{filterKey:e,quickFilterIndex:i[e].quickFilterIndex})))}))})),I.sort(((e,t)=>e.quickFilterIndex-t.quickFilterIndex)),w.sort(((e,t)=>e.quickFilterIndex-t.quickFilterIndex)),{selectedFilterItems:I,unselectedFilterItems:w,itemToShowInFilter:0!==[...I,...w].length}||{});return null!=E&&E.itemToShowInFilter?a.createElement(p.FilterContainer,{ref:v},a.createElement(p.FilterBody,{ref:y,isFixed:b,isHomePage:t},function(){return[...arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],...arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]].map((e=>a.createElement(p.FilterItemContainer,{key:e.code},a.createElement(p.FilterItemWrapper,{selected:e.selected,onClick:k(e.filterKey,e)},a.createElement(c.default,{isLoading:r,label:e.label,borderRadius:"16px",padding:"1px 12px 0px 12px",borderColor:e.selected?o.default.BMS_PINK_2:o.default.GREY_8,backgroundColor:e.selected?o.default.BMS_PINK_2:o.default.WHITE,fontColor:e.selected?o.default.WHITE:o.default.BMS_PINK_1,font:"tiny-regular",renderRightContent:e.selected?S:()=>{}})))))}(null==E?void 0:E.selectedFilterItems,null==E?void 0:E.unselectedFilterItems))):null};f.defaultProps={isHomePage:!1,isLoading:!1,data:{},history:{},analytics:{},cookies:{},filterRoute:""},f.propTypes={isHomePage:l().bool,isLoading:l().bool,data:l().object,history:l().object,analytics:l().object,cookies:l().object,filterRoute:l().string};const h=f},59839:(e,t,r)=>{r.r(t),r.d(t,{FilterBody:()=>i,FilterContainer:()=>o,FilterItemCloseIconWrapper:()=>d,FilterItemContainer:()=>l,FilterItemWrapper:()=>c});var n=r(93352),a=r(46381),o=n.default.div.withConfig({componentId:"sc-ije77g-0"})(["min-height:40px;"]),i=(0,n.default)(a.VerticalFlexBox).withConfig({componentId:"sc-ije77g-1"})(["position:relative;background:",";padding:16px;top:unset;left:unset;width:100%;z-index:unset;flex-wrap:nowrap;overflow-x:auto;"," "," @media ","{flex-wrap:wrap;position:relative;background:none;padding:0;top:0;left:0;z-index:unset;box-shadow:none;}"],(e=>e.theme.WHITE),(e=>{var{theme:t}=e;return t.hideHorizontalScrollbar}),(e=>{var{isFixed:t=!1,isHomePage:r=!1,theme:n}=e;return t?"\n\t\tposition: fixed;\n\t\ttop: ".concat(r?104:56,"px;\n\t\tleft: 0;\n\t\tz-index: ").concat(n.headerZ,";\n\t\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);\n\t"):""}),(e=>e.theme.laptopMin)),l=n.default.div.withConfig({componentId:"sc-ije77g-2"})(["padding-right:16px;margin-bottom:0;@media ","{padding-right:8px;margin-bottom:8px;}"],(e=>e.theme.laptopMin)),c=(0,n.default)(a.VerticalFlexBox).withConfig({componentId:"sc-ije77g-3"})(["align-items:center;"]),d=(0,n.default)(a.MobileOnlyContainer).withConfig({componentId:"sc-ije77g-4"})(["margin-top:-2px;margin-left:8px;width:8px;height:8px;"])},75494:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,defaultComponent:()=>i});var n=r(67294),a=r(46195),o=r(63496),i=e=>{var{error:t="Card Component Not Found"}=e;return n.createElement("div",{"data-error":t})};const l={"filter-list":o.default,"quick-filter":a.default,default:i}},54973:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,defaultComponent:()=>g});var n=r(67294),a=r(93230),o=r(99090),i=r(8202),l=r(16759),c=r(77100),d=r(49864),s=r(27251),u=r(75494),p=r(94245),m=r(20170),g=e=>{var{error:t="Component not found"}=e;return n.createElement("div",{"data-error":t})};const f={error:a.default,loadMoreComponents:{LoadMoreComponent:o.default,LoadMoreListing:i.default},text:l.default,image:c.default,button:d.default,carousel:s.default,filter:u.default,widget:m.default,card:p.default,default:g}},60543:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(4942),a=r(67294),o=r(45697),i=r.n(o),l=r(14494),c=r(24618),d=r(54430),s=r(72999),u=r(24223),p=r(65050);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=(e,t)=>Object.keys(t.data).length===Object.keys(e.data).length&&!Object.keys(t.data).some((r=>t.data[r]!==e.data[r])),f=e=>{var{pageName:t,styles:r,data:o,isDesktop:i,fullWidth:g,adsExperimentsSlug:f}=e,[h,v]=(0,a.useState)(!0),{styleId:b,adtechId:y}=o,C=(0,s.getComponentStyleFromStyleId)(b,r),[x,I]=(0,u.useDimensions)(!0,{events:{enableResize:!0}}),{platform:w={}}=(0,l.v9)((e=>e.cookies||{})),{code:k=""}=w,S=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(()=>{var e={};if(C&&C[0]){var{margin:t,padding:r}=C[0];t&&(e.margin="".concat(t.replace(/,/g,"px "),"px")),r&&(e.padding="".concat(r.replace(/,/g,"px "),"px"))}return e})());return a.createElement(p.WidthControlContainer,{widgetContainerStyle:C[0],hideContainer:!h,fullWidth:g},a.createElement("div",{id:"sdk-".concat(y),style:S},a.createElement(p.AdsWidgetWrapper,{id:y,ref:x,widgetContainerStyle:C[0],containerWidth:I.width>1240?"1240px":"".concat(I.width,"px"),fallbackWidths:{mobile:"100vw"},isDesktop:i},a.createElement(c.fi,{pageName:t,adTechID:y,aspectRatio:C[0].aspectRatio,adLoadingFailed:e=>{"error"===e&&v(!1)},config:{publisher:"bms",env:d.ENV,size:"FLUID",heightRatio:C[0].aspectRatio,adsExperimentsSlug:f},appCode:k}))))};f.defaultProps={pageName:"",styles:{},data:{},isDesktop:!1,fullWidth:!1,adsExperimentsSlug:""},f.propTypes={pageName:i().string,styles:i().object,data:i().object,isDesktop:i().bool,fullWidth:i().bool,adsExperimentsSlug:i().string};const h=(0,a.memo)(f,g)},65050:(e,t,r)=>{r.r(t),r.d(t,{AdsWidgetWrapper:()=>o,HorizontalFlexBox:()=>i,WidthControlContainer:()=>l});var n=r(93352),a=r(54430),o=n.default.div.withConfig({componentId:"sc-17itb6m-0"})(["background:url(","/m6/images/common/placeholder.png) 50% center no-repeat rgb(235,235,235);transition:all 0.2s ease;",";"],a.BMSCDN_ASSETS_URL,(e=>{var{widgetContainerStyle:t,containerWidth:r,fallbackWidths:n}=e;return t&&t.aspectRatio?r?"min-height: calc(".concat(r," / ").concat(t.aspectRatio,");"):"min-height: calc(".concat(n.mobile," / ").concat(t.aspectRatio,");"):""})),i=n.default.div.withConfig({componentId:"sc-17itb6m-1"})(["display:flex;flex-direction:column;"]),l=(0,n.default)(i).withConfig({componentId:"sc-17itb6m-2"})([""," ",""],(e=>{var{isFixed:t=!1}=e;return t?"position:fixed;z-index:49;width:100%;left:0;":"position:relative;z-index:unset;"}),(e=>{var{fullWidth:t=!1}=e;return t?"max-width: auto;":"max-width: 1240px; margin: 0 auto;"}))},28685:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(4942),a=r(67294),o=r(45697),i=r.n(o),l=r(16550),c=r(14494),d=r(79153),s=r(27251),u=r(26655),p=r(48169),m=r(72999),g=r(24223),f=r(46381),h=r(65513),v=r(94245),b=r(86895);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=e=>{var{data:t,styles:r}=e,n=(0,l.k6)(),o=(0,c.v9)((e=>e.cookies)),{title:i,subtitle:y,tag:x,cards:I,visibleItems:w=1,styleId:k,immersive:S,fillViewport:E,minPeek:O,horizontalSpacing:P,sliderDuration:j,showIndicators:W}=t,[D,F]=(0,a.useState)({}),[M,T]=(0,a.useState)(!0),[R]=(0,g.useImpressionTracker)(null,o),[B,L]=(0,g.useDimensions)(!0,{events:{enableResize:!0}}),[z,_]=(0,g.useDimensions)(!0,{events:{enableResize:!0}}),[H,N]=(0,a.useState)("100vh"),A=(0,p.isClient)(),G=(0,m.getComponentStyleFromStyleId)(k,r,{hasCardContainerStyle:!0}),V=()=>{return(()=>{if(S){var{width:e=0,aspectRatio:t=0}=G&&G[0]&&G[0].bottomIcon||{};return _.height-L.height-e/t}return 0})()*((e=I[0]&&(0,m.getComponentStyleFromStyleId)(I[0].styleId,r))&&e[0]&&e[0].imageContainer&&e[0].imageContainer.aspectRatio||1);var e};(0,a.useEffect)((()=>{A&&N("calc((".concat(.01*window.innerHeight,"px * 100))"))}),[A]);var U=e=>{var t,i=I[e]||null;if(i){var{analytics:l=null,ctaUrl:c="",type:d}=i,s=v.default[d]||v.default.default,u=(0,m.getComponentStyleFromStyleId)(i.styleId,r);return a.createElement(f.LinkWrapper,{key:e,href:c,onClick:(t=l,e=>{(0,p.handleCTAClick)(e,n,t,o)})},a.createElement(s,{error:"Card Not Found for ".concat(d),data:i,cardFallbackWidths:{mobile:"".concat(100/w,"vw"),desktop:"".concat(100/w,"vw")},styles:r,cardStyle:u[0],hasStyle:u[3],itemsPerRow:w,overlayGradient:S,shouldLoadImmediately:0===e,overrideZindex:S}))}return null},q=e=>{S&&F(I[e])},K=C({},(()=>{var e={};if(G&&G[0]){var{margin:t,padding:r}=G[0];t&&(e.margin="".concat(t.replace(/,/g,"px "),"px")),r&&(e.padding="".concat(r.replace(/,/g,"px "),"px"))}return e})()),Z=C({},(()=>{var e={};if(G&&G[0]){var t=(0,d.getIn)(G,[0,"background","color"])||(0,d.getIn)(G,[0,"backgroundColor"])||null;t&&(e.backgroundColor=t)}return e})());return G[3]?S?a.createElement(b.default,{data:t,styles:r}):a.createElement(f.WidgetWrapper,{ref:R,style:Z},a.createElement(f.ImmersiveContainer,{fillViewport:E,fullHeight:H},a.createElement(f.BackgroundContainer,{fillViewport:E,fullHeight:H},a.createElement(f.ImmersiveImageContainer,{immersive:S,backgroundImage:D&&D.image&&D.image.url||null})),a.createElement(f.WidgetContainer,{ref:z,style:K,immersive:S,activatePointers:M},a.createElement(u.default,{dimensionref:B,title:i,subtitle:y,tag:x,styleId:k,styles:r}),a.createElement(h.WidgetContainerBody,{cardContainerStyle:G[2],immersive:S},a.createElement(s.default,{totalSlides:I.length,visibleSlides:w,sliderDuration:j,renderSlide:U,minPeek:O,horizontalSpacing:P,immersive:S,immersiveWidth:V(),handleBackgroundChange:q,showIndicators:W}))))):null};x.defaultProps={styles:{},data:{title:{},subtitle:{},tag:{},cards:[{}],bottomIcon:{imgUrl:""},visibleItems:1,styleId:"",immersive:!1,fillViewport:!1,minPeek:0,horizontalSpacing:0,sliderDuration:5e3,showIndicators:!0}},x.propTypes={styles:i().shape({}),data:i().shape({title:i().shape({}),subtitle:i().shape({}),tag:i().shape({}),cards:i().arrayOf(i().shape({})),bottomIcon:i().shape({imgUrl:i().string}),visibleItems:i().number,styleId:i().string,immersive:i().bool,fillViewport:i().bool,minPeek:i().number,horizontalSpacing:i().number,sliderDuration:i().number,showIndicators:i().bool})};const I=x},65513:(e,t,r)=>{r.r(t),r.d(t,{SlideWrapper:()=>i,WidgetContainerBody:()=>o});var n=r(93352),a=r(72999),o=n.default.div.withConfig({componentId:"sc-88a9sm-0"})([""," ",""],(e=>{var{cardContainerStyle:t}=e;return(0,a.getComponentStyle)(t,{hasBackgroundColor:!0,hasPadding:!0,hasMargin:!0})}),(e=>{var{immersive:t}=e;return t?"flex-grow: 1;":""})),i=n.default.div.withConfig({componentId:"sc-88a9sm-1"})(["position:relative;",""],(e=>{var{slideContainerStyle:t}=e;return(0,a.getComponentStyle)(t,{hasBackgroundColor:!0,hasPadding:!0,hasMargin:!0})}))},17984:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(4942),a=r(67294),o=r(45697),i=r.n(o),l=r(94245),c=r(26655),d=r(16550),s=r(14494),u=r(79153),p=r(48169),m=r(72999),g=r(24223),f=r(46381),h=r(34715);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=e=>{var{isHomePage:t,data:r,styles:n}=e,o=(0,d.k6)(),i=(0,s.v9)((e=>e.cookies)),{cards:v,title:y,subtitle:C,tag:x,styleId:I,itemsPerRow:w,verticalSpacing:k,horizontalSpacing:S,alignItems:E,id:O}=r,P=(0,m.getComponentStyleFromStyleId)(I,n,{hasCardContainerStyle:!0}),j=(0,m.getLeftRightSpacing)(1,P[0].padding||"0,0,0,0"),W=(0,m.getLeftRightSpacing)(1,P[2].padding||"0,0,0,0"),D=(0,m.getVisibleCardsHorizontalSpacing)(w,S),F="(100% - ".concat(D,"px)"),M="".concat(j,"px - ").concat(W,"px - ").concat(D,"px"),[T]=(0,g.useImpressionTracker)(null,i),{location:R}=o,{search:B=""}=R,L=b({},(()=>{var e={};if(P&&P[0]){var{margin:t,padding:r}=P[0];t&&(e.margin="".concat(t.replace(/,/g,"px "),"px")),r&&(e.padding="".concat(r.replace(/,/g,"px "),"px"))}return e})()),z=b({},(()=>{var e={};if(P&&P[0]){var t=(0,u.getIn)(P,[0,"background","color"])||(0,u.getIn)(P,[0,"backgroundColor"])||null;t&&(e.backgroundColor=t)}return e})()),_=b(b(b({},E&&{justifyContent:E}),w?{display:"grid",gridColumnGap:"".concat(S,"px"),gridRowGap:"".concat(k,"px"),gridTemplateColumns:"repeat(".concat(w,", calc(").concat(F," / ").concat(w,"))")}:{display:"flex",flexWrap:"wrap"}),(()=>{var e={};if(P&&P[2]){var{margin:t,padding:r}=P[2];t&&(e.margin="".concat(t.replace(/,/g,"px "),"px")),r&&(e.padding="".concat(r.replace(/,/g,"px "),"px"))}return e})());return P[3]?a.createElement(f.WidgetWrapper,{ref:T,style:z},a.createElement(f.WidgetContainer,{isHomePage:t,style:L},a.createElement(c.default,{title:y,subtitle:C,tag:x,styleId:I,styles:n}),a.createElement(h.WidgetContainerBody,{alignItems:E,cardContainerWidth:F,style:_,itemsPerRow:w,verticalSpacing:k,horizontalSpacing:S},v.map(((e,r)=>{var c,{type:d=null,analytics:s=null}=e,u=(0,m.getComponentStyleFromStyleId)(e.styleId,n),g=l.default[d]||l.default.default,f=(null==e?void 0:e.ctaUrl)||"",v=(0,m.getLeftRightSpacing)(w,u[0].padding||"0,0,0,0"),b="".concat(M," - ").concat(v,"px");return!f||"#goBack"===f||"COMING_SOON_WEB"!==O&&"NOW_SHOWING_WEB"!==O&&"COMING_SOON_MOBILE"!==O&&"NOW_SHOWING_MOBILE"!==O||(f+=B=B.replace("?","&")),a.createElement(h.CardContainer,{key:r,itemsPerRow:w,verticalSpacing:k,horizontalSpacing:S,href:f,onClick:(c=s,e=>{(0,p.handleCTAClick)(e,o,c,i)})},a.createElement(g,{error:"Card Not Found for ".concat(d),data:e,cardFallbackWidths:{mobile:"((100vw - ".concat(b,") / ").concat(w,")"),desktop:"((92vw - ".concat(t?0:330,"px - ").concat(b,") / ").concat(w,")"),maxDesktop:"((1240px - ".concat(t?0:330,"px - ").concat(b,") / ").concat(w,")")},styles:n,cardStyle:u[0],hasStyle:u[3],itemsPerRow:w}))}))))):null};y.defaultProps={isHomePage:!1,styles:{},data:{}},y.propTypes={isHomePage:i().bool,styles:i().object,data:i().object};const C=y},34715:(e,t,r)=>{r.r(t),r.d(t,{CardContainer:()=>l,WidgetContainerBody:()=>i});var n=r(93352),a=r(72999),o=r(46381),i=n.default.div.withConfig({componentId:"sc-1ljcxl3-0"})(["",""],(e=>{var{cardContainerWidth:t,itemsPerRow:r,verticalSpacing:n=0,horizontalSpacing:o=0}=e;return r&&"".concat((0,a.getIEGridCSS)(r,r,1,n,o,t))})),l=(0,n.default)(o.LinkWrapper).withConfig({componentId:"sc-1ljcxl3-1"})(["display:block;",""],(e=>{var{itemsPerRow:t,verticalSpacing:r=0,horizontalSpacing:n=0}=e;return t?"":"margin-right: ".concat(r,"px; margin-top: ").concat(n,"px;")}))},86895:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(4942),a=r(67294),o=r(45697),i=r.n(o),l=r(79153),c=r(16550),d=r(14494),s=r(72999),u=r(72521),p=r(26655),m=r(48169),g=r(24223),f=r(77100),h=r(46381),v=r(8714),b=r(62436);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var C=null,x={background:"none"},I={mobile:"100vw",desktop:"100vw"},w={event_name:"user_scrolling",event_type:"view",event_action:"scroll",schema_version:"3.0",screen_name:"tvod_home"},k=e=>{var{data:t,styles:r}=e,{title:o,subtitle:i,tag:k,cards:S,bottomIcon:E,styleId:O,immersive:P,minPeek:j,horizontalSpacing:W}=t,D=(0,d.v9)((e=>e.cookies)),F=(0,c.k6)(),M=(0,a.useRef)(0),T=(0,a.useRef)(null),R=(0,a.useRef)(null),B=(0,a.useRef)(null),L=(0,a.useRef)((0,s.getComponentStyleFromStyleId)(O,r,{hasCardContainerStyle:!0})),[z,_]=(0,g.useDimensions)(!1,{events:{enableResize:!1}}),[H,N]=(0,a.useState)(0),[A,G]=(0,a.useState)("calc(90vh - 56px)"),V=S.length,U=(0,a.useRef)(!1);(0,a.useEffect)((()=>{G("".concat(window.innerHeight-56,"px"))}),[]),(0,a.useEffect)((()=>(clearTimeout(C),C=setTimeout((()=>{N((H+1)%V)}),5e3),()=>clearTimeout(C))),[H,N,V]);var q=()=>{setTimeout((()=>{window.scrollTo({top:_.height,behavior:"smooth"})}),1),U.current||(U.current=!0,(0,u.sendAnalyticsData)(w,D))},K=e=>{var t,n=S[e]||{},{image:o,text:i,id:l,analytics:c=null,ctaUrl:d=""}=n,u=(0,s.getComponentStyleFromStyleId)(n.styleId,r),{imageContainer:p={},textContainer:g={}}=u[0];if(n)return a.createElement(h.LinkWrapper,{key:e,href:d,onClick:(t=c,e=>{(0,m.handleCTAClick)(e,F,t,D)})},a.createElement(b.ImmersiveImageContainer,{imageContainerStyle:p},a.createElement(f.default,{cardFallbackWidths:I,imageContainerStyle:p,customContainerStyle:{zIndex:0},src:o.url,altText:o.altText,shouldLoadImmediately:0===e,id:l}),a.createElement(b.GradientContainer,null)),a.createElement(b.TextContainer,{cardTextContainerStyle:g},(0,v.renderCardText)(r,1,i)))},Z=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(()=>{var e={};if(L&&L.current){var t=(0,l.getIn)(L,["current",0,"background","color"])||(0,l.getIn)(L,["current",0,"backgroundColor"])||null;t&&(e.backgroundColor=t)}return e})());return L.current[3]?a.createElement(h.WidgetWrapper,{ref:z,style:Z},a.createElement(b.BackgroundContainerWrapper,null,a.createElement(b.BackgroundContainer,{backgroundImage:(0,l.getIn)(S,[H,"image","url"])})),a.createElement(b.ImmersiveContainer,{height:A},a.createElement(b.ImmersiveHeader,null,a.createElement(p.default,{title:o,subtitle:i,tag:k,styleId:O,styles:r})),a.createElement(b.CarouselContainer,{height:_.height?"".concat(_.height-82,"px"):"100%",onTouchStart:e=>{var{changedTouches:t,touches:r}=e;if(r.length>1)return null;M.current=t[0].clientX,T.current=t[0].clientY,R.current=0,B.current=0},onTouchMove:e=>{if(P){var{changedTouches:t,touches:r}=e;if(M.current&&T.current&&!(r.length>1)){var n=t[0].clientX,a=t[0].clientY;R.current=M.current-n,B.current=T.current-a}}},onTouchEnd:e=>{e.stopPropagation();var{touches:t}=e;return t.length>1?null:B.current>50||Math.abs(R.current)<30&&B.current>50?q():void(Math.abs(R.current)<35&&B.current<-10||B.current<-50?setTimeout((()=>{window.scrollTo({top:0,behavior:"smooth"})}),1):R.current>5?N((H+1)%V):R.current<-5&&N(0===H?V-1:(H-1)%V))}},a.createElement(b.ImmersiveSlide,{slideIndex:H,minPeek:j,horizontalSpacing:W},(()=>{for(var e=[],t=0;t<V;t++){var r=void 0;r=t<0?-t:t<V?t:t-V,e.push(a.createElement(b.Slides,{key:"slide-".concat(t+1),index:r,minPeek:j,horizontalSpacing:W},K(t)))}return e})())),a.createElement(b.ArrowContainer,{onClick:q},a.createElement(f.default,{shouldLoadImmediately:!0,hasThumbnail:!1,customContainerStyle:x,src:E&&E.imgUrl,imageContainerStyle:L&&L.current[0]&&L.current[0].bottomIcon})))):null};k.defaultProps={styles:{},data:{title:{},subtitle:{},tag:{},cards:[{}],bottomIcon:{imgUrl:""},visibleItems:1,styleId:"",immersive:!1,fillViewport:!1,minPeek:0,horizontalSpacing:0}},k.propTypes={styles:i().shape({}),data:i().shape({title:i().shape({}),subtitle:i().shape({}),tag:i().shape({}),cards:i().arrayOf(i().shape({})),bottomIcon:i().shape({imgUrl:i().string}),visibleItems:i().number,styleId:i().string,immersive:i().bool,fillViewport:i().bool,minPeek:i().number,horizontalSpacing:i().number})};const S=k},62436:(e,t,r)=>{r.r(t),r.d(t,{ArrowContainer:()=>c,BackgroundContainer:()=>g,BackgroundContainerWrapper:()=>f,CarouselContainer:()=>l,GradientContainer:()=>m,ImmersiveContainer:()=>o,ImmersiveHeader:()=>i,ImmersiveImageContainer:()=>p,ImmersiveSlide:()=>d,Slides:()=>s,TextContainer:()=>u});var n=r(93352),a=r(72999),o=n.default.div.withConfig({componentId:"sc-tyb3au-0"})(["height:",";display:flex;flex-direction:column;background-color:rgba(0,0,0,0.4);touch-action:pan-y;position:relative;overflow:hidden;"],(e=>{var{height:t}=e;return t})),i=n.default.div.withConfig({componentId:"sc-tyb3au-1"})(["flex:0 0 28px;z-index:1;"]),l=n.default.div.withConfig({componentId:"sc-tyb3au-2"})(["flex:1 1 auto;padding:16px 0;width:100%;height:",";"],(e=>{var{height:t}=e;return t})),c=n.default.div.withConfig({componentId:"sc-tyb3au-3"})(["height:35px;margin:0 auto 3px;max-width:160px;"]),d=n.default.div.withConfig({componentId:"sc-tyb3au-4"})(["display:flex;overflow:hidden;height:100%;flex-flow:row nowrap;width:fit-content;padding:",";transition:transform 700ms ease 0s;transform:",";touch-action:pan-y;"],(e=>{var{minPeek:t=0,horizontalSpacing:r=0}=e;return"0  ".concat(t+r/2,"px")}),(e=>{var{minPeek:t=0,horizontalSpacing:r=0,slideIndex:n=1}=e;return"translateX(calc(".concat(-1*n," * (100vw - ").concat(2*t,"px - ").concat(r,"px)))")})),s=n.default.div.withConfig({componentId:"sc-tyb3au-5"})(["height:100%;background:black;width:",";margin:",";overflow:hidden;border-radius:16px;position:relative;"],(e=>{var{minPeek:t=0,horizontalSpacing:r=0}=e;return"calc(100vw  - (2 * (".concat(t,"px + ").concat(r,"px)))")}),(e=>{var{horizontalSpacing:t}=e;return"0 calc( ".concat(t,"px / 2 )")})),u=n.default.div.withConfig({componentId:"sc-tyb3au-6"})(["align-self:flex-end;position:absolute;bottom:0;width:100%;",""],(e=>{var{cardTextContainerStyle:t}=e;return(0,a.getComponentStyle)(t,{hasPadding:!0,hasBackgroundColor:!0,hasBorderRadius:!0})})),p=n.default.div.withConfig({componentId:"sc-tyb3au-7"})(["position:relative;",""],(e=>{var{imageContainerStyle:t}=e;return(0,a.getComponentStyle)(t,{hasMargin:!0})})),m=n.default.div.withConfig({componentId:"sc-tyb3au-8"})(["position:absolute;top:0;width:100%;height:100%;background:linear-gradient(rgba(0,0,0,0) 60%,rgb(0,0,0) 100%);"]),g=n.default.div.withConfig({componentId:"sc-tyb3au-9"})(["position:absolute;width:100%;overflow:hidden;top:-56px;",""],(e=>{var{backgroundImage:t}=e;return t?'height:100%;transition: background-image 1s ease-in-out; background-image: url("'.concat(t,'");\n\t\t\tbackground-position: center;background-repeat: no-repeat;background-size: cover;\n\t\t\tfilter: blur(25px);transform: scale(1.17)'):""})),f=n.default.div.withConfig({componentId:"sc-tyb3au-10"})(["position:absolute;height:100vh;width:100vw;top:-56px;overflow:hidden;"])},20170:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d,defaultComponent:()=>c});var n=r(67294),a=r(60543),o=r(17984),i=r(75630),l=r(28685),c=e=>{var{error:t="Widget Not Found"}=e;return n.createElement("div",{"data-error":t})};const d={advertisement:e=>n.createElement(a.default,e),"horizontal-scroll":i.default,flexbox:o.default,carousel:l.default,default:c}}}]);