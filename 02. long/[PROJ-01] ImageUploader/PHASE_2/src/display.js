import { listAll, getStorage, ref, getDownloadURL, deleteObject}
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"


const storage = getStorage();

const listRef = ref(storage, 'image');

listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
        // console.log("item-ref: " + itemRef)

        const a = getDownloadURL(itemRef)

        a.then((url) => {

            //display all files from firebase
            // console.log(url)
            let gridMedia = document.getElementById("gridMedia")

            const imgItem = document.createElement('div')
            imgItem.className="imgItem"
            imgItem.innerHTML = `<i class="delImg fa-solid fa-circle-xmark"></i><img src=${url}>`
            gridMedia.appendChild(imgItem)
            const loader = document.querySelector(".lds-dual-ring")
            loader.style.display="none"


            // delete file 
            const delImg = document.querySelectorAll('.imgItem .delImg')

            delImg.forEach((e) => {
              e.addEventListener('click', function(){
                  const sib = this.nextSibling;
                  const src = sib.getAttribute('src')
                  // console.log(src)

                  const storageRef = ref(storage, src)
                  const fileName = storageRef.name
                  console.log(fileName)

                  
                  const modal = document.querySelector(".modal")
                  const popDel = document.querySelector(".popDel")
                  const delBtn = document.querySelector(".delBtn")
                  const canBtn = document.querySelector(".canBtn")
                  modal.classList.add("showModal")

                  const cancelDelete = () => {
                    modal.classList.remove("showModal")
                  }
                  canBtn.addEventListener('click', cancelDelete)
                  modal.addEventListener('click', cancelDelete)
                  
                  popDel.addEventListener('click', (e)=>{
                    e.stopPropagation()
                  })

                  const deleteImg = () => {
                    const desertRef = ref(storage, 'image/'+fileName)
                    deleteObject(desertRef).then(() => {
                        window.location.reload();
                    }).catch((error) => {
                      console.log("co loi")
                    })   
                  }
                  delBtn.addEventListener('click', deleteImg)
              });
            });



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





