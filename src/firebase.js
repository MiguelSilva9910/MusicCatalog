import * as firebase from 'firebase';
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBU6ZGOVH50WiZWK15iJ_MriNK-2QkH0lw",
    authDomain: "musiccatalog-82753.firebaseapp.com",
    databaseURL: "https://musiccatalog-82753.firebaseio.com",
    projectId: "musiccatalog-82753",
    storageBucket: "musiccatalog-82753.appspot.com",
    messagingSenderId: "991748518095"
  };

  firebase.initializeApp(config);


  export const artists = firebase.database().ref('/artists'); 
  export const albums = firebase.database().ref('/albums'); 
  export const tracks = firebase.database().ref('/tracks');
