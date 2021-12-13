import db from "@/firebase/init.js";
import { collection, getDocs } from "firebase/firestore";


export const getAll = async function(collection) {
  const snapshot = await db.collection(collection).get()
 return snapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
  console.log(snapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data())));

}

// export const getById = async function(collection, id) {
//   const snapshot = await db.collection(collection).doc(id).get();
//   return snapshot.data()
// }

// export function updateById(collection, id, object) {
//   db.collection(collection).doc(id).set(object);
// }

export const addNew = async function(collection, object) {
      const docRef = await db.collection(collection).add(object);
      console.log(docRef.id);
    return docRef.id;
}

// export const deleteById = async function(collection, id) {
//   const snapshot = await db.collection(collection).doc(id).delete();
//   return snapshot.data()
// }

