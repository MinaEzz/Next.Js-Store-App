type TButtonSize = "sm" | "default" | "lg";
type TActionType = "edit" | "delete";

export interface ISubmitButtonProps {
  className?: string;
  text?: string;
  size?: TButtonSize;
}

export interface IActionButtonProps {
  actionType: TActionType;
  className?: string;
}
