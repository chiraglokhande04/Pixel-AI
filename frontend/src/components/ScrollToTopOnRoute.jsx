// ScrollToTopOnRoute.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRoute({ behavior = "auto" }) {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, let the browser jump to it; otherwise go to top.
    if (!hash) {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, search, hash, behavior]);

  return null;
}
