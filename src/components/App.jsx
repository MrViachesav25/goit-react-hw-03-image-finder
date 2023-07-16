import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import Button from './Button';

import { getImages, perPage } from './Service/getImages';
export default class App extends Component {
  state = {
    searchValue: '',
    images: [],
    totalHits: 0,
    page: 1,
    totalPages: 0,
    isLoading: false,
    error: null,
  }

  handleSubmit = query => {
    console.log(query);
    if(this.state.searchValue !== query) {
      this.setState({ 
        searchValue: query, 
        images: [],
        page: 1, 
        totalHits: 0,
      });
    }
  };

  addPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  destructData = data => {
    return data.map(({ id, tags, webformatURL, largeImageURL }) => {
      return { id, tags, webformatURL, largeImageURL };
    });
  }
  takeImages = async () => {
    try {
      this.setState({ isLoading: true });
      
      const { searchValue, page } = this.state;
      const data = await getImages(searchValue, page);
      if (data.data.hits.length && page === 1 ) {
        toast.success(<span>Excellent! We found {data.data.totalHits} images</span>, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if(!data.data.hits.length) {
        return toast.error(<span>Oops! We didn't find any image, my friend!</span>, {
          position: toast.POSITION.TOP_LEFT
        });
      }
      if(!data.data.hits.length || data.data.hits.length < 12);
      
      const photos = this.destructData(data.data.hits);
      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
        totalHits: data.data.totalHits,
        totalPages: Math.trunc(data.totalHits / perPage),
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.takeImages();
    }
  }

  render() {
    const { searchValue, images, totalHits, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}/>
        {images.length > 0 && <ImageGallery
          images={images}
          searchValue={searchValue}
          totalHits={totalHits} />}
        {isLoading && <Loader/>}
       {images.length > 0 && <Button onClick={this.addPage}/>} 
        <ToastContainer />
      </>
    )
  }
};
