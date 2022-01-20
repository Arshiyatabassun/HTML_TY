
const url ="http://jsonplaceholder.typicode.com/posts"
const fetchPosts =() =>{
    fetch(url).then((response) =>{
        console.log(response);
        return response.json()

    }).then((data)=>{
        console.log(data);
        let postData = '<ul>'
        data.map((post) => {
            //template literals (ES6)
            postData += `<li>/${post.title}</li>`
        })
        postData += '<ul>'
        const divElement = document.getElementById('user')
        divElement.innerHTML =postData;
        console.log('postData',postData);
    }).catch(err => {
        console.log(err);
        console.error(err.message)
    })

    
}
fetchPosts()

function savePost(){
    const post = {
        userId:1000,
        title : 'javascript end game',
        body:'javascript Javascript'
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify(post),
        headers:{ 
            'contentType' :'application/json'
        }
    }).then((response) => {
        console.log(response);
        return response.json()
    }).then(data => {
        console.log('added post',data);

    })
}