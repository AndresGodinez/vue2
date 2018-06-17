let v = new Vue({
  el: '#app',
  data: {
    urlVideo: '',
    title: '',
    activeVideo:'',
    active: '',
    listVideos: [],
    showItemInput: false
  },
  created(){
    this.listVideos = JSON.parse(localStorage.getItem('listVideo'));
  },
  methods: {
    addVideoList: function () {
      if (this.urlVideo != '' && this.urlVideo != '') {
        this.listVideos.push(
          {
            url: this.urlVideo,
            title: this.title,
            active: false
          }
        );
        localStorage.setItem('listVideo', JSON.stringify(this.listVideos));
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
      for( let i=0; i < this.listVideos.length; i++){
        this.listVideos[i].active=false;
      }
      video.active=true;
    },
    showTitleInput: function () {
      if (this.urlVideo != '')
        this.showItemInput = !this.showItemInput;

    }
  }
});