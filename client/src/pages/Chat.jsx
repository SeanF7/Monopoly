import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDDYiteJOxlpP4NvkKF_Wdh2LaTCKand0w",
  authDomain: "cs370-monopoly.firebaseapp.com",
  projectId: "cs370-monopoly",
  storageBucket: "cs370-monopoly.appspot.com",
  messagingSenderId: "511810923349",
  appId: "1:511810923349:web:65131d645fa19274069ddc",
  measurementId: "G-H67DJXFNYD"
})

const auth = firebase.auth();
const firestore = firebase.firestore()

const [user] = useAuthState(auth);

export default function Chat() {
  return (
    
    <div className = 'App'>
      <header className="App-header">
        
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

// sign in with Google component
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

// sign out with Google component
function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

// chat room
function ChatRoom() {

  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  return <p>{text}</p>
}

