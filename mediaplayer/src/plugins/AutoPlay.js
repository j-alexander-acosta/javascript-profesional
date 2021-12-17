import MediaPlayer from "../../../website/assets/MediaPlayer";

function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
    pla
    player.play();
};

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.unmuted = false;
}

export default AutoPlay;