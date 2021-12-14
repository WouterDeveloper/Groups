import db from "@/firebase/init.js";
import { doc, getDoc } from "firebase/firestore";



export const getAll = async function(collection) {
  const snapshot = await db.collection(collection).get()
 return snapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
}

// Functie die data filtert op basis van een boolean in de database
// export const getAll = async function(collection) {
//   const snapshot =  await db.collection(collection).where("JoinedByUser", "==", false).get()
//   return snapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
// }

export const getById = async function(collection, id) {
  const snapshot = await db.collection(collection).doc(id).get();
  return snapshot.data()
}

export const addNew = async function(collection, object) {
  const docRef = await db.collection(collection).add(object);
return docRef.id;
}

// export const getCreatedGroup = async function(collection) {
  
// const docRef = doc(db, collection)
//     .orderBy("createdAt", "desc")
//     .limit(1)
//     .get();
//   const docSnap = await getDoc(docRef);
//   console.log("Document data:", docSnap.data());
//   // snapshot.forEach((doc) => {
//   //   // doc.data() is never undefined for query doc snapshots
//   //   console.log(doc.id, " => ", doc.data());
//   // });
// }


// export function updateById(collection, id, object) {
//   db.collection(collection).doc(id).set(object);
// }



// export const deleteById = async function(collection, id) {
//   const snapshot = await db.collection(collection).doc(id).delete();
//   return snapshot.data()
// }

