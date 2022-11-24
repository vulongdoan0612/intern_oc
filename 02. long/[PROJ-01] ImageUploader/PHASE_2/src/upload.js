import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL}
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"

let files = []
let FileReaders = []

const info = document.getElementById('info')
const imgPreview = document.getElementById('imgPreview')
const upprogress = document.getElementById('upprogress')
const upBtn = document.getElementById('upBtn')
const clearBtn = document.getElementById('clearBtn')
const btns = document.querySelector('.btns')
const input = document.getElementById('img-input')

input.onchange = e =>{

    // imgPreview.innerHTML=""

    files = e.target.files;
    let numOfFiles = 0;
    for (let i=0; i<files.length; i++) {
        // info.innerHTML += files[i].name + " "
        FileReaders[i] = new FileReader()
        console.log(FileReaders[i])
        FileReaders[i].onload = function() {
            const img = document.createElement('img')
            img.classList.add('imgs')
            img.src= FileReaders[i].result;
            imgPreview.append(img);
        }
        FileReaders[i].readAsDataURL(files[i])
        numOfFiles ++
    }
    info.innerHTML = numOfFiles + " files selected"

    btns.style.display="block"

}

// upload lên fisebase
const uploadProcess = async () => {
    if(files.length > 0) {
        for (var i = 0; i < files.length; i++) {
            let imgToUpload = files[i]
    
            const imgName = files[i].name
    
            const metaData = {
                contentType: imgToUpload.type
            }
    
            const storage = getStorage()
    
            const storageRef = sRef(storage, "image/" + imgName)
    
            const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metaData)
            const modal = document.querySelector(".modal")
            modal.classList.add("showModal")

            const okClick = () => {
                window.location.reload();
            }
            // window.onclick= okClick
            const okBtn = document.querySelector(".okBtn")
            okBtn.onclick = okClick
            UploadTask.on('state-changed', (snapshot) => {
                let progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                let progressF = progess.toFixed()
                const ok__ld = document.querySelector(".ok__ld")
                const ok__ss = document.querySelector(".ok__ss")
                // upprogress.innerHTML = "Upload " + progressF + " %";
                // ok__tt.innerHTML = "Upload " + progressF + " %";
                if (progess < 100){
                    ok__ld.innerHTML = "Uploading " + progressF + " %"
                }else {
                    ok__ld.innerHTML =""
                    ok__ss.innerHTML += imgName + `<span class="success"> uploaded</span>` + `<br>`      
                }

            },
                (error) => {
                    alert("error: image not uploaded")
                },
                () => {
                    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                        console.log(downloadURL)
                        // SaveURLtoFirestore(downloadURL)
                    })
                }
            );
        }
    } else {
        console.log("chua chon file")
    }
    
}


upBtn.onclick = uploadProcess

// clear
const clearImg = () => {
    window.location.reload();
}
clearBtn.onclick = clearImg



