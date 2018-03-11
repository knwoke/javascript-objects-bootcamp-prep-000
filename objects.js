var playlist = { artistName: 'songTitle' };

function updatePlaylist (playlist, artistName, songTitle){
<<<<<<< HEAD
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
  return playlist;
};

function removeFromPlaylist (playlist, artistName){
  delete playlist["Kanye"];
  return playlist;
}
=======
  playlist.artistName = 'songTitle';
  return playlist
};

updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");
>>>>>>> ede601b4ba964e2b4bf94aef50d18159e950df33
