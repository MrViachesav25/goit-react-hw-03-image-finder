import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Modal extends Component {
    handleKeyDown = event => {
        if(event.code === 'Escape') {
            this.props.onCloseModal();
        }
    };
    handleOverlayClick = event => {
        if(event.currentTarget === event.target) {
            this.props.onCloseModal();
        }
    };
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        const { tags, largeImageURL } = this.props;
        return (
            <div className="Overlay" onClick={this.handleOverlayClick}>
                <div className="Modal">
                    <img src={largeImageURL} alt={tags}/>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired
}