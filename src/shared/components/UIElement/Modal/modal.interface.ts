import React from "react";
import { ComponentProps } from "../../../interfaces/global.interface";

export interface ModalOverLayProps extends ComponentProps {
  headerClass?: string;
  header?: string;
  contentClass?: string;
  footerClass?: string;
  footer?: React.ReactNode;
  onSubmit?: React.ReactEventHandler;
}

export interface ModalProps extends ModalOverLayProps {
  show: boolean;
  onCancel: React.ReactEventHandler;
}
