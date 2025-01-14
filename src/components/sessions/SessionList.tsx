import SessionItem, { Session } from "./SessionItem";

type SessionListProps = {
  sessions: Session[];
};

export default function SessionList({ sessions }: SessionListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          {" "}
          <SessionItem session={session} />
        </li>
      ))}
    </ul>
  );
}
