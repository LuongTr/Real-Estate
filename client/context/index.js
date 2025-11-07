import React, { useEffect, useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useConnect,
  metamaskWallet,
  useContractRead,
  useContractEvents,
  ConnectWallet,
  useContractWrite,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x311b0e420E3eE3d1c0266258d6a0Ec80595252Aa"
  );

  const address = useAddress();
  const connect = useConnect();

  const connectWithMetamask = async () => {
    const metamask = metamaskWallet();
    await connect(metamask, { chainId: 80002 });
  };

  const realEstate = "Read Estate Dapp";

  //=========Function=========

  //listProperty()
  const { mutateAsync: listProperty, isLoading } = useContractWrite(
    contract,
    "listProperty"
  );

  const createPropertyFunction = async (form) => {
    const {
      propertyTitle,
      description,
      category,
      price,
      images,
      propertyAddress,
    } = form;
    try {
      const data = await listProperty({
        args: [
          address,
          price,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //Get Property Data Section
  const getPropertiesData = async () => {
    try {
      const properties = await contract.call("getAllProperties");

      const parsedProperties = properties.map((property, i) => ({
        owner: property.owner,
        title: property.propertyTitle,
        description: property.description,
        category: property.category,
        price: ethers.utils.formatEther(property.price.toString()),
        productId: property.productID.toNumber(),
        reviewers: property.reviewers,
        reviews: property.reviews,
        image: property.images,
        address: property.propertyAddress,
      }));

      return parsedProperties;
      //console.log(properties);
    } catch (error) {
      console.log("Error while loading data", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        connect: connectWithMetamask,
        contract,
        realEstate,
        createPropertyFunction,
        //Read Properties Data
        getPropertiesData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
