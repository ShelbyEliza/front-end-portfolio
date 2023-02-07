import { useState, useEffect } from "react";
import { db } from "../firebase/config";

import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (page, pageID, subDoc) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime data for document:
  useEffect(() => {
    let pageDoc = doc(db, "blogs", "allBlogs");

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
