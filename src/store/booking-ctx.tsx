import { createContext, ReactNode, useContext, useState } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

type BookingCtxValues = {
  bookSession: (session: Session) => void;
  deleteSession: (id: string) => void;
  sessions: Session[];
};

const BookingCtx = createContext<BookingCtxValues | null>(null);

export default function BookingCtxProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sessions, setSessions] = useState<Session[]>([]);

  const ctxValues: BookingCtxValues = {
    bookSession(session) {
      setSessions((prevSessions) => [...prevSessions, session]);
    },

    deleteSession(id) {
      setSessions((prevSessions) =>
        prevSessions.filter((session) => session.id !== id)
      );
    },
    sessions: sessions,
  };
  return (
    <BookingCtx.Provider value={ctxValues}>{children}</BookingCtx.Provider>
  );
}

export const useBookingCtx = () => {
  const context = useContext(BookingCtx);
  if (!context) {
    throw new Error("useBookingCtx must be used inside BookingCtxProvider");
  }

  return context;
};
