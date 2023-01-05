import { db, storage } from "../../firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"




// function UploadSong() {
//     const [image, setImage] = useState(null)
//     const [mp3, setMp3] = useState(null)
//     const [title, setTitle] = useState(null)
//     const [author, setAuthor] = useState(null)
//     const [lyrics, setLyrics] = useState(null)
//     const [duration, setDuration] = useState(0)
//     async function handleUpload() {
//         const file = image[0]
//         const fileMp3 = mp3[0]
//         addDoc(collection(db, "posts"), {
//             title,
//             lyrics,
//         })
//         .then(async (docum) => {
//         if (file) {
//             const storageRef = ref(storage, `files/${docum.id}`)
//             const storageRefVideo = ref(storage, `videos/${docum.id}`)
//             const mp3file = await uploadBytesResumable(storageRefVideo, fileMp3)
//             const urlMp3 = await getDownloadURL(mp3file.ref)
//             const imageUpload = await uploadBytesResumable(storageRef, file)
//             const urlImage = await getDownloadURL(imageUpload.ref)
//             await setDoc(doc(db, "posts", docum.id), {
//             urlImage,
//             title,
//             author,
//             lyrics,
//             duration,
//             id: Math.random().toString(),
//             urlMp3,
//             timestamp: Date.now(),
//             })
//         }
//         }).then(() => {
//         navigate('/')
//         notificationSuccess("Đăng bài hát thành công")
//         })
//         .catch((err) => {
//         console.log(err)
//         });
//     }

// }

