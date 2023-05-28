import { ReactNode } from "react";

export interface IModal {
  children: ReactNode;
  onClose: () => void;
  isVisible: boolean;
  title?: string;
}

export interface IContainer {
  isVisible: boolean;
}

export interface IHeader {
  title?: string;
}
