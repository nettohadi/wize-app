import { useEffect, useState } from "react";

const useFirstRenderAnimation = (): {
  isFirstRender: boolean;
  transition: string;
} => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => setIsFirstRender(false), []);
  return { isFirstRender, transition: "all ease-in-out 0.4s" };
};

export default useFirstRenderAnimation;
