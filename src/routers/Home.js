import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArr);
        });
    }, []);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNweet(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "nweets"), {
                text: nweet,
                createAt: Date.now(),
                createorId: userObj.uid,
            });
            console.log("Document writeen with ID : ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }

        setNweet("");
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    type="text"
                    placeholder="What's on your mind?"
                    onChange={onChange}
                    maxLength={120}
                />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.createorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
