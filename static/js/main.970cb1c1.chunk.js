(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,o){e.exports=o.p+"static/media/hp1.9d5cdaf7.jpg"},function(e,t,o){e.exports=o.p+"static/media/hp2.6c46e0ad.jpg"},function(e,t,o){e.exports=o.p+"static/media/hp3.ca7c3819.jpg"},function(e,t,o){e.exports=o.p+"static/media/hp4.d00f8fb6.jpg"},function(e,t,o){e.exports=o.p+"static/media/hp5.a194e3e7.jpg"},function(e,t,o){e.exports=o.p+"static/media/hp6.503c6ee7.png"},function(e,t,o){e.exports=o.p+"static/media/hp7.0041fe33.jpg"},,function(e,t,o){e.exports=o(43)},,,,,function(e,t,o){},,function(e,t,o){},,function(e,t){String.prototype.includes||Object.defineProperty(String.prototype,"includes",{value:function(e,t){return"number"!==typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(e),r=1;r<arguments.length;r++){var a=arguments[r];if(null!=a)for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o[n]=a[n])}return o},writable:!0,configurable:!0}),function(){"use strict";var e=Array.prototype.slice;try{e.call(document.documentElement)}catch(t){Array.prototype.slice=function(t,o){if(o="undefined"!==typeof o?o:this.length,"[object Array]"===Object.prototype.toString.call(this))return e.call(this,t,o);var r,a,n=[],i=this.length,c=t||0;c=c>=0?c:Math.max(0,i+c);var l="number"==typeof o?Math.min(o,i):i;if(o<0&&(l=i+o),(a=l-c)>0)if(n=new Array(a),this.charAt)for(r=0;r<a;r++)n[r]=this.charAt(c+r);else for(r=0;r<a;r++)n[r]=this[c+r];return n}}}(),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,o;if(null==this)throw new TypeError("this is null or not defined");var r=Object(this),a=r.length>>>0;if("function"!==typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),o=0;o<a;){var n;o in r&&(n=r[o],e.call(t,n,o,r)),o++}}),Array.prototype.filter||(Array.prototype.filter=function(e,t){"use strict";if("Function"!==typeof e&&"function"!==typeof e||!this)throw new TypeError;var o=this.length>>>0,r=new Array(o),a=this,n=0,i=-1;if(void 0===t)for(;++i!==o;)i in this&&e(a[i],i,a)&&(r[n++]=a[i]);else for(;++i!==o;)i in this&&e.call(t,a[i],i,a)&&(r[n++]=a[i]);return r.length=n,r}),Array.prototype.map||(Array.prototype.map=function(e){var t,o,r;if(null==this)throw new TypeError("this is null or not defined");var a=Object(this),n=a.length>>>0;if("function"!==typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),o=new Array(n),r=0;r<n;){var i,c;r in a&&(i=a[r],c=e.call(t,i,r,a),o[r]=c),r++}return o})},,,,,,,,,function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),n=o(15),i=o.n(n),c=(o(30),o(32),o(45)),l=(o(34),o(35),o(39),o(7)),s=o(10),u=o(8),d=o(11),h=o(5),g=o(46),f=o(44),p=function(e,t){var o=document.createElement("div");return o.style[e]=t,o.style[e]===t},m=function(e){return e in document.body.style},v=navigator.userAgent.toLowerCase().includes("firefox"),y=navigator.userAgent.toLowerCase().includes("edge"),k=p("perspective","400px")&&p("transform-style","preserve-3d")&&p("transform","rotateY(-180deg)")&&m("perspective")&&m("transform-style")&&m("transform")&&!v&&!y,b=window.innerWidth>600,w=k&&b,E=function(e){var t,o=e.category,r=e.title,n=e.cover,i=e.previewLink,c=e.changeCategory,l=e.addToBookcase,s=e.removeBook,u=!!o,d=u?"move":"add",h=["currently reading","want to read","read"],g=u?h.filter(function(e){return e!==o}):h,f=u?"Choose another category to move this book to":"Choose a category to add this book to",p=u?c:l;return t=w?a.a.createElement("div",{className:"three-d-book"},a.a.createElement("img",{className:"front face",src:n,alt:r}),a.a.createElement("div",{className:"back face",role:"presentation"}),a.a.createElement("div",{className:"top face",role:"presentation"}),a.a.createElement("div",{className:"bottom face",role:"presentation"}),a.a.createElement("div",{className:"right face",role:"presentation"}),a.a.createElement("div",{className:"left face",role:"presentation"})):a.a.createElement("img",{className:"cover",src:n,alt:r}),a.a.createElement("li",{className:"book"},a.a.createElement("a",{href:i,className:"preview-link",title:"Click for the book preview page"},t),u&&a.a.createElement("button",{className:"remove",type:"button",onClick:s},a.a.createElement("abbr",{title:"Remove"},"\u292b"))," ",a.a.createElement("select",{value:o,className:"category-selection","aria-label":f,onChange:function(e){return p(e.target.value)},style:{width:u?"4.0625rem":"3.4375rem"}},a.a.createElement("option",null,d," to--")," ",g.map(function(e){return a.a.createElement("option",{key:e},e)})))},B=function(e){var t=e.categoryBooks,o=e.removeBook,r=e.changeCategory,n=e.id,i=e.title,c=t.map(function(e){var t=e.title,n=e.category,i=e.id,c=e.cover,l=e.previewLink;return a.a.createElement(E,{key:i,title:t,category:n,cover:c,previewLink:l,removeBook:function(){return o(i)},changeCategory:function(e){return r(i,e)}})});return a.a.createElement("section",{id:n,className:"category",role:"region","aria-labelledby":n+"-heading"},a.a.createElement("h2",{id:n+"-heading"},i),a.a.createElement("ul",null,c))},A=function(e){var t=e.categorizedBooks,o=e.removeBook,r=e.changeCategory,n=t.filter(function(e){return"currently reading"===e.category}),i=t.filter(function(e){return"want to read"===e.category}),c=t.filter(function(e){return"read"===e.category});return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{categoryBooks:n,removeBook:o,changeCategory:r,id:"currently-reading",title:"Currently Reading"}),a.a.createElement("hr",null),a.a.createElement(B,{categoryBooks:i,removeBook:o,changeCategory:r,id:"want-to-read",title:"Want to Read"}),a.a.createElement("hr",null),a.a.createElement(B,{categoryBooks:c,removeBook:o,changeCategory:r,id:"read",title:"Read"}))},C=function(e){var t=e.categorizedBooks,o=e.removeBook,r=e.changeCategory;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{id:"main-header",role:"banner"},a.a.createElement("h1",null,"Book Shelves"))," ",a.a.createElement("main",{role:"main"},a.a.createElement(A,{categorizedBooks:t,removeBook:o,changeCategory:r}),a.a.createElement(f.a,{id:"add-link",to:"/add"},"Add"))," ")},j=function(e){function t(){var e,o;Object(h.a)(this,t);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={titleSearchDisabled:!1,authorSearchDisabled:!1},o.handleTitleQueryChange=function(e){o.setState({authorSearchDisabled:!!e});var t=e.split(" ").join("+").toLowerCase();o.props.updateSearchBooks(t,"intitle")},o.handleAuthorQueryChange=function(e){o.setState({titleSearchDisabled:!!e});var t=e.split(" ").join("+").toLowerCase();o.props.updateSearchBooks(t,"inauthor")},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.handleTitleQueryChange,t=this.handleAuthorQueryChange,o=this.state,r=o.titleSearchDisabled,n=o.authorSearchDisabled;return a.a.createElement("form",{id:"search-form"},a.a.createElement("p",null,"Search for a book by its ",a.a.createElement("b",null,"title")," or ",a.a.createElement("b",null,"author name")," to add to your bookcase."),a.a.createElement("fieldset",null,a.a.createElement("legend",null,"Search by"),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"title-search"},"Book title: "),a.a.createElement("input",{type:"search",id:"title-search",onChange:function(t){return e(t.target.value)},disabled:r})),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"author-search"},"Book author: "),a.a.createElement("input",{type:"search",id:"author-search",onChange:function(e){return t(e.target.value)},disabled:n}))))}}]),t}(r.Component),S=function(e){var t=e.searchResultingBooks,o=e.addToBookcase,r=e.removeBook,n=e.changeCategory,i=t.map(function(e){var t=e.title,i=e.category,c=e.id,l=e.cover,s=e.previewLink;return a.a.createElement(E,{key:c,title:t,cover:l,category:i,previewLink:s,addToBookcase:function(e){return o({title:t,category:e,id:c,cover:l,previewLink:s},e)},removeBook:function(){return r(c)},changeCategory:function(e){return n(c,e)}})});return a.a.createElement("ul",{id:"results"},i)},L=function(e){var t=e.searchResultingBooks,o=e.addToBookcase,r=e.removeBook,n=e.changeCategory,i=e.updateSearchBooks;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{id:"adding-page-header",role:"banner"},a.a.createElement(f.a,{id:"return-link",to:"/"},a.a.createElement("span",{role:"img","aria-label":"Left Arrow"},"\u2190")," Return to my bookcase"),a.a.createElement("h1",null,"Add to your Bookcase ",a.a.createElement("span",{role:"img","aria-label":"Book"},"\ud83d\udcd5"))),a.a.createElement(j,{updateSearchBooks:i}),a.a.createElement(S,{searchResultingBooks:t,addToBookcase:o,removeBook:r,changeCategory:n}),a.a.createElement("footer",null,a.a.createElement("p",null,a.a.createElement("small",null,"Powered by ",a.a.createElement("b",null,"Google books API"),"."))))},O=o(17),P=o.n(O),R=o(18),T=o.n(R),x=o(19),J=o.n(x),Q=o(20),z=o.n(Q),N=o(21),_=o.n(N),W=o(22),H=o.n(W),F=o(23),q=o.n(F),D=function e(t){var o=t.title,r=t.category,a=t.id,n=t.cover,i=t.previewLink;Object(h.a)(this,e),Object.assign(this,{title:o,category:r,id:a,cover:n,previewLink:i})},I=function(e){function t(){var e,o;Object(h.a)(this,t);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={categorizedBooks:[new D({title:"Harry Potter and the Philosopher's Stone",category:"currently reading",id:"wrOQLV6xB-wC",cover:P.a,previewLink:"http://books.google.com.eg/books?id=39iYWTb6n6cC&dq=intitle:harry+potter+and+the&hl=&cd=8&source=gbs_api"}),new D({title:"Harry Potter and the Chamber of Secrets",category:"currently reading",id:"0sPVBQAAQBAJ",cover:T.a,previewLink:"http://books.google.com.eg/books?id=hkK0GgAACAAJ&dq=intitle:harry+potter+and+the+chamber&hl=&cd=5&source=gbs_api"}),new D({title:"Harry Potter and the Prisoner of Azkaban",category:"want to read",id:"rx6lswEACAAJ",cover:J.a,previewLink:"http://books.google.com.eg/books?id=rx6lswEACAAJ&dq=intitle:harry+potter+and+the+pris&hl=&cd=1&source=gbs_api"}),new D({title:"Harry Potter and the Goblet of Fire",category:"want to read",id:"KKFTfEQ8bRAC",cover:z.a,previewLink:"http://books.google.com.eg/books?id=KKFTfEQ8bRAC&dq=intitle:harry+potter+and+the+goble&hl=&cd=1&source=gbs_api"}),new D({title:"Harry Potter and the Order of the Phoenix",category:"read",id:"JJjgBwAAQBAJ",cover:_.a,previewLink:"https://books.google.com/books/about/Harry_Potter_and_the_Order_of_the_Phoeni.html?hl=&id=JJjgBwAAQBAJ"}),new D({title:"Harry Potter and the Half-Blood Prince",category:"read",id:"J-EUBQAAQBAJ",cover:H.a,previewLink:"http://books.google.com.eg/books?id=8Sr_uQEACAAJ&dq=intitle:harry+potter+and+the+half&hl=&cd=3&source=gbs_api"}),new D({title:"Harry Potter and the Deathly Hallows",category:"read",id:"7pvVBQAAQBAJ",cover:q.a,previewLink:"http://books.google.com.eg/books?id=m-IoCQAAQBAJ&pg=PP1&dq=intitle:harry+potter+and+the+death&hl=&cd=9&source=gbs_api"})],searchResultingBooks:[]},o.addToBookcase=function(e,t){var r=o.state.categorizedBooks.slice(),a=Object.assign({},e);a.category=t,r.push(a);var n=o.state.searchResultingBooks.slice();n.forEach(function(o){o.id===e.id&&(o.category=t)}),o.setState({categorizedBooks:r,searchResultingBooks:n})},o.removeBook=function(e){var t=o.state.searchResultingBooks.slice();t.forEach(function(t){t.id===e&&(t.category="")}),o.setState(function(o){return{categorizedBooks:o.categorizedBooks.filter(function(t){return t.id!==e}),searchResultingBooks:t}})},o.changeCategory=function(e,t){var r=o.state.categorizedBooks.slice();r.filter(function(t){return t.id===e})[0].category=t,o.setState({categorizedBooks:r})},o.updateSearchBooks=function(e,t){var r=o.state.categorizedBooks;window.fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t,":").concat(e,"&maxResults=20&country=EG&key=AIzaSyCsJSEMz4agUsQkaJ5W8CZ6prwR0_WPLgY")).then(function(e){return e.json()}).then(function(t){var a=function(){var o=t.items?t.items:[];return""===e?[]:o.map(function(e){var t=e.volumeInfo,o=t.title,r=t.previewLink,a=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:null,n=e.id;return new D({title:o,id:n,cover:a,previewLink:r})}).filter(function(e){return e.cover})}();a.forEach(function(e){r.forEach(function(t){e.id===t.id&&(e.category=t.category)})}),o.setState({searchResultingBooks:a})})},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.categorizedBooks,o=e.searchResultingBooks,r=this.addToBookcase,n=this.removeBook,i=this.changeCategory,c=this.updateSearchBooks;return a.a.createElement("div",{id:"App"},a.a.createElement(g.a,{exact:!0,path:"/",render:function(){return a.a.createElement(C,{categorizedBooks:t,removeBook:n,changeCategory:i})}}),a.a.createElement(g.a,{path:"/add",render:function(){return a.a.createElement(L,{categorizedBooks:t,searchResultingBooks:o,addToBookcase:r,removeBook:n,changeCategory:i,updateSearchBooks:c})}}))}}]),t}(r.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(c.a,{basename:"/book-shelves"},a.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/book-shelves",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/book-shelves","/service-worker.js");K?(function(e,t){fetch(e).then(function(o){var r=o.headers.get("content-type");404===o.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):U(t,e)})}}()}],[[25,2,1]]]);
//# sourceMappingURL=main.970cb1c1.chunk.js.map