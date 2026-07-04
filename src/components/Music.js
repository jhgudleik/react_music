import "./Music.css";

function Music(props) {
  const {
    artworkUrl100,
    collectionName,
    artistName,
    copyright,
    primaryGenreName
  } = props;

  return (
    <div className="card">
      <img src={artworkUrl100} alt={collectionName} className="card-image" />

      <div className="card-content">
        <h3>{collectionName} <br />
            {artistName}</h3>
      </div>
    </div>
  );
}

export default Music;

