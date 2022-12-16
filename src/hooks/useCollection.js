import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports:
import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

export const useCollection = (page, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // const query = useRef(_query).current;
  // const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = collection(db, page);
    // console.log(ref);

    // if (query) {
    //   ref = ref.where(...query);
    // }
    // if (orderBy) {
    //   ref = ref.orderBy(...orderBy);
    // }

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data.");
      }
    );

    // unsubscribe on unmount
    return () => unsub();
    // }, [collection, query, orderBy]);
  }, [page]);

  return { documents, error };
};
