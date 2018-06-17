let v = new Vue({
  el: '#app',
  data: {
    urlVideo: '',
    title: '',
    activeVideo:'',
    active: '',
    list: [],
    showItemInput: false
  },
  methods: {
    addVideoList: function () {
      if (this.urlVideo != '' && this.urlVideo != '') {
        this.list.push(
          {
            url: this.urlVideo,
            title: this.title,
            active: false
          }
        );
        localStorage.setItem('listVideo', JSON.stringify(this.list));
        this.urlVideo = '';
        this.title = '';
        this.showItemInput = !this.showItemInput;
      }
    },
    deleteVideoList: function (video) {
      console.log(video);
      console.log("delete video");
    },
    playVideo: function (video) {
      console.log(video);
      var urlVideo = video.url;
      var newUrl = urlVideo.replace('whatch?v=', 'embed/');
      this.activeVideo = newUrl+'?&autoplay=1';

    },
    showTitleInput: function () {
      if (this.urlVideo != '')
        this.showItemInput = !this.showItemInput;

    }
  }
});