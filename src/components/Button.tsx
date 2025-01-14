import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

type BaseProps = {
  textOnly?: boolean;
};

type ButtonAnchorType = {
  to: string;
} & BaseProps &
  LinkProps;

type ButtonType = {
  to?: never;
} & BaseProps &
  ComponentPropsWithoutRef<"button">;

//   one way of doing
// export default function Button(
//   props: PropsWithChildren<ButtonAnchorType | ButtonType>
// ) {
//   if (props.to) {
//     return (
//       <Link
//         to={props.to}
//         className={`button ${
//           props.textOnly ? "button.button--text-only " : ""
//         }`}
//       >
//         {props.children}
//       </Link>
//     );
//   }

//   return (
//     <button
//       className={`button ${props.textOnly ? "button.button--text-only " : ""}`}
//     >
//       {props.children}
//     </button>
//   );
// }

function isReactRouterElement(
  props: ButtonAnchorType | ButtonType
): props is ButtonAnchorType {
  return "to" in props;
}

export default function Button(
  props: PropsWithChildren<ButtonAnchorType | ButtonType>
) {
  if (isReactRouterElement(props)) {
    return (
      <Link
        className={`button ${
          props.textOnly ? "button.button--text-only " : ""
        }`}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button ${props.textOnly ? "button.button--text-only " : ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
