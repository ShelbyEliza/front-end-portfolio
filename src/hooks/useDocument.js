import { useState, useEffect } from "react";
import { db } from "../firebase/config";

import { collection, doc, onSnapshot } from "firebase/firestore";

export const useDocument = (page, pageID, subDoc) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  // console.log(coll);

  // realtime data for document:
  useEffect(() => {
    let pageDoc = doc(db, "blogs", "allBlogs");
    // let pageDoc = doc(db, page, pageID);
    // let collRef = collection(pageDoc, pageID);
    // let refID = ref[0].id;
    console.log(pageDoc);
    // console.log(collRef);
    // let selectedDoc = doc(db, coll, ref.id);

    const unsub = onSnapshot(
      pageDoc,
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("No such document exists.");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Failed to get document.");
      }
    );

    return () => unsub();
  }, [page, pageID]);

  return { document, error };
};
