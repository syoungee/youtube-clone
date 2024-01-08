import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId ? axios.get('/data/sampleData.json') : axios.get('/data/related.json');
  }
  async videos() {
    return axios.get('/data/searchResult.json');
  }
  async channels() {
    return axios.get('/data/channel.json');
  }
}
