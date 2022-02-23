import App from 'App';
import Modal from 'react-modal/lib/components/Modal';

export default function GifModal({ isModalOpen, onRequestClose, selectedGif }) {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
    >
      <div className="gif-modal">
        <img src={selectedGif.images.original.url} alt="gif" />
        <p>
          <strong>Source:</strong>{' '}
          <a href={selectedGif.source}>{selectedGif.source}</a>
        </p>
        <p>
          <strong>Rating:</strong> {selectedGif.rating}
        </p>

        <button onClick={onRequestClose}>close</button>
      </div>
    </Modal>
  );
}
