import{a as f,S as m,i}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="51522694-741a1cf8502b1e4019d28362b";async function g(o){return(await f.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.getElementById("loader"),h=new m(".gallery a");function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:d,downloads:u})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${s}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${t}</p>
        <p><b>Views</b> ${n}</p>
        <p><b>Comments</b> ${d}</p>
        <p><b>Downloads</b> ${u}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search term"});return}L(),w();try{const s=await g(r);s.hits.length?b(s.hits):i.info({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{i.error({title:"Error",message:"Something went wrong. Try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map
