import { Link } from "react-router-dom";
import { NewSongsStyled } from "./NewSong-styled";

function NewSongs({listSong, clickAudio}) {
    return ( 
        <NewSongsStyled>
          <div className="play-list">
            <div className="title">5 New Songs</div>
            {listSong.length > 0
              ? listSong.map((music, key = 0, index) => (
                  <div
                    // key={music.id}
                    key={key}
                    onClick={() => clickAudio(key)}
                    className="track"
                  >
                    <div className="track-img">
                      <img src={music.urlImage} />
                      <div className="modal-img">
                        <div className="hover-play">Play</div>
                      </div>
                    </div>


                    <div className="track-discr">
                      <Link to={"/song/" + music.id}>
                        <div className="track-name">{music.title}</div>
                      </Link>
                      <div className="track-author">{music.author}</div>
                      <div className="track-duration">{music.duration}</div>
                    </div>


                    
                  </div>
                ))
              : null}
          </div>
        </NewSongsStyled>
     );
}

export default NewSongs;