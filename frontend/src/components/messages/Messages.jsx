import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(
      () => lastMsgRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((m) => (
          <div key={m._id} ref={lastMsgRef}>
            <Message message={m} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, ind) => <MessageSkeleton key={ind} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the convo</p>
      )}
    </div>
  );
};
export default Messages;
