export default function randomGoblin(){let n,t=Math.round(15*Math.random());const o=document.querySelector(".goblin"),e=document.getElementsByClassName("hole");for(let t=0;t<e.length;t+=1)e[t].classList.contains("goblin")&&(n=t);return n===t&&(t=Math.round(15*Math.random())),null!=o&&(o.classList.remove("goblin"),e[t].classList.add("goblin")),t}