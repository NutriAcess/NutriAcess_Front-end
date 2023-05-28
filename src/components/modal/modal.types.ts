import { ReactNode } from "react";

export interface IModal {
  children: ReactNode;
  onClose: () => void;
  isVisible: boolean;
}

export interface IContainer {
  isVisible: boolean;
}
