(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){e.exports=r.p+"static/media/hp1.9d5cdaf7.jpg"},function(e,t,r){e.exports=r.p+"static/media/hp2.6c46e0ad.jpg"},function(e,t,r){e.exports=r.p+"static/media/hp3.ca7c3819.jpg"},function(e,t,r){e.exports=r.p+"static/media/hp4.d00f8fb6.jpg"},function(e,t,r){e.exports=r.p+"static/media/hp5.a194e3e7.jpg"},function(e,t,r){e.exports=r.p+"static/media/hp6.503c6ee7.png"},function(e,t,r){e.exports=r.p+"static/media/hp7.0041fe33.jpg"},,function(e,t,r){e.exports=r(35)},,,,,function(e,t,r){},,function(e,t,r){},,,,,,function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(13),i=r.n(n),c=(r(27),r(29),r(37)),l=r(6),s=r(9),u=r(7),h=r(10),d=r(5),g=r(38),p=r(36),y=function(e,t){var r=document.createElement("div");return r.style[e]=t,r.style[e]===t},m=function(e){return e in document.body.style},f=function(e){function t(){var e,r;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={x:6.53,y:10,z:2},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.category,r=this.props,a=r.title,n=r.cover,i=r.previewLink,c=!!t,l=c?"move":"add",s=["currently reading","want to read","read"],u=c?s.filter(function(e){return e!==t}):s,h=c?"Choose another category to move this book to":"Choose a category to add this book to",d=c?this.props.changeCategory:this.props.addToBookcase;return y("perspective","400px")&&y("transform-style","preserve-3d")&&y("transform","rotateY(-180deg)")&&m("perspective")&&m("transform-style")&&m("transform")?(console.log(1),e=o.a.createElement("div",{id:"three-d-book"},o.a.createElement("img",{className:"face",id:"front",src:n,alt:a}),o.a.createElement("div",{className:"face",id:"back",role:"presentation"}),o.a.createElement("div",{className:"face",id:"top",role:"presentation"}),o.a.createElement("div",{className:"face",id:"bottom",role:"presentation"}),o.a.createElement("div",{className:"face",id:"right",role:"presentation"}),o.a.createElement("div",{className:"face",id:"left",role:"presentation"}))):e=o.a.createElement("img",{className:"cover",src:n,alt:a}),o.a.createElement("li",{className:"book"},o.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"preview-link",title:"Click to open a preview on a new window"},e),c&&o.a.createElement("button",{className:"remove",type:"button",onClick:this.props.removeBook},o.a.createElement("abbr",{title:"Remove"},"\u292b"))," ",o.a.createElement("select",{value:t,className:"category-selection","aria-label":h,onChange:function(e){return d(e.target.value)},style:{width:c?"65px":"55px",left:c?"21.26px":"26.26px"}},o.a.createElement("option",null,l," to--")," ",u.map(function(e){return o.a.createElement("option",{key:e},e)})))}}]),t}(a.Component),v=function(e){var t=e.categoryBooks.map(function(t){var r=t.title,a=t.category,n=t.id,i=t.cover,c=t.previewLink;return o.a.createElement(f,{key:n,title:r,category:a,cover:i,previewLink:c,removeBook:function(){return e.removeBook(t.id)},changeCategory:function(r){return e.changeCategory(t.id,r)}})}),r=e.id,a=e.title;return o.a.createElement("section",{id:r,className:"category",role:"region","aria-labelledby":e.id+"-heading"},o.a.createElement("h2",{id:e.id+"-heading"},a),o.a.createElement("ul",null,t))},k=function e(t,r){Object(d.a)(this,e),this.id=t,this.title=r},b={currentlyReading:new k("currently-reading","Currently Reading"),wantToRead:new k("want-to-read","Want to Read"),read:new k("read","Read")},w=function(e){var t=e.categorizedBooks,r=t.filter(function(e){return"currently reading"===e.category}),a=t.filter(function(e){return"want to read"===e.category}),n=t.filter(function(e){return"read"===e.category});return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{categoryBooks:r,removeBook:e.removeBook,changeCategory:e.changeCategory,id:b.currentlyReading.id,title:b.currentlyReading.title}),o.a.createElement("hr",null),o.a.createElement(v,{categoryBooks:a,removeBook:e.removeBook,changeCategory:e.changeCategory,id:b.wantToRead.id,title:b.wantToRead.title}),o.a.createElement("hr",null),o.a.createElement(v,{categoryBooks:n,removeBook:e.removeBook,changeCategory:e.changeCategory,id:b.read.id,title:b.read.title}))},E=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"main-header",role:"banner"},o.a.createElement("h1",null,"Book Shelves"))," ",o.a.createElement("main",{role:"main"},o.a.createElement(w,{categorizedBooks:e.categorizedBooks,removeBook:e.removeBook,changeCategory:e.changeCategory}),o.a.createElement(p.a,{id:"add-link",to:"/add"},"Add"))," ")},B=function(e){return o.a.createElement("form",{id:"search-form"},o.a.createElement("p",null,"Search for a book by its ",o.a.createElement("b",null,"title")," or ",o.a.createElement("b",null,"author name")," to add to your bookcase."),o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Search by"),o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"title-search"},"Book title: "),o.a.createElement("input",{type:"search",id:"title-search",value:e.titleQuery,onChange:function(t){return e.onTitleQueryChange(t.target.value)},disabled:e.titleSearchDisabled})),o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"author-search"},"Book author: "),o.a.createElement("input",{type:"search",id:"author-search",value:e.authorQuery,onChange:function(t){return e.onAuthorQueryChange(t.target.value)},disabled:e.authorSearchDisabled}))))},A=function(e){var t=e.searchResultingBooks.map(function(t){var r=t.title,a=t.category,n=t.id,i=t.cover,c=t.previewLink;return o.a.createElement(f,{key:n,title:r,cover:i,category:a,previewLink:c,addToBookcase:function(r){return e.addToBookcase(t,r)},removeBook:function(){return e.removeBook(t.id)},changeCategory:function(r){return e.changeCategory(t.id,r)}})});return o.a.createElement("ul",{id:"results"},t)},C=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"adding-page-header",role:"banner"},o.a.createElement(p.a,{id:"return-link",to:"/"},o.a.createElement("span",{role:"img","aria-label":"Left Arrow"},"\u2190")," Return to my bookcase"),o.a.createElement("h1",null,"Add to your Bookcase ",o.a.createElement("span",{role:"img","aria-label":"Book"},"\ud83d\udcd5"))),o.a.createElement(B,{titleQuery:e.titleQuery,authorQuery:e.authorQuery,titleSearchDisabled:e.titleSearchDisabled,authorSearchDisabled:e.authorSearchDisabled,onTitleQueryChange:e.onTitleQueryChange,onAuthorQueryChange:e.onAuthorQueryChange}),o.a.createElement(A,{searchResultingBooks:e.searchResultingBooks,addToBookcase:e.addToBookcase,removeBook:e.removeBook,changeCategory:e.changeCategory}))},Q=(r(33),r(14)),j=r.n(Q),S=r(15),R=r.n(S),T=r(16),O=r.n(T),L=r(17),x=r.n(L),J=r(18),P=r.n(J),z=r(19),_=r.n(z),D=r(20),N=r.n(D);"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),a=1;a<arguments.length;a++){var o=arguments[a];if(null!=o)for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r},writable:!0,configurable:!0}),function(){var e=Array.prototype.slice;try{e.call(document.documentElement)}catch(t){Array.prototype.slice=function(t,r){if(r="undefined"!==typeof r?r:this.length,"[object Array]"===Object.prototype.toString.call(this))return e.call(this,t,r);var a,o,n=[],i=this.length,c=t||0;c=c>=0?c:Math.max(0,i+c);var l="number"==typeof r?Math.min(r,i):i;if(r<0&&(l=i+r),(o=l-c)>0)if(n=new Array(o),this.charAt)for(a=0;a<o;a++)n[a]=this.charAt(c+a);else for(a=0;a<o;a++)n[a]=this[c+a];return n}}}(),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,r;if(null==this)throw new TypeError("this is null or not defined");var a=Object(this),o=a.length>>>0;if("function"!==typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),r=0;r<o;){var n;r in a&&(n=a[r],e.call(t,n,r,a)),r++}}),Array.prototype.filter||(Array.prototype.filter=function(e,t){if("Function"!==typeof e&&"function"!==typeof e||!this)throw new TypeError;var r=this.length>>>0,a=new Array(r),o=this,n=0,i=-1;if(void 0===t)for(;++i!==r;)i in this&&e(o[i],i,o)&&(a[n++]=o[i]);else for(;++i!==r;)i in this&&e.call(t,o[i],i,o)&&(a[n++]=o[i]);return a.length=n,a}),Array.prototype.map||(Array.prototype.map=function(e){var t,r,a;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),n=o.length>>>0;if("function"!==typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),r=new Array(n),a=0;a<n;){var i,c;a in o&&(i=o[a],c=e.call(t,i,a,o),r[a]=c),a++}return r});var H=function e(t){var r=t.title,a=t.category,o=t.id,n=t.cover,i=t.previewLink;Object(d.a)(this,e),this.title=r,this.category=a,this.id=o,this.cover=n,this.previewLink=i},F=function(e){function t(){var e,r;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(r=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={categorizedBooks:[new H({title:"Harry Potter and the Philosopher's Stone",category:"currently reading",id:"wrOQLV6xB-wC",cover:j.a,previewLink:"http://books.google.com.eg/books?id=39iYWTb6n6cC&dq=intitle:harry+potter+and+the&hl=&cd=8&source=gbs_api"}),new H({title:"Harry Potter and the Chamber of Secrets",category:"currently reading",id:"0sPVBQAAQBAJ",cover:R.a,previewLink:"http://books.google.com.eg/books?id=hkK0GgAACAAJ&dq=intitle:harry+potter+and+the+chamber&hl=&cd=5&source=gbs_api"}),new H({title:"Harry Potter and the Prisoner of Azkaban",category:"want to read",id:"rx6lswEACAAJ",cover:O.a,previewLink:"http://books.google.com.eg/books?id=rx6lswEACAAJ&dq=intitle:harry+potter+and+the+pris&hl=&cd=1&source=gbs_api"}),new H({title:"Harry Potter and the Goblet of Fire",category:"want to read",id:"KKFTfEQ8bRAC",cover:x.a,previewLink:"http://books.google.com.eg/books?id=KKFTfEQ8bRAC&dq=intitle:harry+potter+and+the+goble&hl=&cd=1&source=gbs_api"}),new H({title:"Harry Potter and the Order of the Phoenix",category:"read",id:"JJjgBwAAQBAJ",cover:P.a,previewLink:"https://books.google.com/books/about/Harry_Potter_and_the_Order_of_the_Phoeni.html?hl=&id=JJjgBwAAQBAJ"}),new H({title:"Harry Potter and the Half-Blood Prince",category:"read",id:"J-EUBQAAQBAJ",cover:_.a,previewLink:"http://books.google.com.eg/books?id=8Sr_uQEACAAJ&dq=intitle:harry+potter+and+the+half&hl=&cd=3&source=gbs_api"}),new H({title:"Harry Potter and the Deathly Hallows",category:"read",id:"7pvVBQAAQBAJ",cover:N.a,previewLink:"http://books.google.com.eg/books?id=m-IoCQAAQBAJ&pg=PP1&dq=intitle:harry+potter+and+the+death&hl=&cd=9&source=gbs_api"})],searchResultingBooks:[],titleQuery:"",authorQuery:"",titleSearchDisabled:!1,authorSearchDisabled:!1},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addToBookcase",value:function(e,t){var r=this.state.categorizedBooks.slice(),a=Object.assign({},e);a.category=t,r.push(a);var o=this.state.searchResultingBooks.slice();o.forEach(function(r){r.id===e.id&&(r.category=t)}),this.setState({categorizedBooks:r,searchResultingBooks:o})}},{key:"removeBook",value:function(e){var t=this.state.searchResultingBooks.slice();t.forEach(function(t){t.id===e&&(t.category="")}),this.setState(function(r){return{categorizedBooks:r.categorizedBooks.filter(function(t){return t.id!==e}),searchResultingBooks:t}})}},{key:"changeCategory",value:function(e,t){var r=this.state.categorizedBooks.slice();r.filter(function(t){return t.id===e})[0].category=t,this.setState({categorizedBooks:r})}},{key:"updateSearchBooks",value:function(e,t){var r=this,a=this.state.categorizedBooks;window.fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t,":").concat(e,"&maxResults=20&country=EG&key=AIzaSyCsJSEMz4agUsQkaJ5W8CZ6prwR0_WPLgY")).then(function(e){return e.json()}).then(function(t){var o=function(){var r=t.items?t.items:[];return""===e?[]:r.map(function(e){var t=e.volumeInfo,r=t.title,a=t.previewLink,o=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:null,n=e.id;return new H({title:r,id:n,cover:o,previewLink:a})}).filter(function(e){return e.cover})}();o.forEach(function(e){a.forEach(function(t){e.id===t.id&&(e.category=t.category)})}),r.setState({searchResultingBooks:o})})}},{key:"handleTitleQueryChange",value:function(e){this.setState({titleQuery:e,authorSearchDisabled:!!e});var t=e.split(" ").join("+").toLowerCase();this.updateSearchBooks(t,"intitle")}},{key:"handleAuthorQueryChange",value:function(e){this.setState({authorQuery:e,titleSearchDisabled:!!e});var t=e.split(" ").join("+").toLowerCase();this.updateSearchBooks(t,"inauthor")}},{key:"render",value:function(){var e=this,t=this.state.categorizedBooks,r=this.state.searchResultingBooks;return o.a.createElement("div",{id:"App"},o.a.createElement(g.a,{exact:!0,path:"/",render:function(){return o.a.createElement(E,{categorizedBooks:t,removeBook:function(t){return e.removeBook(t)},changeCategory:function(t,r){return e.changeCategory(t,r)}})}}),o.a.createElement(g.a,{path:"/add",render:function(){return o.a.createElement(C,{categorizedBooks:t,searchResultingBooks:r,titleQuery:e.state.titleQuery,authorQuery:e.state.authorQuery,titleSearchDisabled:e.state.titleSearchDisabled,authorSearchDisabled:e.state.authorSearchDisabled,onTitleQueryChange:function(t){return e.handleTitleQueryChange(t)},onAuthorQueryChange:function(t){return e.handleAuthorQueryChange(t)},addToBookcase:function(t,r){return e.addToBookcase(t,r)},removeBook:function(t){return e.removeBook(t)},changeCategory:function(t,r){return e.changeCategory(t,r)}})}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,{basename:"/book-shelves"},o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[22,2,1]]]);
//# sourceMappingURL=main.baa471c8.chunk.js.map