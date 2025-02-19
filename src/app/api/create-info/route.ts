import { NextRequest, NextResponse } from 'next/server';
import { isSignedIn } from '@/utils/roles';

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

export async function POST(req: NextRequest) {
  // Check if the user is signed in
  if (!(await isSignedIn())) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const data = await req.json(); // Parse the request body

    console.log('Data received:', data);

    // Add a new document with a generated ID
    const docRef = await addDoc(collection(db, 'News'), data);

    console.log('Document written with ID: ', docRef.id);
    return NextResponse.json({ infoId: docRef.id });
  } catch (error) {
    console.error('Error writing info:', error);
    return new NextResponse('Error writing info', { status: 500 });
  }
}

export async function GET() {
  try {
    // Read all documents in the 'News' collection
    const querySnapshot = await getDocs(collection(db, 'News'));
    const news = querySnapshot.docs.map((doc) => doc.data());

    return NextResponse.json({ news });
  } catch (error) {
    console.error('Error reading news:', error);
    return new NextResponse('Error reading news', { status: 500 });
  }
}
