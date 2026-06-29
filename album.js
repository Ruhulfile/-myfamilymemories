// ===============================

// My Family Memories - Album System v2

// ===============================

const albumBtn = document.querySelector(".album");

const albumList = document.getElementById("albumList");

// Album Load

function loadAlbums() {

    if (!albumList) return;

    albumList.innerHTML = "";

    const albums = JSON.parse(localStorage.getItem("albums")) || [];

    albums.forEach((name) => {

        const card = document.createElement("div");

        card.className = "card";

card.innerHTML = `
<h3>📁 ${name}</h3>

<p>📷 0 Photos</p>

<button onclick="openAlbum('${name}')">
📂 Open Album
</button>

<button
style="
margin-top:8px;
background:#ef4444;
color:white;
"
onclick="deleteAlbum('${name}')">
🗑 Delete Album
</button>
`;
        albumList.appendChild(card);

    });

}

// Create Album

if (albumBtn) {

    albumBtn.addEventListener("click", () => {

        const albumName = prompt("Album ka naam likho:");

        if (!albumName) return;

        const albums = JSON.parse(localStorage.getItem("albums")) || [];

        albums.push(albumName);

        localStorage.setItem("albums", JSON.stringify(albums));

        loadAlbums();

    });

}

// Open Album

window.openAlbum = function(name) {

    localStorage.setItem("currentAlbum", name);

    window.location.href = "album.html";

};

// Page Load

loadAlbums();

window.deleteAlbum = function(name){

if(!confirm("Delete album '" + name + "' ?")){
return;
}

let albums = JSON.parse(localStorage.getItem("albums")) || [];

albums = albums.filter(a => a !== name);

localStorage.setItem("albums", JSON.stringify(albums));

loadAlbums();

};
