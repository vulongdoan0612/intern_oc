import '../assets/css/Main.css'
import UploadSong from "../components/UploadSong/UploadSong"
function UploadPage() {
  return (
      <div className="constainer">
          <div className='title'>Upload your song</div>
          <UploadSong/>
      </div>
  )
}

export default UploadPage