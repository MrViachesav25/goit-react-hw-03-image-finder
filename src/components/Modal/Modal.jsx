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
        const { tag, largeImageURL } = this.props;
        return (
            <div className="Overlay">
                <div className="Modal">
                    <img src={largeImageURL} alt={tag}/>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired
}