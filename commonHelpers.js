import{a as w,S as L,i as E}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();async function h(e,t){return(await w.get("https://pixabay.com/api/",{params:{key:"44402114-eddf09e8e038ad1f496236950",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}function b(e){return`<li class="gallery-item">
      <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" class="gallery-item-image"></a>
        <ul class="image-info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${e.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${e.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${e.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${e.downloads}</p>
          </li>
        </ul>
    </li>`}function f(e){return e.map(t=>b(t)).join("")}function c(e){e.classList.remove("visually-hidden")}function l(e){e.classList.add("visually-hidden")}const v="/goit-js-hw-12/assets/bi_x-octagon-06de2d57.svg",p=new L(".gallery a",{captionsData:"alt",captionsDelay:250}),o={formElem:document.querySelector(".search-form"),galleryElem:document.querySelector(".gallery"),galleryItem:document.querySelector("li"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let a,n,y;o.formElem.addEventListener("submit",B);async function B(e){if(e.preventDefault(),l(o.loadBtn),o.galleryElem.innerHTML="",n=o.formElem.elements.search.value.trim(),!!n){a=1,c(o.loader);try{const t=await h(n,a);if(!t.hits.length){u("Sorry, there are no images matching your search query. Please, try again!"),l(o.loader);return}const i=f(t.hits);o.galleryElem.innerHTML=i,y=Math.ceil(t.totalHits/15)}catch(t){u(t)}p.refresh(),l(o.loader),c(o.loadBtn),g()}}o.loadBtn.addEventListener("click",S);async function S(){l(o.loadBtn),c(o.loader),a+=1;try{const e=await h(n,a),t=f(e.hits);o.galleryElem.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}p.refresh(),l(o.loader),c(o.loadBtn),g(),q()}function u(e){E.show({message:e,messageColor:"white",backgroundColor:"#EF4040",iconUrl:v,maxWidth:"360px",position:"topRight",theme:"dark"})}function q(){const t=document.querySelector("li").getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}function g(){a>=y&&(l(o.loadBtn),l(o.loader),u("We're sorry, but you've reached the end of search results."))}
//# sourceMappingURL=commonHelpers.js.map
