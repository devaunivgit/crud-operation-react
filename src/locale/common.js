import React from 'react';
const Common = React.createContext();
const UserProvider = Common.Provider;
const UserConsumer = Common.Consumer;

export { UserProvider, UserConsumer };
