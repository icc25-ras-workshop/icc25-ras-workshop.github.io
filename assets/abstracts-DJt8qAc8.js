import"./main-DGwr9tLj.js";const s=`<div class="flex items-start justify-between mb-3">
  <div class="flex-1">
    <div class="flex items-center">
      <span
        id="index"
        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white text-sm font-bold mr-3 flex-shrink-0"
      >
      </span>
      <h3
        class="text-xl font-semibold text-slate-900 group-hover:text-sky-700 transition-colors"
      >
      </h3>
    </div>
  </div>
  <span
    id="pdf_badge"
    class="items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 ml-3 hidden"
  >
    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path
        fill-rule="evenodd"
        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
        clip-rule="evenodd"
      />
    </svg>
    PDF
  </span>
</div>

<div class="ml-11 flex items-start text-slate-600">
  <svg
    class="w-5 h-5 mr-2 text-slate-400 flex-shrink-0 mt-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
    />
  </svg>
  <p class="text-sm leading-relaxed"></p>
</div>
`,i=[{id:1,title:"Adaptive Tracking Control of 2-DoF Helicopter under State and Input Constraints with Verifiable Feasibility",authors:["Poulomee Ghosh","Shubhendu Bhasin"],pdf:"https://openreview.net/forum?id=6jNeV7CiLn"},{id:2,title:"Soft Actor Critic Based Adaptive PID Control for Energy Efficient Legged Robot Locomotion",authors:["Prochiyamaan Shri Deka","Bisal Prasad","Shwetangshu Biswas","Amandip Dutta","Ved Santosh Narsekar","Koena Mukherjee"],pdf:"https://openreview.net/forum?id=qbJP0QAlsK"},{id:3,title:"Sample Complexity of Model-Free Policy Iteration for the Linear Quadratic Regulator",authors:["Vijayanand Digge","Gianluca Bianchin"],pdf:"https://openreview.net/forum?id=p2h1jsuA5w"},{id:4,title:"Safe Human-Robot Interaction using MPC",authors:["Chayan Kumar Paul","Bhabani Shankar Dey","Indra Narayan Kar"],pdf:"https://openreview.net/forum?id=Rhe2EAuzov"},{id:5,title:"Can AI Learn to Play like a Pro?: A Case Study on using Transformers for StarCraft II",authors:["Prannoy Namala","Jeffrey W. Herrmann"],pdf:"https://openreview.net/forum?id=LZBtYnWmYE"},{id:6,title:"PMP-NMPC for Quadrotor Landing Under Learned Downwash Disturbances",authors:["Pratik Mukherjee"],pdf:"https://openreview.net/forum?id=DlDSx6cVNw"},{id:7,title:"Instruct2Subtask: A Language Parsing Framework for Sequential Robotic Manipulation",authors:["Tribikram Dhar","Rebanta Dey","Pandya Naisarg Jayantkumar","Samrat Dutta"],pdf:"https://openreview.net/forum?id=j78YPxJ3ki"},{id:8,title:"OpenVLM-Nav: Training-Free Zero-Shot Object-Goal Navigation via Vision-Language Guidance",authors:["Athira Krishnan R","Swapnil Bag","Sumohana S. Channappayya"],pdf:"https://openreview.net/forum?id=NzYQd6TLW2"},{id:9,title:"A Distributed ESP32-ROS Architecture for Real-Time EKF-SLAM on Low-Cost Mobile Robots",authors:["Soumyajeet Mahapatra","Asim Kr Naskar"],pdf:"https://openreview.net/forum?id=TLkQYWXOsG"},{id:10,title:"Kolmogorov–Arnold Controllers: Toward Smooth and Safer Embedded Policies",authors:["Swarnava Dey"],pdf:"https://openreview.net/forum?id=Ts7VxDbRyG"},{id:11,title:"Hybrid Learning-based Control for Reliable Robotic Arm Manipulation",authors:["Keya Sinha","Mandar Joshi","Avani Baranwal","Agniva Banerjee","Arijit Sen"],pdf:"https://openreview.net/forum?id=jEOGrUrdli"},{id:12,title:"Navigating with Less: Reinforcement Learning for UGVs Under Sparse LiDAR Inputs",authors:["Pragati Nayak","Mayank Srivastava","Harshit Agnihotri","Agniva Banerjee","Arijit Sen"],pdf:"https://openreview.net/forum?id=31kGZSzDWs"},{id:13,title:"Learning Goal-Following Locomotion Controllers for Humanoids using Demonstration and Reinforcement Learning",authors:["Kishor Kumar","Kameshwar Rao","Somdeb Saha","Vighnesh Vatsal","Kaushik Das"],pdf:"https://openreview.net/forum?id=r0xwZWjLEi"}];function d(){const e=document.querySelector(".abstracts-list"),n=document.querySelectorAll(".loading-placeholder"),t=document.querySelector(".empty-state");if(e){if(n.forEach(a=>a.remove()),!i||i.length===0){h();return}t?.classList.add("hidden"),e.innerHTML="",i.forEach((a,r)=>{const o=l(a,r);e.appendChild(o)})}}function l(e,n){const t=document.createElement("article");t.className="abstract-item bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl hover:border-sky-300 transition-all duration-300 cursor-pointer",t.style.animationDelay=`${n*.05}s`;const a=u(e.authors);if(t.innerHTML=s,e.pdf){const r=t.querySelector("#pdf_badge");r.classList.remove("hidden"),r.classList.add("inline-flex")}return t.querySelector("h3").innerText=e.title,t.querySelector("#index").innerText=`${n+1}`,t.querySelector("p").innerText=a,e.pdf&&(t.addEventListener("click",()=>{window.open(e.pdf,"_blank")}),t.classList.add("hover:bg-sky-50")),t}function u(e){if(!e||e.length===0)return"Anonymous";if(e.length===1)return e[0];if(e.length===2)return e.join(" and ");const n=e[e.length-1];return`${e.slice(0,-1).join(", ")}, and ${n}`}function h(){const e=document.querySelector(".empty-state");document.querySelectorAll(".loading-placeholder").forEach(t=>t.remove()),e?.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",d);
