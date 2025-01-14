import { FormEvent, useEffect, useRef } from "react";
import { Session, useBookingCtx } from "../../store/booking-ctx";
import Button from "../Button";
import Input from "../Input";
import Modal, { ModalHandle } from "../Modal";

type BookModalProps = {
  session: Session;
  onDone: () => void;
};

export default function BookModal({ onDone, session }: BookModalProps) {
  const modalRef = useRef<ModalHandle>(null);
  const { bookSession } = useBookingCtx();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEle = event.currentTarget;
    const formData = new FormData(formEle);
    const data = Object.fromEntries(formData);
    bookSession(session);
    onDone();
  }

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }, []);

  return (
    <Modal ref={modalRef} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Your name"
          placeholder="Enter Your Name"
          id="name"
          name="name"
          type="text"
        />
        <Input
          label="Your email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          type="email"
        />
        <p className="actions">
          <Button type="button" textOnly onClick={() => onDone()}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
