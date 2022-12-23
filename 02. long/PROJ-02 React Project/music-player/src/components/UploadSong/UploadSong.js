import {StyledUploadSong} from './UploadSong-styed'
import React, { useState } from "react"
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { db, storage } from "../../firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { notificationSuccess } from "../../utils/Notification"

import '../../assets/css/Main.css'

function UploadSong() {
  // const [imgUrl, setImgUrl] = useState(null)
  const [image, setImage] = useState(null)
  const [mp3, setMp3] = useState(null)
  const [title, setTitle] = useState(null)
  const [author, setAuthor] = useState(null)
  const [lyrics, setLyrics] = useState(null)
  const [duration, setDuration] = useState(0)
  const navigate = useNavigate()
  async function handleUpload() {
    const file = image[0]
    const fileMp3 = mp3[0]
    addDoc(collection(db, "posts"), {
      title,
      lyrics,
    })
      .then(async (docum) => {
        if (file) {
          const storageRef = ref(storage, `files/${docum.id}`)
          const storageRefVideo = ref(storage, `videos/${docum.id}`)
          const mp3file = await uploadBytesResumable(storageRefVideo, fileMp3)
          const urlMp3 = await getDownloadURL(mp3file.ref)
          const imageUpload = await uploadBytesResumable(storageRef, file)
          const urlImage = await getDownloadURL(imageUpload.ref)
          await setDoc(doc(db, "posts", docum.id), {
            urlImage,
            title,
            author,
            lyrics,
            duration,
            id: Math.random().toString(),
            urlMp3,
            timestamp: Date.now(),
          })
        }
      }).then(() => {
        navigate('/')
        notificationSuccess("Đăng bài hát thành công")
      })
      .catch((err) => {
        console.log(err)
      });
  }
  return (
    <StyledUploadSong>
        <div className='inputs'>
          <div className="choose">
            <div>
              <div className='label'>Song image</div>
              <input
                className='choose-file'
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files)}
              />
            </div>
            <div>
              <div className='label'>File mp3</div>
              <input
                className='choose-file'
                type="file"
                accept="audio/mp3"
                onChange={(e) => setMp3(e.target.files)}
              />
            </div>
          </div>

          <div className='write'>
            <div>
              <div className='label'>Title</div>
              <input type="text" className='write-file' onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
              <div className='label'>Author</div>
              <input type="text" className='write-file' onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div>
              <div className='label'>Duration</div>
              <input type="text" className='write-file' onChange={(e) => setDuration(e.target.value)} />
            </div>
            <div>
              <div className='label'>Lyrics</div>
              <input type="text" className='write-file' onChange={(e) => setLyrics(e.target.value)} />
            </div>
          </div>
        </div>
        <button className='uploadBtn' onClick={handleUpload}>Upload</button>
      </StyledUploadSong>
  );
}

export default UploadSong;
