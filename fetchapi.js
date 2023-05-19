//intitializing the link

const base_url = 'https://jsonplaceholder.typicode.com/posts'

//Listing the post...

async function listingPosts() {
    try {
        let response= await fetch(base_url);
        let list=await response.json();
        console.log(list);
    } catch (error) {
        console.error();
        
    }
    
}
// listingPosts();


//creating a post...
async function createPost() {
    try {
      const response = await fetch(base_url, {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
//   createPost();

  //udating...
  async function updatePost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
//   updatePost();

  //Delete Post...
  async function deletePost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      
      console.log('Post deleted successfully.');
    } catch (error) {
      console.log(error);
    }
  }
  
//   deletePost();


  async function filterPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
//   filterPosts();




  
  
  