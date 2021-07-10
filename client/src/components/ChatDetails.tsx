import { useParams } from "react-router-dom";
import { Container } from "./Container";

export const ChatDetails = () => {
  const params: { id: string } = useParams();
  return (
    <Container>
      <h2>Chats details for user id: {params.id}</h2>

      <form className="">
        <input
          type="text"
          className="fixed bottom-4 w-1/3 left-auto right-auto"
        />
      </form>
    </Container>
  );
};
