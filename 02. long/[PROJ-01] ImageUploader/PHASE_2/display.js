import { listAll, getStorage, ref, getDownloadURL}
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"


const storage = getStorage();


// Create a reference under which you want to list
const listRef = ref(storage, 'image');

// Find all the prefixes and items.

listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
        console.log("item-ref: " + itemRef)

        const a = getDownloadURL(itemRef)

        a.then((url) => {

            console.log(url)
            let gridMedia = document.getElementById("gridMedia")

            const imgItem = document.createElement('div')
            imgItem.className="imgItem"
            imgItem.innerHTML = `<img src=${url}>`
            gridMedia.appendChild(imgItem)



            //gallery

            const images = document.querySelectorAll('.imgItem img')
            const prevBtn = document.querySelector('.prevBtn')
            const nextBtn = document.querySelector('.nextBtn')
            const closeBtn = document.querySelector('.closeBtn')
            const galleryImg = document.querySelector('.innerGallery img')
            const gallery = document.querySelector('.gallery')

            let currentIndex = 0;

            images.forEach((item, index)=>{
                item.addEventListener('click', () => {
                    currentIndex = index
                    galleryImg.src = images[currentIndex].src
                    gallery.classList.add('showGallery')
                }) 
            })

            // close gallery
            closeBtn.addEventListener('click', () => {
              gallery.classList.remove('showGallery')
            })
            document.addEventListener('keydown', (e) => {
              gallery.classList.remove('showGallery')
            })

            // prev, next
            prevBtn.addEventListener('click', () => {
              if(currentIndex > 0) {
                currentIndex--
                galleryImg.src = images[currentIndex].src
                gallery.classList.add('showGallery')
              }
            })
            nextBtn.addEventListener('click', () => {
              if(currentIndex < images.length - 1) {
                currentIndex++
                galleryImg.src = images[currentIndex].src
                gallery.classList.add('showGallery')
              }
            })


        })
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
});