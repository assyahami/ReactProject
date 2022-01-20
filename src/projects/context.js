import React, { useState } from 'react';
import sublinks from '../storage/Stripedata';
const AppProvider = React.createContext();
function Context({ children }) {
  const [Openmenu, setOpenmenu] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);
  const [Location, setLocation] = useState({});
  const [links, setLinks] = useState({ page: '', links: [] });
  const OpenMenuBar = (text, coordinates) => {
    const pages = sublinks.find((link) => link.page===text);
    setLinks(pages);
    setLocation(coordinates);
    setOpenmenu(true);
  };
  const CloseMenuBar = () => {
    setOpenmenu(false);
  };
  const OpenModals = () => {
    setOpenModal(true);
  };
  const CloseModals = () => {
    setOpenModal(false);
  };
  return (
    <>
      <AppProvider.Provider
        value={{
          Openmenu,
          OpenModal,
          OpenMenuBar,
          CloseMenuBar,
          OpenModals,
          CloseModals,
          Location,
          links,
        }}
      >
        {children}
      </AppProvider.Provider>
    </>
  );
}

const useGlobalContext = () => {
  return React.useContext(AppProvider);
};

export { Context, useGlobalContext };
