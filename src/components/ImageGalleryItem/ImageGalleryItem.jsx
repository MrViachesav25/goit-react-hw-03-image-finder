import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from 'components/Modal';

export default class ImageGalleryItem extends Component {
    state = {
        isOpen: false,
    };
    
    clickModal = () => {
        this.setState(({isOpen}) => ({
            isOpen: !isOpen,
        }))
    }

    render() {
        const {image: { tags, webformatURL, largeImageURL}} = this.props;
        const {isOpen} = this.state;
        return (
            <li className="ImageGalleryItem">
                <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} onClick={this.clickModal}/>
                {isOpen && (<Modal largeImageURL={largeImageURL} tags={tags} onCloseModal={this.clickModal}/>)}
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
};