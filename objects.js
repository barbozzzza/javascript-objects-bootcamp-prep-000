<<<<<<< HEAD
var playlist = {ACDC: "School of rock"};

function updatePlaylist (playlist, artistName, songTitle) {
 
  return playlist[artistName] = songTitle
  
};
  
 function removeFromPlaylist (playlist, artistName) {
    delete playlist [artistName]
 }

var playlist = {
artistName:"songTitle"
  
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist
}

function removeFromPlaylist(playlist,artistName){
 delete playlist[artistName];
return playlist;
}
