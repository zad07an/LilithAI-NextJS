"use client";

import Overlay from "@/components/ui/Overlay";
import React, { FC, ReactNode, createContext, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ContextProvider {
  isInputMenuOpen: boolean;
  isUploadModalOpen: boolean;
  isUserMenuOpen: boolean;
  handleOpenInputMenu: () => void;
  handleCloseInputMenu: () => void;
  handleOpenUploadModal: () => void;
  handleCloseUploadModal: () => void;
  handleOpenUserMenu: () => void;
  handleCloseUserMenu: () => void;
}

const AppContext = createContext<ContextProvider>(null!);

const AppProvider: FC<ProviderProps> = ({ children }) => {
  const [isInputMenuOpen, setIsInputMenuOpen] = useState<boolean>(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  const handleOpenInputMenu = () => setIsInputMenuOpen(true);
  const handleCloseInputMenu = () => setIsInputMenuOpen(false);

  const handleOpenUploadModal = () => {
    setIsUploadModalOpen(true);
    setIsInputMenuOpen(false);
  };
  const handleCloseUploadModal = () => setIsUploadModalOpen(false);

  const handleOpenUserMenu = () => setIsUserMenuOpen(true);
  const handleCloseUserMenu = () => setIsUserMenuOpen(false);

  const handleShowOverlayLogic = [isInputMenuOpen, isUploadModalOpen, isUserMenuOpen]?.some(
    value => value
  );

  return (
    <AppContext.Provider
      value={{
        isInputMenuOpen,
        isUploadModalOpen,
        isUserMenuOpen,
        handleOpenInputMenu,
        handleCloseInputMenu,
        handleOpenUploadModal,
        handleCloseUploadModal,
        handleOpenUserMenu,
        handleCloseUserMenu
      }}
    >
      {handleShowOverlayLogic ? <Overlay className=" sm:hidden" /> : null}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): ContextProvider => useContext(AppContext);

export default AppProvider;
