import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUAojmCBprTeY7_o3xGnDhDuPxOPvD_g",
  authDomain: "portfolio-3014b.firebaseapp.com",
  projectId: "portfolio-3014b",
  storageBucket: "portfolio-3014b.appspot.com",
  messagingSenderId: "764292816862",
  appId: "1:764292816862:web:4e6fa598a3fc7b774ec74f",
  measurementId: "G-F9J431P1SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to render ideas
async function renderIdeas() {
    const ideasContainer = document.getElementById('ideasContainer');
    ideasContainer.innerHTML = '<h2>Submitted Ideas</h2>';

    const querySnapshot = await getDocs(collection(db, 'projectIdeas'));
    querySnapshot.forEach((doc) => {
        const idea = doc.data();
        const ideaElement = document.createElement('div');
        ideaElement.classList.add('idea');
        ideaElement.innerHTML = `
            <h3>${idea.title}</h3>
            <p><strong>Description:</strong> ${idea.description}</p>
            <p><strong>Implementation:</strong> ${idea.implementation}</p>
            <button onclick="deleteIdea('${doc.id}')">Delete</button>
        `;
        ideasContainer.appendChild(ideaElement);
    });
}

// Function to delete an idea
async function deleteIdea(id) {
    await deleteDoc(doc(db, 'projectIdeas', id));
    renderIdeas();
}

// Load ideas on page load
document.addEventListener('DOMContentLoaded', renderIdeas);

// Handle form submission
document.getElementById('projectIdeasForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('ideaTitle').value;
    const description = document.getElementById('ideaDescription').value;
    const implementation = document.getElementById('ideaImplementation').value;

    await addDoc(collection(db, 'projectIdeas'), {
        title: title,
        description: description,
        implementation: implementation
    });

    document.getElementById('projectIdeasForm').reset();
    renderIdeas();
});