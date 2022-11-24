import { listAll, getStorage, ref, getDownloadURL }
    from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";

import { deleteObject }
    from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
const storage = getStorage();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var vCancelConfirm = document.getElementById("btn-cancel-confirm");

var vOkConfirm = document.getElementById("btn-ok-confirm")
// Create a reference under which you want to list
const listRef = ref(storage, 'image');

var vBg = document.getElementById("show-img")
var vLoading = document.querySelector(".lds-heart");

// Find all the prefixes and items.

listAll(listRef)
    .then((res) => {
        // res.prefixes.forEach((folderRef) => {
        //     // All the prefixes under listRef.
        //     // You may call listAll() recursively on them.

        // });
        if(res.length == 0){
            return 0;
        }
        res.items.forEach((itemRef) => {

            const a = getDownloadURL(itemRef)

            a.then((url) => {

                //console.log(url)
                let gridMedia = document.getElementById("show-img")

                const vNameImg = itemRef.name;
                const vDiv = document.createElement('div')
                vDiv.className = 'vDiv'
                vDiv.innerHTML = `<i class="fas fa-times-circle icon-delete"></i><img alt=${itemRef.name} src=${url}>`
                gridMedia.appendChild(vDiv)
                vLoading.style.display = "none";

                let vIconDelete = document.querySelectorAll('.icon-delete');
                vIconDelete.forEach(function (elem) {
                    // elem.addEventListener("click", function () {
                    //     let vImg = this.nextSibling;
                    //     let vSrc = vImg.getAttribute('alt')
                    //     //console.log(vSrc)
                    //     // Create a reference to the file to delete
                    //     const desertRef = ref(storage, "image/" + vSrc);
                    //     // Delete the file
                    //     deleteObject(desertRef).then(() => {
                    //         confirm('Delete IMG : ' + vSrc + " ???")
                    //         window.location.reload();
                    //         // File deleted successfully
                    //     }).catch((error) => {
                    //         // Uh-oh, an error occurred!
                    //     });

                    // });
                    elem.addEventListener("click", function () {
                        modal.style.display = "block";
                        let vImg = this.nextSibling;
                        let vSrc = vImg.getAttribute('alt');
                        vOkConfirm.onclick = function () {
                            console.log(vNameImg);
                            // Create a reference to the file to delete
                            const desertRef = ref(storage, "image/" + vNameImg);
                            // Delete the file
                            deleteObject(desertRef).then(() => {
                                //confirm('Delete IMG : ' + vSrc + " ???")
                                window.location.reload();
                                // File deleted successfully
                            }).catch((error) => {
                                // Uh-oh, an error occurred!
                            });
                            modal.style.display = "none";
                        }
                    });
                });

            })

        });
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
//nút cancel confirm
vCancelConfirm.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


