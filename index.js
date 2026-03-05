import{a as f,S as d,i as l}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="54908313-686938f30eb04142f9ec31b4f";function y(n){return f.get(`${m}?key=${p}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>o.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a");function g(n){const o=n.map(r=>`
            <li class="gallery-item">
                <a href="${r.largeImageURL}">
                    <img src="${r.webformatURL}" alt="${r.tags}">
                </a>

                <div class="info">
                    <p><b>Likes:</b> ${r.likes}</p>
                    <p><b>Views:</b> ${r.views}</p>
                    <p><b>Comments:</b> ${r.comments}</p>
                    <p><b>Downloads:</b> ${r.downloads}</p>
                </div>
            </li>
`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){u.style.display="block"}function $(){u.style.display="none"}const i=document.querySelector(".form");i.addEventListener("submit",n=>{n.preventDefault();const o=i.elements["search-text"].value.trim();o!==""&&(b(),L(),y(o).then(r=>{r.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.hits)}).catch(()=>{l.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{$(),i.reset()}))});
//# sourceMappingURL=index.js.map
