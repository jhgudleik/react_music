import './Main.css';
import React from 'react';
import MusicList from '../components/MusicList';

class Main extends React.Component 
{
    state = {
        musix: []
    };
    componentDidMount() {
        fetch('https://itunes.apple.com/search?term=the+beatles&entity=album&limit=5') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => this.setState({ musix: data.results }));
    }

    render() {
        const { musix } = this.state;
        return (
            <div className="main">{
                musix.length ? (
                    <MusicList musix={musix} />
                ) : (
                    <h3>Loading...</h3>
                )
            }
            </div>
        );
    }
}
export default Main;
