import './Music.css';
import Music from './Music';

function MusicList(props) {
    const {musix} = props;
    return (
        <div className="musix">
            {musix.map(
                music => {
                    return <Music key={music.collectionId} {...music} />;
                }
            )}
        </div>
    );
}

export default MusicList;

