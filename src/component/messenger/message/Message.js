import React, {forwardRef} from 'react';
import './Message.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Message = forwardRef(({currentUser, message}, ref) => {
        const isCurrentUser = currentUser.displayName === message.username;

        return (
            <div className={`message ${isCurrentUser && 'message__currentUser'}`}>
                <Card className={isCurrentUser ? "message__userCard" : "message__guessCard"} variant="outlined">
                    <CardContent>
                        <Typography  className="message__typography" gutterBottom>
                            {message.username} : {message.message}
                        </Typography>

                    </CardContent>
                </Card>

            </div>


        );

    }
)
export default Message;

