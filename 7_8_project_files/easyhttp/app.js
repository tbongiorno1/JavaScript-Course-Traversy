//instantiate
const http = new easyHTTP;

//Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(err, response) {
//   if(err){
//     console.log(err)
//   } else {
//     console.log(response);
//   };
// });

//Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err, response) {
//   if(err){
//     console.log(err)
//   } else {
//     console.log(response);
//   };
// });

// create data
const data = {
  title: '1',
  body: '2',
}

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response) {
//   if(err){
//       console.log(err)
//     } else {
//       console.log(response);
//     };
// });

//update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(response);
//   };
// });

// delete posts
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err, response) {
  if(err){
    console.log(err)
  } else {
    console.log(response);
  };
});
