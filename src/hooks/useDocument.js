import { useState, useEffect } from "react";
import { db } from "../firebase/config";

import { collection, doc, onSnapshot } from "firebase/firestore";

export const useDocument = (coll, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime data for document:
  useEffect(() => {
    let selectedDoc = doc(db, coll, id);

    const unsub = onSnapshot(
      selectedDoc,
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
  }, [coll, id]);

  return { document, error };
};
