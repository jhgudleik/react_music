import './Main.css';
import React from 'react';
import MusicList from '../components/MusicList';
import Search from '../components/Search';


class Main extends React.Component 
{
    state = {
        musix: []
    };
    componentDidMount() {
        fetch('https://itunes.apple.com/search?term=the+beatles&entity=album&limit=5') 
            .then(response => response.json())
            .then(data => this.setState({ musix: data.results }));
    }
    searchMusic = (searchTerm) => {
        fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=album&limit=5`)
            .then(response => response.json())
            .then(data => this.setState({ musix: data.results }));
    }
    render() {
        const { musix } = this.state;
        return (
            <div className="main">
                <Search searchMusic={this.searchMusic} />
                {
                musix == null ? <h3>Error...</h3> : musix.length ? 
                    <MusicList musix={musix} />
                 : 
                    <h3>Loading...</h3>
                
            }
            </div>
        );
    }
}
export default Main;
