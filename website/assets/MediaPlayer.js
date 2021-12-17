function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    }
  }

  MediaPlayer.prototype.play = function() {
    video.play();
  };

  MediaPlayer.prototype.pause = function() {
    video.pause();
  };

  MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };

export default MediaPlayer;