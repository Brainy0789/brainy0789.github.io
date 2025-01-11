// Import Firebase functions
import { db } from "./firebase-config.js";
import { doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const localVideo = document.getElementById("localVideo"); // Your local video element
const remoteVideo = document.getElementById("remoteVideo"); // Remote video element
let localStream;
let remoteStream;
let peerConnection;

const signalingRef = doc(db, "webrtc", "signal"); // Firestore document for signaling

// Set up the connection
const configuration = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" } // STUN server
    ]
};

// Start the connection
async function startConnection() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    peerConnection = new RTCPeerConnection(configuration);

    // Add local stream tracks to peer connection
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    // Listen for remote stream
    peerConnection.ontrack = (event) => {
        remoteStream = event.streams[0];
        remoteVideo.srcObject = remoteStream;
    };

    // Listen for ICE candidates
    peerConnection.onicecandidate = async (event) => {
        if (event.candidate) {
            await setDoc(signalingRef, {
                candidate: event.candidate
            });
        }
    };

    // Listen for signaling data
    onSnapshot(signalingRef, (doc) => {
        const data = doc.data();
        if (data?.candidate) {
            peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
        }
        if (data?.offer) {
            handleOffer(data.offer);
        }
    });
}

// Handle incoming offers
async function handleOffer(offer) {
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    await setDoc(signalingRef, {
        offer: answer
    });
}

// Start the connection when the user clicks a button
document.getElementById("startCallButton").addEventListener("click", startConnection);
