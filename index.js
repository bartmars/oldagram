const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("posts")

const nameEl = document.getElementById("name")
const usernameEl = document.getElementById("username")
const locationEl = document.getElementById("location")
const avatarImg = document.getElementById("avatar-img")
const postImg = document.getElementById("post-img")
const commentEl = document.getElementById("comment")
const likesEl = document.getElementById("likes")

function renderPost(int) {
    nameEl.textContent = posts[int]["name"]
    usernameEl.textContent = posts[int]["username"]
    locationEl.textContent = posts[int]["location"]
    avatarImg.textContent = posts[int]["avatar-img"]
    postImg.innerHTML = `<img id="post-img" class="post-img" src="${posts[int]["post-img"]}" alt="TODO">`
    likesEl.textContent = ${posts[int]["likes"]}
    commentEl.innerHTML = ${posts[int]["comment"]}

`    <article>
        <div class="flex-container">
            <img src="images/avatar-vangogh.jpg" alt="TODO" class="avatar-img">
            <div>
                <p id="name" class="name"></p>
                <p id="location" class="location">Zudert, Netherlands</p>
            </div>
        </div>
        <img id="post-img" src="images/post-vangogh.jpg" alt="TODO" class="post-img">
        <div class="icons-div">
            <img src="images/icon-heart.png" alt="" class="icon-img">
            <img src="images/icon-comment.png" alt="" class="icon-img">
            <img src="images/icon-dm.png" alt="" class="icon-img">
        </div>
        <p id="likes" class="likes">21,492 likes</p>
        <p id="comment"><span id="username" class="username">${username.textContent}</span> ${comment.textContent}</p>
    </article>`


    console.log(postImg)
}

function render(posts) {
    // for (let i = 0; i < posts.length; i++) {
    //     return renderPost(i)
    // }
    renderPost(2)
}

render(posts)