/* global firebase */
let config = {
  apiKey: 'AIzaSyCGQvJrcWt8bQ7wB3A2AXqkHqld-NYAVJw',
  authDomain: 'social-network-967b3.firebaseapp.com',
  databaseURL: 'https://social-network-967b3.firebaseio.com',
  projectId: 'social-network-967b3',
  storageBucket: 'social-network-967b3.appspot.com',
  messagingSenderId: '25029310975'
};
firebase.initializeApp(config);
window.referenceDatabase = firebase.database();
window.newDate = () => {
  const date = new Date();
  const mounthVisit = date.getMonth() + 1;
  const dateVisit = `${date.getFullYear()}/${mounthVisit}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${+ date.getSeconds()}`;
  return dateVisit;
};