async function done(url) {
    try {
        let c = await fetch(url);
        let res = await c.json();
        console.log(res)
        console.log(res.title);
        console.log(res.body);
    } catch (e) {
        console.log("this is am error that has occured!:" + e);
    }
}
done("https://jsonplaceholder.typicode.com/posts/1");

//question 2

async function wrongUrl(url) {
    try {
        let c = await fetch(url);
        let res = await c.json();
        console.log(res)
        console.log(res.title);
        console.log(res.body);
    } catch (e) {
        console.log("this is am error that has occured!:" + e);
    }
}
wrongUrl('https://jsonplaceholder.typicode.com/postsss'
);


// convert fetch to aync/await
async function asyncAwait() {
    let r = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let s = await r.json();
    console.log(s);
}
asyncAwait();

// level 2

async function chaining() {
    let user1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let user2 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    let one = await user1.json();
    let two = await user2.json();
    // console.log(one.username);
    // console.log("-------------------------------------------------")
    // console.log(two.length);
    return one.username;
}
chaining()
    .then((user) => {
        console.log("User:" + user);
    })




// the real chaining
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
        return res.json()
    })
    .then((user) => {
        console.log("User:" + user.username);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    })
    .then((s) => {
        return s.json();
    })
    .then((n) => {
        console.log("Number of the post:" + n.length);
    })
    .catch((e) => {
        console.log("This is the error!! try to find it!!");
    })


// Handle 404 with cutom error
async function names() {
    try {
        let q = await fetch('https://jsonplaceholder.typicode.com/unknown');
        if (q.ok === false) {
            throw new Error("Resource not found")
        }
        let result = await q.json();
        console.log(result);
    } catch (e) {
        console.log("Custom error: Resource not found");
    }
}
names();


//Mix aync/await and try/catch
async function getUser(id) {
    try {
        let user = await fetch('https://jsonplaceholder.typicode.com/users/99999999');
        if(!user.ok){
            throw new Error("HTTPS error!");
        }
        let re = await user.json();
        console.log(re);

    } catch (e) {
        console.log('"Could not load user!"')
    }
}
getUser(2);



//question 7
fetch('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
return res.json();
})
.then((user1)=>{
    console.log("user:",user1);
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
})
.then((res2)=>{
return res2.json();
})
.then((post)=>{
console.log("The post",post);
return fetch('https://jsonplaceholder.typicode.com/comments?postId=<id>');
})
.then((res3)=>{
    return res3.json();
})
.then((user3)=>{
    console.log(user3);
})


//
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => res.json())
  .then((user1) => {
      console.log("User:", user1);
      return fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
  })
  .then((res2) => res2.json())
  .then((posts) => {
      console.log("Posts:", posts);
      const firstPostId = posts[0].id;
      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPostId}`);
  })
  .then((res3) => res3.json())
  .then((comments) => {
      console.log("Comments of first post:", comments);
  })
  .catch((err) => console.log("Error:", err));




