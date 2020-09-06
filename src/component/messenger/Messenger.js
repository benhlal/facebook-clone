import React, {useEffect, useRef, useState} from 'react';
import './Messenger.css';
import {connect} from "react-redux";
import Header from "../header/Header";
import {Avatar, FormControl, IconButton} from "@material-ui/core";
import db from "../../config/firebase";
import firebase from "firebase";
import Message from "./message/Message";
import SettingsIcon from '@material-ui/icons/Settings';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MessengerSideBarRow from "./messengersidebar/messengersidebarrow/MessengerSideBarRow";
import {useStyles} from "../../utilities/Utilities";
import SendIcon from '@material-ui/icons/Send';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";

function Messenger({user}) {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const classes = useStyles();
    const sendMessage = (event) => {
        event.preventDefault();

        db.collection("messages").add({
            message: input,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom, [messages]);
    useEffect(() => {
        db.collection("messages").orderBy("timestamp", "asc").onSnapshot(
            snapshot => {
                setMessages(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        message: doc.data()
                    })))
            });
    }, [])
    return (
        <div className="messenger">
            <Header user={user}/>
            <div className="messenger__wrapper">

                <div className="messenger__header">
                    <div className="messenger__header__left">
                        <h2> Chats</h2>
                        <div>
                            <IconButton><SettingsIcon/></IconButton>
                            <IconButton><VideoCallIcon/></IconButton>
                            <IconButton><PostAddIcon/></IconButton>
                        </div>

                    </div>
                    <div className="messenger__header__center">
                        <Avatar
                            src={'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/88015433_227452888295495_2272065990533578752_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=HD4Xa4uok4IAX_e5OKi&_nc_ht=scontent-cdt1-1.xx&oh=d8ef7f9e8d6ab9ef8eba30cbbfc1fad2&oe=5F7B7ABF'}/>
                        <div className="message__contact">
                            <h5>Soukeina Mrf</h5>
                            <h5>2 days ago</h5>
                        </div>

                    </div>
                    <div className="messenger__header__right">
                        <CallIcon/>
                        <VideoCallIcon/>
                        <InfoOutlinedIcon/>
                    </div>
                </div>

                <div className="messenger__body">
                    <div className="messenger__body__sideBar__left">
                        <input className="message__contact__search" type="text"
                               placeholder={`Search contact ...`}
                        />
                        <MessengerSideBarRow
                            src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/88015433_227452888295495_2272065990533578752_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=HD4Xa4uok4IAX_e5OKi&_nc_ht=scontent-cdt1-1.xx&oh=d8ef7f9e8d6ab9ef8eba30cbbfc1fad2&oe=5F7B7ABF"
                            username={'Soukeina'}
                            lastmessage={"ok"}/>
                        <MessengerSideBarRow
                            src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/40373458_523347181423785_2293808558094942208_o.jpg?_nc_cat=105&_nc_sid=1eb0c7&_nc_ohc=R-c4qUq1WzoAX8Y6ncD&_nc_ht=scontent-cdt1-1.xx&oh=c96d9bfb7aac3996f18dc142dc443f62&oe=5F79866E"
                            username={'Lara'}
                            lastmessage={"Let's play now ?"}/>
                        <MessengerSideBarRow
                            username={'Melina'}
                            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.30497-1/cp0/c18.0.60.60a/p60x60/84628273_176159830277856_972693363922829312_n.jpg?_nc_cat=1&_nc_sid=12b3be&_nc_ohc=N79NP21kwCUAX8XlMIy&_nc_ht=scontent-cdg2-1.xx&oh=6e7b40d5e7f8ba1b8f9633bc67734c0b&oe=5F78AB9A"
                            lastmessage={"No wayyy!!"}/>
                        <MessengerSideBarRow
                            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/cp0/c0.1.60.60a/p60x60/103964021_10223329677177030_1453090128305957365_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=wIWWlqfl9r4AX8nkZ6J&_nc_ht=scontent-cdg2-1.xx&oh=2ead6fdb978107b1c8f92adafa589ce3&oe=5F7B88B4"
                            username={'Max'}
                            lastmessage={"fine then ! :)"}/>
                        <MessengerSideBarRow
                            src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/cp0/c0.9.60.60a/p60x60/87019023_2852317574791323_1762310980894720000_o.jpg?_nc_cat=111&_nc_sid=7206a8&_nc_ohc=JlonMZcWH3EAX85Zp94&_nc_ht=scontent-cdg2-1.xx&oh=3e89c731c5220b4be355cc24f220b5d2&oe=5F78A4BF"
                            username={'Choaib'}
                            lastmessage={"ok"}/>


                    </div>
                    <div className="messenger__body__conversation">
                        {messages.map(({message, id}) => (
                            <Message key={id} currentUser={user} message={message}/>))}
                        <div ref={messagesEndRef}/>
                        <form className="messenger__form">

                            <FormControl className="messenger__form__control">
                                <input className="message__contact__send" placeholder={"Type your message..."}
                                       value={input}
                                       onChange={event => setInput(event.target.value)}/>
                                <IconButton type="submit"
                                            onClick={sendMessage}>
                                    <SendIcon className="message__contact__send__btn" disabled={!input}/>
                                </IconButton>


                            </FormControl>
                        </form>

                    </div>
                    <div className="messenger__body__sideBar__right">
                        <div className="contact__info">
                            <Avatar className={classes.large}
                                    src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/88015433_227452888295495_2272065990533578752_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=HD4Xa4uok4IAX_e5OKi&_nc_ht=scontent-cdt1-1.xx&oh=d8ef7f9e8d6ab9ef8eba30cbbfc1fad2&oe=5F7B7ABF"
                            />
                            <h3>{'Soukeina Mrf'}</h3>
                            <h6>{'2 days ago'}</h6>
                        </div>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <span style={{color: "#B8B8B8", fontWeight: "bold"}}>MORE ACTIONS</span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="side">
                                        <p>Search in Conversation</p>
                                        <p>Edit Nicknames</p>
                                        <p>Change Theme</p>
                                        <p>Change Emojis</p>
                                    </div>


                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <span style={{color: "#B8B8B8", fontWeight: "bold"}}>PRIVACY & SUPPORT</span>

                                </AccordionSummary>
                                <AccordionDetails>

                                    <div className="side">
                                        <p>Notifications</p>
                                        <p>Ignore Messages</p>
                                        <p>Block Messages</p>
                                        <p>Something's Wrong</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );


}

function mapStateToProps(state) {
    return {
        user: state.firebaseReducer.auth
    };
}

export default connect(mapStateToProps)(Messenger);

