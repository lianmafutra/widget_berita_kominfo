
let body3 = document.getElementById("widget-beritaxyz");
body3.innerHTML += `<div class="widget-head23213123">
   <h1 class="widget-title">Berita Kota Jambi</h1>
</div>
<div class="widget-body232323">
   <ul id="berita2222" class="widget-list2323">

   </ul>
</div>`;
var cssId = 'myCss'; // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)) {
   var head = document.getElementsByTagName('head')[0];
   var link = document.createElement('link');
   link.id = cssId;
   link.rel = 'stylesheet';
   link.type = 'text/css';
   link.href = 'https://appsikoja.jambikota.go.id/widget-berita/style.css';
   link.media = 'all';
   head.appendChild(link);
}
let berita = document.getElementById("berita2222");

let isi = '';
fetch('https://jambikota.go.id/get/news',  {
   method: "GET", 
   mode: 'cors',
   headers: {
       'Content-Type': 'application/json',
   }
})
   .then((response) => response.json())
   .then((data) => {
      data.data.forEach(item => {
         isi += `<a target="_blank"  href="https://jambikota.go.id/content/${item.id}"><article class="card231212 shadow curve">
           <div>
             <img class='img_berita222' src="https://jambikota.go.id/images/news/thumbnail/${item.coverThumbnail}" alt="image">
           </div>
     
           <div>
             <p style="margin-left: 15px;
     text-decoration: none!important;
    color: #171717!important;
   " ><strong>${item.title}</strong></p>
   <div>
     <img class="ic_date" src="https://appsikoja.jambikota.go.id/img/date_vector.svg">
<p><span class="bold">${item.publishDate}</span></p>
</div>
            
           </div>
         </article></a>`;
      })
      berita.innerHTML = isi
   })
   .catch(error => {

   });