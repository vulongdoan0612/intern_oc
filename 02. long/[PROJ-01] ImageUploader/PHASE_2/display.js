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

            const imgs = document.createElement('img')
            imgs.src = url
            gridMedia.appendChild(imgs)
        })
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
});