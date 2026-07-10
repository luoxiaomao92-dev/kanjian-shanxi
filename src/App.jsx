import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import BeiweiStory from "./pages/BeiweiStory.jsx";
import PlaceDetail from "./pages/PlaceDetail.jsx";
import Presentation from "./pages/Presentation.jsx";
import placeDetails from "./data/placeDetails.js";
import { getHashRoute } from "./utils/paths.js";

const detailRoutes = {
  "/places/shuanglin-temple": "shuanglin-temple",
  "/places/jinshang-museum": "jinshang-museum",
  "/places/yingxian-pagoda": "yingxian-pagoda",
  "/places/yungang-grottoes": "yungang-grottoes",
  "/places/huayan-temple": "huayan-temple",
  "/places/shanhua-temple": "shanhua-temple",
  "/shuanglin-temple": "shuanglin-temple",
  "/jinshang-museum": "jinshang-museum",
  "/yingxian-pagoda": "yingxian-pagoda",
  "/yungang-grottoes": "yungang-grottoes",
  "/huayan-temple": "huayan-temple",
  "/shanhua-temple": "shanhua-temple"
};

export default function App() {
  const [route, setRoute] = useState(() => getHashRoute());
  const { path, sectionId } = route;
  const detailId = detailRoutes[path];

  useEffect(() => {
    function handleHashChange() {
      setRoute(getHashRoute());
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (!sectionId) {
      window.scrollTo({ top: 0 });
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView();
    });
  }, [path, sectionId]);

  if (path === "/presentation") {
    return <Presentation />;
  }

  if (path === "/beiwei-story") {
    return <BeiweiStory />;
  }

  if (detailId) {
    return <PlaceDetail detail={placeDetails[detailId]} />;
  }

  return <Home />;
}
