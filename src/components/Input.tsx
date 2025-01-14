import { ComponentPropsWithoutRef } from "react";

type BaseProps = {
  id: string;
  label: string;
};

type InputProps = BaseProps & ComponentPropsWithoutRef<"input">;

export default function Input({ id, label, ...rest }: InputProps) {
  return (
    <div className="control">
      <label htmlFor={id} />
      <input {...rest} name={id} />
    </div>
  );
}
