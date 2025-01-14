import Button from "../Button";

type Session = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

type SessionProps = {
  session: Session;
};

export default function SessionItem({
  session: { id, image, summary, title },
}: SessionProps) {
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}
