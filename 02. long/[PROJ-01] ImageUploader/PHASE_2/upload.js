import {getStorage, ref as sRef, uploadBytesResumable, getDownloadURL}
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"


var files = []
var reader = new FileReader()

var exten = document.getElementById('exten')
var imgPreview = document.getElementById('imgPreview')
var proglab = document.getElementById('upprogress')
var UpBtn = document.getElementById('upbtn')

var input = document.getElementById('img-input')

input.onchange = e => {
    files = e.target.files;

    var extention = GetFileExt(files[0])
    var name = GetFileName(files[0]);

    exten.innerHTML = name + extention

    reader.readAsDataURL(files[0])
}

reader.onload = function() {
    imgPreview.src = reader.result
}


// chọn hình


function GetFileExt(file) {
    var temp = file.name.split('.')
    var ext = temp.slice((temp.length - 1),(temp.length))
    return '.' + ext[0]
}

function GetFileName(file) {
    var temp = file.name.split('.')
    var fname = temp.slice(0,-1).join('.')
    return fname
}

// upload lên fisebase
async function UploadProcess() {
    var ImgToUpload = files[0] 
    
    var ImgName = exten.innerHTML

    const metaData = {
        contentType: ImgToUpload.type
    }

    const storage = getStorage()

    const stroageRef = sRef(storage, "image/"+ImgName)

    const UploadTask=uploadBytesResumable(stroageRef, ImgToUpload, metaData)

    UploadTask.on('state-changed', (snapshot) => {
        var progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        proglab.innerHTML = "Upload" + progess + "%";
    },
    (error) =>{
        alert("error: image not uploaded")
    },
    ()=> {
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
            console.log(downloadURL)
        })
    }
    );
}

UpBtn.onclick = UploadProcess