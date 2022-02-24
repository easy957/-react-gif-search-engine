import axios from 'axios';
import GifModal from 'components/GifModal';
import GifsList from 'components/GifsList';
import SearchBar from 'components/SearchBar';
import debounce from 'lodash.debounce';
import { useState } from 'react';

const API_KEY = 'vKavkRdguuXeCYntO8nrouCa5TTXK3jl';

axios.defaults.baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=5`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  const [gifs, setGifs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSelectedGif, setCurrentSelectedGif] = useState(null);

  const fetchGifs = async query => {
    if (query === '') {
      return;
    }
    try {
      const { data } = await axios.get('', {
        params: { q: query },
      });
      setGifs(data.data);
    } catch (error) {}
  };

  const openModal = gif => {
    setIsModalOpen(true);
    setCurrentSelectedGif(gif);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentSelectedGif(null);
  };

  return (
    <div className="app">
      <SearchBar onQueryChange={debounce(fetchGifs, 500)} />
      <GifsList gifs={gifs} onGifSelect={openModal} />
      {isModalOpen && (
        <GifModal
          isModalOpen={isModalOpen}
          onRequestClose={closeModal}
          selectedGif={currentSelectedGif}
        />
      )}
    </div>
  );
}

export default App;
