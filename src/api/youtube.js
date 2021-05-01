import axios from 'axios'

const KEY = 'AIzaSyDAk22ErWW2__7J657mbrQJC2euzgEuO1o'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key:KEY
  }
})
