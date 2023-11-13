// image gallery
// image gallery
const filterContainer=document.querySelector(".gallery-filter");
const galleryItems=document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click",(event)=>{
    if(event.target.classList.contains("filter-item")){
        // deactivating existing filter
        filterContainer.querySelector(".active").classList.remove("active");
          // activating existing filter
          event.target.classList.add("active");
          const filterValue=event.target.getAttribute("data-filter");
          galleryItems.forEach(item)=>{
            if(item.classList.contains(filterValue) || filterValue==='all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("hide");
                item.classList.add("show"); 
            }
          }
    }
});

// mode change
const toggle=document.getElementById("icon");
const body=document.querySelector("body");

toggle.addEventListener('click',funtion{
    this.classList.toggle();
    if(this.classList.toggle)
})