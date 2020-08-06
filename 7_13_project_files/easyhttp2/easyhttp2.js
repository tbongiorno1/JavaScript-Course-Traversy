/** 
 * Easy http library
 * library for making http requests
 * 
 * @version 2.0.0
 * @author TJ Bongiorno
 * @license MIT
 * 
**/

class EasyHTTP {
  // make hhtp GET request
  get(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
      });
   
  }

  // make POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': ' application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
}

// make a PUT request
put(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': ' application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
}
// Delete
delete(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': ' application/json'
      }
    })
    .then(res => res.json())
    .then(() => resolve('Resource Deleted'))
    .catch(err => reject(err));
  });
}
};