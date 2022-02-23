import GifItem from 'components/GifItem';

export default function GifsList({ gifs, onGifSelect }) {
  return (
    <div className="gif-list">
      {gifs &&
        gifs.map(gif => (
          <GifItem onGifSelect={onGifSelect} key={gif.id} gif={gif} />
        ))}
    </div>
  );
}
