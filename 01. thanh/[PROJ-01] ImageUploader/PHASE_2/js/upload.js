import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
    from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"

import { getFirestore, doc, getDoc, setDoc, collection, addDoc }
    from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
const clouddb = getFirestore()


let files = []
const reader = new FileReader()

const vDivHandle = document.querySelector('.handle');
const exten = document.getElementById('name-img')
const imgPreview = document.getElementById('imgPreview')
const upprogress = document.getElementById('upprogress')
const upBtn = document.getElementById('upBtn')
const clearBtn = document.getElementById('clearBtn')
const btns = document.querySelector('.btn-handle')
const input = document.getElementById('inp-image')

vDivHandle.className = "displayBlock";

input.onchange = e => {
    files = e.target.files;
    upprogress.innerHTML = '';
    const extention = GetFileExt(files[0])
    const name = GetFileName(files[0]);

    vDivHandle.className = "displayBlock"

    exten.innerHTML = name + extention

    reader.readAsDataURL(files[0])

    btns.className = "displayBlock"
}

reader.onload = function () {
    imgPreview.src = reader.result
}


// chọn hình


const GetFileExt = (file) => {
    let temp = file.name.split('.')
    let ext = temp.slice((temp.length - 1), (temp.length))
    return '.' + ext[0]
}

const GetFileName = (file) => {
    let temp = file.name.split('.')
    let fname = temp.slice(0, -1).join('.')
    return fname
}

// upload lên fisebase
const uploadProcess = async () => {
    let imgToUpload = files[0]

    const imgName = exten.innerHTML

    const metaData = {
        contentType: imgToUpload.type
    }

    const storage = getStorage()

    const storageRef = sRef(storage, "image/" + imgName)

    const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metaData)

    UploadTask.on('state-changed', (snapshot) => {
        const progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        upprogress.innerHTML = "Upload " + progess + " %";
    },
        (error) => {
            alert("error: image not uploaded")
        },
        () => {
            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL)
                SaveURLtoFirestore(downloadURL)
            })
        }
    );
}


// Firestore database

async function SaveURLtoFirestore(url) {
    var name = GetFileName(files[0]);
    var ext = exten.innerHTML;

    var ref = doc(clouddb, "ImageLinks/" + name)

    await setDoc(ref, {
        ImageName: (name + ext),
        ImageURL: url
    })
}

upBtn.onclick = uploadProcess

//Nút cancel
clearBtn.addEventListener('click', function (e) {
    vDivHandle.className = "displayNone";
    exten.innerHTML = '';
    imgPreview.src = '';
    upprogress.innerHTML = '';
    input.innerHTML = '';
});

