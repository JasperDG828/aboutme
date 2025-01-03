function loadMd(page) {
    params = new URLSearchParams(window.location.search);
    if (params.get("lang") == "nl") { page = "nl/" + page }
    if (window.location["host"] == "jasperdg828.github.io") { let url = `./aboutme/markdown/${page}.md` }
    else { let url = `./markdown/${page}.md` }
    fetch(`./markdown/${page}.md`).then((res) => {
        res.text().then((text) => {
            document.getElementById("md-content").innerHTML = marked.parse(text);
        });
    });
}
function loadImage(img, dark, overridepath) {
    div = document.getElementById("title-image")
    div.style.backgroundColor = `rgba(0,0,0,${dark})`
    div.style.backgroundImage = `url(${img})`
}
function setSocial(icon, username, url) {
    ico = document.getElementById("social-icon")
    ico.className = `fa fa-${icon}`

    link = document.getElementById("social-link")
    link.href = url
    link.innerHTML = username
}
function setTitle(title) {
    header = document.getElementById("header")
    header.innerHTML = title
}

function loadPage(page) {
    if (page == "programming") {
        setSocial("github", "JasperDG828", "https://github.com/JasperDG828")
        setTitle("Programming")
        loadImage("./media/pages/programming-01.jpg", 0.3)
        loadMd(page)
    } else if (page == "photography") {
        setSocial("flickr", "Jasper De Gussemé", "https://www.flickr.com/photos/jasperdegusseme/")
        setTitle("Photography")
        loadImage("./media/pages/photography-01.jpg", 0.3)
        loadMd(page)
    } else if (page == "startpage") {
        loadImage("./media/pages/startimage.svg", 0.0, true)
        setTitle("")
        setSocial("linkedin", "Jasper De Gussemé", "https://www.linkedin.com/in/jasperdegusseme")
    } else if (page == "music") {
        loadImage("./media/pages/music-02.jpg", 0.5, true)
        setTitle("Music")
        setSocial("instagram", "djbeatovrflw", "https://www.instagram.com/djbeatovrflw/")
        loadMd(page)
    } else if (page == "contact") {
        loadImage("./media/pages/contact-01.jpg")
        setTitle("Contact")
        setSocial("", "")
        loadMd(page)
    }
}

const urlParams = new URLSearchParams(window.location.search);
if (["music", "photography", "programming", "contact"].includes(urlParams.get("page"))) { loadPage(urlParams.get("page")) }
else { loadPage("startpage") }