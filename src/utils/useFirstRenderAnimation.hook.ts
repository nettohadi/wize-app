import { useEffect, useState } from "react";

const useFirstRenderAnimation = (
  delayInMiliSecond: number = 0
): {
  isFirstRender: boolean;
  transition: string;
} => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(
      () => setIsFirstRender(false),
      delayInMiliSecond
    );
    return () => clearTimeout(timeout);
  }, []);
  return { isFirstRender, transition: "all ease-in-out 0.4s" };
};

export default useFirstRenderAnimation;
