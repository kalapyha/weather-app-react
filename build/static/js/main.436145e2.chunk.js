(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{29:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),r=a(22),s=a.n(r),i=(a(28),a(29),a(7)),l=a.n(i),o=a(12),d=a(1),j=a(23),u=function(e,t){switch(t.type){case"TOGGLE_TEMPERATURE":return Object(d.a)(Object(d.a)({},e),{},{isCelsius:!e.isCelsius});case"SET_TEMPERATURE_TO_CELSIUS":return Object(d.a)(Object(d.a)({},e),{},{isCelsius:!0});case"CONVERT_MAIN_TEMPERATURE":return Object(d.a)(Object(d.a)({},e),{},{currentWeather:t.payload});case"ON_LOADING":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case"OFF_LOADING":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1});case"UPDATE_ACTIVE_LOCATION":return Object(d.a)(Object(d.a)({},e),{},{activeLocationIndex:t.payload});case"SET_LOCATION":return Object(d.a)(Object(d.a)({},e),{},{latitude:t.payload.coords.latitude,longitude:t.payload.coords.longitude});case"SET_CURRENT_WEATHER":return Object(d.a)(Object(d.a)({},e),{},{currentWeather:t.payload});case"SET_PLACES_NEAR_TO_CURRENT_LOCATION":return Object(d.a)(Object(d.a)({},e),{},{placesNear:t.payload});case"SET_5_FAVORITE_PLACES":return Object(d.a)(Object(d.a)({},e),{},{favoriteLocations:t.payload});case"SHOW_ERROR":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isError:!0});default:throw new Error("Incorrect action type!")}},b=a(9),O=a.n(b),h=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?Math.round(10*(9*e/5+32))/10:Math.round(5*(e-32)/9*10)/10},x=function(e){switch(e){case"Clear":return"Sunny.min.png";case"Clouds":return"PartlyCloudy.min.png";case"Rain":return"Rainy.min.png";case"Snow":return"Snowy.min.png";default:return"UnknownWeather.png"}},m=a(0),p=n.a.createContext(),f=function(e){var t=e.children,a=Object(c.useReducer)(u,{isLoading:!0,isError:!1,activeLocationIndex:0,errorMessage:"Ooops, something went wrong. Make sure you added the correct API and check your SSL if you trying a production build.",isCelsius:!0,favoriteLocations:[],placesNear:[],currentWeather:{},latitude:"",longitude:""}),n=Object(j.a)(a,2),r=n[0],s=n[1],i=Object(c.useRef)(!0),b=function(e){s({type:"SET_LOCATION",payload:e})};return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.navigator.geolocation.getCurrentPosition(b,(function(e){e.message.startsWith("Only secure origins are allowed")&&s({type:"SHOW_ERROR"})}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),s({type:"SHOW_ERROR",payload:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("http://api.openweathermap.org/data/2.5/find?lat=".concat(r.latitude,"&lon=").concat(r.longitude,"&cnt=4&units=metric&appid=33d5e32be0383bcae9896f3936121f4e"));case 3:return t=e.sent,e.next=6,O.a.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(r.latitude,"&lon=").concat(r.longitude,"&units=metric&appid=33d5e32be0383bcae9896f3936121f4e"));case 6:return a=e.sent,e.next=9,O.a.get("http://api.openweathermap.org/data/2.5/box/city?bbox=-76,44,-73,46,9&appid=33d5e32be0383bcae9896f3936121f4e");case 9:c=e.sent,s({type:"SET_PLACES_NEAR_TO_CURRENT_LOCATION",payload:t.data.list}),s({type:"SET_CURRENT_WEATHER",payload:a.data}),s({type:"SET_5_FAVORITE_PLACES",payload:c.data.list.slice(0,5)}),s({type:"OFF_LOADING"}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0),s({type:"SHOW_ERROR"});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();i.current?i.current=!1:e()}),[r.latitude,r.longitude]),Object(m.jsx)(p.Provider,{value:Object(d.a)(Object(d.a)({},r),{},{toggleTemperature:function(){s({type:"TOGGLE_TEMPERATURE"}),s({type:"CONVERT_MAIN_TEMPERATURE",payload:Object(d.a)(Object(d.a)({},r.currentWeather),{},{main:Object(d.a)(Object(d.a)({},r.currentWeather.main),{},{temp:h(r.currentWeather.main.temp,r.isCelsius),feels_like:h(r.currentWeather.main.feels_like,r.isCelsius)})})})},showWeatherFromFavoritePlaces:function(e){s({type:"UPDATE_ACTIVE_LOCATION",payload:e}),s({type:"SET_CURRENT_WEATHER",payload:r.favoriteLocations[e]}),s({type:"SET_TEMPERATURE_TO_CELSIUS"})}}),children:t})},g=function(){return Object(c.useContext)(p)};var v=function(){var e=g(),t=e.isCelsius,a=e.toggleTemperature;return Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",defaultChecked:t&&"checked",onChange:a}),Object(m.jsx)("span",{className:"slider round pl-2 pt-1",children:"\xb0C \xb0F"})]})};var N=function(){var e=g().isLoading;return Object(m.jsx)("nav",{className:"navbar bg-white","data-testid":"header",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("p",{className:"navbar-brand h1",children:"Weather"}),!e&&Object(m.jsx)(v,{})]})})};var y=function(){return Object(m.jsx)("footer",{className:"footer d-flex align-items-center justify-content-center bg-dark fixed-bottom mt-5",children:Object(m.jsx)("span",{className:"text-muted text-center p-2",children:Object(m.jsxs)("small",{children:["CC0 \u24ea | Weather App | Made by"," ",Object(m.jsx)("a",{href:"https://github.com/kalapyha/weather-app-react",className:"badge badge-dark",children:"<Nick K.>"})," ","using OpenWeather API"]})})})};a(49);var E=function(e){var t=e.name,a=e.image,c=e.index,n="/assets/".concat(x(a)),r=g(),s=r.activeLocationIndex,i=r.showWeatherFromFavoritePlaces;return Object(m.jsx)("li",{className:"list-group-item ".concat(s===c&&"bg-light"),onClick:function(){return i(c)},children:Object(m.jsxs)("article",{className:"d-flex align-items-center justify-content-start justify-content-md-between",children:[Object(m.jsx)("img",{src:n,alt:"Weather Logo",className:"rounded float-left",style:{height:"5vw",width:"auto"}}),Object(m.jsx)("p",{className:"pl-3 h4 text-center ",children:t})]})})};var w=function(){var e=g().favoriteLocations;return Object(m.jsxs)("section",{className:"card pb-3",children:[Object(m.jsx)("div",{className:"card-header bg-white",children:"Favorite Locations"}),Object(m.jsx)("ul",{className:"list-group list-group-flush",children:e.map((function(e,t){return Object(m.jsx)(E,{image:e.weather[0].main,name:e.name,index:t},t)}))})]})},T=a(5),_=a(6);var C=function(){var e=g(),t=e.currentWeather,a=e.isCelsius,c="/assets/".concat(x(t.weather[0].main));return Object(m.jsxs)("section",{className:"card",children:[Object(m.jsx)("div",{className:"card-header bg-white text-center text-uppercase text-md-left",children:t.name}),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column flex-lg-row",children:[Object(m.jsx)("div",{className:"p-3",children:Object(m.jsx)("img",{src:c,alt:"Weather Logo",style:{width:"14vw"}})}),Object(m.jsxs)("div",{className:"card-body ",children:[Object(m.jsxs)("h5",{className:"card-title text-center",style:{fontSize:"calc(3vw + 10px)"},children:[t.main.temp,a?"\xb0C":"\xb0F"]}),Object(m.jsx)("p",{className:"card-text text-capitalize font-italic text-center ",children:t.weather[0].description}),Object(m.jsxs)("section",{className:"d-flex align-items-center justify-content-between flex-column flex-md-row",children:[Object(m.jsxs)("div",{className:"px-2",children:[Object(m.jsx)(T.a,{icon:_.d})," ",t.wind.speed," m/s"]}),Object(m.jsxs)("div",{className:"px-2",children:[Object(m.jsx)(T.a,{icon:_.c})," ",t.main.humidity," ","%"]}),Object(m.jsxs)("div",{className:"px-2",children:[Object(m.jsx)(T.a,{icon:_.b})," ",t.main.feels_like," ",a?"\xb0C":"\xb0F"]})]})]})]})]})};var R=function(){return Object(m.jsx)("div",{"data-testid":"spinner",className:"spinner-border p-2",style:{width:"5.5rem",height:"5.5rem"},role:"status"})};var L=function(){return Object(m.jsxs)("article",{className:"d-none d-lg-block d-xl-block mt-3 pt-2",children:[Object(m.jsx)("hr",{}),Object(m.jsxs)("h3",{className:"text-center font-weight-light py-2",children:[" ","Looking for places near you..."]}),Object(m.jsx)("div",{className:"d-flex align-items-center justify-content-center p-5",children:Object(m.jsx)(R,{})})]})};var A=function(){return Object(m.jsxs)("section",{className:"card",children:[Object(m.jsx)("div",{className:"card-header bg-white",children:"Searching Your Favorite Locations..."}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsx)("li",{className:"list-group-item",children:Object(m.jsx)("article",{className:"d-flex align-items-center justify-content-between",children:Object(m.jsx)(R,{})})}),Object(m.jsx)("li",{className:"list-group-item",children:Object(m.jsx)("article",{className:"d-flex align-items-center justify-content-between",children:Object(m.jsx)(R,{})})}),Object(m.jsx)("li",{className:"list-group-item",children:Object(m.jsx)("article",{className:"d-flex align-items-center justify-content-between",children:Object(m.jsx)(R,{})})})]})]})};var S=function(){return Object(m.jsxs)("section",{className:"card",children:[Object(m.jsx)("div",{className:"card-header bg-white",children:"Finding your current location..."}),Object(m.jsx)("div",{className:"d-flex justify-content-center align-items-center p-5",children:Object(m.jsx)(R,{})})]})};var k=function(e){var t=e.name,a=e.wind,c=e.temp;return Object(m.jsxs)("div",{className:"py-4 px-2 border rounded bg-white",children:[Object(m.jsxs)("h5",{className:"text-center",children:[Object(m.jsx)(T.a,{icon:_.a,className:"text-muted"})," ",t]}),Object(m.jsxs)("div",{className:"text-secondary d-flex justify-content-between flex-column align-items-md-center flex-xl-row",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(T.a,{icon:_.d})," ",a," ",Object(m.jsx)("small",{children:"m/s"})]}),Object(m.jsx)("div",{className:"d-inline text-dark px-1",children:" | "}),Object(m.jsxs)("div",{children:[Object(m.jsx)(T.a,{icon:_.b})," ",c," ",Object(m.jsx)("small",{children:"\xb0C"})]})]})]})};var I=function(){var e=g().placesNear;return Object(m.jsxs)("article",{className:"d-none d-lg-block d-xl-block mt-3 pt-2",children:[Object(m.jsx)("hr",{}),Object(m.jsxs)("h3",{className:"text-center font-weight-light py-2",children:[" ","Places located near you:"]}),Object(m.jsx)("div",{className:"d-flex align-items-stretch justify-content-between ",children:e.map((function(e,t){return Object(m.jsx)(k,{name:e.name,wind:e.wind.speed,temp:e.main.temp},t)}))})]})};var W=function(e){var t=e.message;return Object(m.jsx)("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:Object(m.jsx)("div",{children:t})})};var P=function(){var e=g(),t=e.isLoading,a=e.isError,c=e.errorMessage;return Object(m.jsx)(m.Fragment,{children:a?Object(m.jsx)(W,{message:c}):Object(m.jsxs)("div",{className:"row bg-light py-4 ",children:[Object(m.jsxs)("div",{className:"col-12 col-md-8 order-md-2 ",children:[t?Object(m.jsx)(S,{}):Object(m.jsx)(C,{}),Object(m.jsx)("div",{children:t?Object(m.jsx)(L,{}):Object(m.jsx)(I,{})})]}),Object(m.jsx)("div",{className:"col-12 col-md-4 order-md-1 ",children:t?Object(m.jsx)(A,{}):Object(m.jsx)(w,{})})]})})};var F=function(){return Object(m.jsxs)("div",{className:"bg-light pb-5",children:[Object(m.jsx)(N,{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(P,{})}),Object(m.jsx)(y,{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(f,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),U()}},[[54,1,2]]]);
//# sourceMappingURL=main.436145e2.chunk.js.map