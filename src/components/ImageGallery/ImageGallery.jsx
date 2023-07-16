
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Name from 'components/Name';


const ImageGallery = ({ images, searchValue, totalHits }) => {
  return (
    <>
        <Name searchValue={searchValue} totalHits={totalHits}></Name>
        <div className="Box">
            <ul className="ImageGallery">
            {images.map(image => (
                <ImageGalleryItem
                key={image.id}
                image={image}
                />
            ))}
            </ul> 
        </div>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  searchValue: PropTypes.string.isRequired,
  totalHits: PropTypes.number,
};

export default ImageGallery;