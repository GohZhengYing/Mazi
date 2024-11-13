import React from "react";
import { useRouter } from 'next/router';
import { LoadingPage } from "../components/LoadingPage";

const PageNavigation = ({
  children,
  withLoader = false,
  isLoading,
}) => {
  const router = useRouter();

  let InnerComponent = children;
  if (withLoader) {
    if (isLoading) {
      InnerComponent = <LoadingPage />;
    }
  }

  return (
    <>
      {InnerComponent}
    </>
  );
};

export default PageNavigation;
