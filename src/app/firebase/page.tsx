'use client'
import { useAuth } from '@clerk/nextjs'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { doc, getDocs } from 'firebase/firestore'
import { collection } from "firebase/firestore"; 
import { checkRole } from '@/utils/roles'


// Add your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAR_EQgF08evK1THQ-2MFQh9y-482xpvtQ",
  authDomain: "cmt322-7940a.firebaseapp.com",
  projectId: "cmt322-7940a",
  storageBucket: "cmt322-7940a.firebasestorage.app",
  messagingSenderId: "69399093065",
  appId: "1:69399093065:web:91961503d621a16f814498"
};

// Connect to your Firebase app
const app = initializeApp(firebaseConfig)
// Connect to your Firestore database
const db = getFirestore(app)
// Connect to Firebase auth
const auth = getAuth(app)

// Remove this if you do not have Firestore set up
// for your Firebase app
const getFirestoreData = async () => {
	const querySnapshot = await getDocs(collection(db, "User"));
  if (!querySnapshot.empty) {
		querySnapshot.forEach((doc) => {
  		console.log(`${doc.id} => ${doc.data()}`);
		});
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
  }
}



export default function FirebaseUI() {
  const { getToken, userId } = useAuth()

  // Handle if the user is not signed in
  // You could display content, or redirect them to a sign-in page
  if (!userId) {
    return <p>You need to sign in with Clerk to access this page.</p>
  }

  const signIntoFirebaseWithClerk = async () => {
    const token = await getToken({ template: 'integration_firebase' })

    const userCredentials = await signInWithCustomToken(auth, token || '')
    // The userCredentials.user object can call the methods of
    // the Firebase platform as an authenticated user.
    console.log('User:', userCredentials.user)
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
      <button onClick={signIntoFirebaseWithClerk}>Sign in</button>

      {/* Remove this button if you do not have Firestore set up */}
      <button onClick={getFirestoreData}>Get document</button>
    </main>
  )
}