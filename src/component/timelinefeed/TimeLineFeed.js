import React, {useEffect, useState} from 'react';
import './TimeLineFeed.css';
import StatusPost from "../statuspost/StatusPost";
import StoryRow from "../storyrow/StoryRow";
import Post from "../statuspost/post/Post";
import db from "../config/firebase";

function TimeLineFeed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                    setPosts(snapshot.docs.map(doc => (
                        {
                            id: doc.id,
                            data: doc.data()
                        }

                    )))
                }
            )

    }, [])
    return (
        <div className="timeLineFeed">
            <StoryRow/>
            <StatusPost/>
            {
                posts.map(post =>
                    (<Post key={post.data.id}
                           image={post.data.image}
                           timestamp={new Date(post.data.timestamp?.toDate()).toUTCString()}
                           message={post.data.message}
                           username={post.data.username}
                           profilePic={post.data.profilePic}
                    />))
            }
        </div>
    );
}

export default TimeLineFeed;
