import "./style.css";
import { useState } from "react";
import { useRef } from "react";
const messages = [
    {
        id: 1,
        name: "leri",
        message: "Hello i Am leri",
    },
    {
        id: 2,
        name: "maxo",
        message: "ragaca ragaca",
    },
    {
        id: 3,
        name: "maxo",
        message: "me var saqartvelo",
    },
    {
        id: 4,
        name: "leri",
        message:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, velit. Quis",
    },
];

const Chat = () => {
    const [chatList, setChatList] = useState(messages);
    const [message, setMessage] = useState("");
    const inputHeight = useRef(null);

    const handleChange = (text) => {
        const input = inputHeight.current;
        setMessage(text);
        if (input) {
            input.style.maxHeight = "130px";
            input.style.height = "auto";
            input.style.height = `${input.scrollHeight}px`;
        }
    };

    const handleSentMessage = () => {
        let id = chatList.length;
        if (message.trim() !== "") {
            setChatList((prev) => [
                ...prev,
                {
                    id: id++,
                    name: "leri",
                    message: message,
                },
            ]);
        }
        setMessage("");
        inputHeight.current.style.height = "30px";
    };

    return (
        <div className="ChatContainer">
            <div className="Box">
                <div className="chatDisplay">
                    {chatList.map((e) => {
                        return (
                            <div key={e.id}>
                                <div
                                    className={
                                        e.name === "leri"
                                            ? "userMessage messagePart"
                                            : "otherMessage messagePart"
                                    }
                                >
                                    <span id={e.id}>{e.message}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="chatInput">
                    <div className="textareaDiv">
                        <textarea
                            type="text"
                            onChange={(e) => handleChange(e.target.value)}
                            value={message}
                            placeholder="Send message.."
                            ref={inputHeight}
                        />
                    </div>
                    <div className="buttonDiv">
                        <button onClick={handleSentMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
