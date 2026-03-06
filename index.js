import{a as f,S as d,i as c}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="54908313-686938f30eb04142f9ec31b4f";function y(n){return f.get(`${p}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(n){const o=n.map(t=>`
            <li class="gallery-item">
                <div class="image-card">
                    <a href="${t.largeImageURL}">
                        <img src="${t.webformatURL}" alt="${t.tags}">
                    </a>
                

                    <div class="info">
                        <p><b>Likes:</b> ${t.likes}</p>
                        <p><b>Views:</b> ${t.views}</p>
                        <p><b>Comments:</b> ${t.comments}</p>
                        <p><b>Downloads:</b> ${t.downloads}</p>
                    </div>
                </div>
            </li>
`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){u.style.display="block"}function v(){u.style.display="none"}const i=document.querySelector(".form");i.addEventListener("submit",n=>{n.preventDefault();const o=i.elements["search-text"].value.trim();o!==""&&(b(),L(),y(o).then(t=>{t.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(t.hits)}).catch(()=>{c.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{v(),i.reset()}))});
//# sourceMappingURL=index.js.map
