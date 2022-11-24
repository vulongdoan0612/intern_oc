import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
    from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"




let files = []
let FileReaders = []

const vDivHandle = document.querySelector('.handle');
const exten = document.getElementById('name-img')
const exten1 = document.getElementById('name-img1')
let imgPreview = document.getElementById('imgPreview')
const upprogress = document.getElementById('upprogress')
const upBtn = document.getElementById('upBtn')
const clearBtn = document.getElementById('clearBtn')
const btns = document.querySelector('.btn-handle')
const input = document.getElementById('inp-image')
const modal = document.getElementById("myModal1");

input.onchange = e => {
    imgPreview.innerHTML = '';
    input.innerHTML = '';
    vDivHandle.className = "displayBlock";
    files = e.target.files;
    for (let i = 0; i < files.length; i++) {

        FileReaders[i] = new FileReader()
        FileReaders[i].onload = function () {
            let img = document.createElement('img')
            img.width = 150
            img.height = 150
            img.classList.add('imgs')
            img.src = FileReaders[i].result;
            imgPreview.append(img);
        }

        FileReaders[i].readAsDataURL(files[i])
    }

    btns.className = "displayBlock";

}



// upload lên fisebase
const uploadProcess = async () => {
    modal.style.display = 'block';
    if (files.length == 0){
        console("Lỗi")
    }else {
        for (var i = 0; i < files.length; i++) {
            let imgToUpload = files[i]

            const imgName = files[i].name

            const metaData = {
                contentType: imgToUpload.type
            }

            const storage = getStorage()

            const storageRef = sRef(storage, "image/" + imgName)

            const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metaData)

            console.log(UploadTask)

            UploadTask.on('state-changed', (snapshot) => {
                const progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progess < 100){
                    exten.innerHTML += imgName + `<span class="status-color-uploading"> uploading</span>` + `<br>`
                }else if(progess == 100){
                    exten.innerHTML = ''
                    exten1.innerHTML += imgName + `<span class="status-color-success"> success</span>` + `<br>`      
                }
                //exten.innerHTML += imgName + " " + " Uploading " + progess + " %" + `<br>`
                // console.log(progess)
                // const vTen = document.createElement('p');
                // //vTen.innerHTML = imgName + "Uploading " + progess + " %"
                // vTen.innerHTML = imgName + UploadTask._state;
                // upprogress.append(vTen)
                // console.log(UploadTask)
            },
                (error) => {
                    alert("error: image not uploaded")
                },
                () => {
                    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {

                        SaveURLtoFirestore(downloadURL)
                    })
                }
            );
        }
    }
}


//Firestore database    
function SaveURLtoFirestore(url) {
    console.log(url);
}

upBtn.onclick = uploadProcess



//Nút cancel
clearBtn.addEventListener('click', function (e) {
    vDivHandle.className = "displayNone";
    exten.innerHTML = '';
    imgPreview.innerHTML = '';
    upprogress.innerHTML = '';
    input.innerHTML = '';
});

const vSpan = document.querySelector('.close')
// When the user clicks on <span> (x), close the modal
vSpan.onclick = function () {
    modal.style.display = "none";
    exten1.innerHTML = '';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        exten1.innerHTML = '';
    }
}
