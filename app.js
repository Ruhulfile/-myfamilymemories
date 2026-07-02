// =======================================

// My Family Memories - App v3

// =======================================

import { db } from "./js/firebase.js";

import {

collection,

addDoc,

getDocs,

deleteDoc,

updateDoc,

doc

} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Elements

const albumBtn = document.querySelector(".album");

const albumList = document.getElementById("albumList");

// Firestore Collection

const albumsRef = collection(db, "albums");

// ===============================

// Load Albums from Firestore

// ===============================

async function loadAlbums() {

    albumList.innerHTML = "";

    const snapshot = await getDocs(albumsRef);

    if (snapshot.empty) {

        albumList.innerHTML = `

        <div class="card">

            <h3>No Albums Found</h3>

            <p>Create your first album.</p>

        </div>

        `;

        return;

    }

    snapshot.forEach((albumDoc) => {

        const data = albumDoc.data();

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <h3>📁 ${data.name}</h3>

            <button onclick="openAlbum('${data.name}')">

                📂 Open Album

            </button>

            <button

            onclick="renameAlbum('${albumDoc.id}','${data.name}')"

            style="margin-top:8px;background:#3b82f6;color:white;">

                ✏️ Rename

            </button>

            <button

            onclick="deleteAlbum('${albumDoc.id}')"

            style="margin-top:8px;background:#ef4444;color:white;">

                🗑 Delete

            </button>

        `;

        albumList.appendChild(card);

    });

}

// ===============================

// Create Album

// ===============================

albumBtn.addEventListener("click", async () => {

    const albumName = prompt("Album ka naam likho:");

    if (!albumName || albumName.trim() === "") return;

    await addDoc(albumsRef, {

        name: albumName.trim(),

        createdAt: new Date()

    });

    loadAlbums();

});

// ===============================

// Open Album

// ===============================

window.openAlbum = function(name){

    localStorage.setItem("currentAlbum", name);

    window.location.href = "album.html";

};

// ===============================

// Rename Album

// ===============================

window.renameAlbum = async function(id, oldName){

    const newName = prompt("New Album Name:", oldName);

    if(!newName || newName.trim()==="") return;

    await updateDoc(doc(db, "albums", id), {

        name: newName.trim()

    });

    loadAlbums();

};

// ===============================

// Delete Album

// ===============================

window.deleteAlbum = async function(id){

    if(!confirm("Delete this album?")) return;

    await deleteDoc(doc(db, "albums", id));

    loadAlbums();

};

// ===============================

// First Load

// ===============================

loadAlbums();
