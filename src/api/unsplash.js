import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID cGmfytq9ptEDb-aH8LByusd3SdFNYRNQpzTwf0Jo5fI'
  }
})