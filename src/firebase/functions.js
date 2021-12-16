import db, {storage} from "@/firebase/init.js";


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

export const uploadFile = async function(file) {
  const storageRef = storage.ref();
  var fileRef = storageRef.child('images/' + new Date().getTime() + file.name);
  let snapshot = await fileRef.put(file);
  return await snapshot.ref.getDownloadURL();
}

export const addNew = async function(collection, object) {
  const docRef = await db.collection(collection).add(object);
return docRef.id;
}

// export function updateById(collection, id, object) {
//   db.collection(collection).doc(id).set(object);
// }



// export const deleteById = async function(collection, id) {
//   const snapshot = await db.collection(collection).doc(id).delete();
//   return snapshot.data()
// }

