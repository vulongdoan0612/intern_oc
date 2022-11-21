import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL}
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"

import { getFirestore, doc, setDoc }
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
const clouddb = getFirestore()


let files = []
let reader = new FileReader()

let exten = document.getElementById('exten')
let imgPreview = document.getElementById('imgPreview')
let upprogress = document.getElementById('upprogress')
let upBtn = document.getElementById('upBtn')
let clearBtn = document.getElementById('clearBtn')
let btns = document.querySelector('.btns')
let input = document.getElementById('img-input')

input.onchange = e =>{
    files = e.target.files;

    let extention = GetFileExt(files[0])
    let name = GetFileName(files[0]);

    exten.innerHTML = name + extention

    reader.readAsDataURL(files[0])

    btns.className = "displayBlock"
}

reader.onload = function() {
    imgPreview.src = reader.result
}



const  GetFileExt = (file)=>{
    let temp = file.name.split('.')
    let ext = temp.slice((temp.length - 1),(temp.length))
    return '.' + ext[0]
}

const GetFileName = (file)=>{
    let temp = file.name.split('.')
    let fname = temp.slice(0,-1).join('.')
    return fname
}

// upload lên fisebase
const uploadProcess = async () => {
    let imgToUpload = files[0] 
    
    let imgName = exten.innerHTML

    const metaData = {
        contentType: imgToUpload.type
    }

    const storage = getStorage()

    const storageRef = sRef(storage, "image/"+imgName)

    const UploadTask=uploadBytesResumable(storageRef, imgToUpload, metaData)

    UploadTask.on('state-changed', (snapshot) => {
        let progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        let progressF = progess.toFixed()
        upprogress.innerHTML = "Upload " + progressF + "%"
    },
    (error) =>{
        alert("error: image not uploaded")
    },
    ()=> {
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
            console.log(downloadURL)
            SaveURLtoFirestore(downloadURL)
        })
    }
    );
}

// Firestore database

const SaveURLtoFirestore = async (url) => {
            var name = GetFileName(files[0]);
            var ext = exten.innerHTML; 

            var ref = doc(clouddb, "ImageLinks/"+name)

            await setDoc(ref,{
                ImageName: (name+ext),
                ImageURL: url
            })
        }

upBtn.onclick = uploadProcess

// clear
const clearImg = () => {
    imgPreview.src = ""
    upprogress.innerHTML = ""
    exten.innerHTML = ""
    btns.className = "displayNone"
}
clearBtn.onclick = clearImg



