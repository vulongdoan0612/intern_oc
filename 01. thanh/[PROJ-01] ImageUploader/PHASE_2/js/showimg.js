import { listAll, getStorage, ref, getDownloadURL }
    from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";

import { deleteObject }
    from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
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

            const a = getDownloadURL(itemRef)

            a.then((url) => {

                //console.log(url)
                let gridMedia = document.getElementById("show-img")

                const vDiv = document.createElement('div')
                vDiv.className = 'vDiv'
                vDiv.innerHTML = `<i class="fas fa-times-circle icon-delete"></i><img alt=${itemRef.name} src=${url}>`
                gridMedia.appendChild(vDiv)

                let vIconDelete = document.querySelectorAll('.icon-delete');
                vIconDelete.forEach(function (elem) {
                    elem.addEventListener("click", function () {
                        let vImg = this.nextSibling;
                        let vSrc = vImg.getAttribute('alt')
                        console.log(vSrc)
                        // Create a reference to the file to delete
                        const desertRef = ref(storage,"image/" + vSrc);
                        // Delete the file
                        deleteObject(desertRef).then(() => {
                            confirm('Delete IMG : ' + vSrc + " ???" )
                            window.location.reload();
                            // File deleted successfully
                        }).catch((error) => {
                            // Uh-oh, an error occurred!
                        });

                    });
                });
            })

        });
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });


