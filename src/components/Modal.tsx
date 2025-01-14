import {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  onClose: () => void;
} & ComponentPropsWithoutRef<"dialog">;

export type ModalHandle = {
  open: () => void;
};

const Modal = forwardRef<ModalHandle, PropsWithChildren<ModalProps>>(function (
  { children, onClose },
  ref
) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          modalRef.current?.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog onClose={onClose} className="modal" ref={modalRef}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
