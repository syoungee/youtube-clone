import axios from 'axios';

export default class FakeYoutubeClient {
  async search(){
    return axios.get('/data/sampleData.json');
  }
  async videos(){
    return axios.get('/data/searchResult.json');
  }
}