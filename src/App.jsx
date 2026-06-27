import Home from "./pages/Home.jsx";
import PlaceDetail from "./pages/PlaceDetail.jsx";
import placeDetails from "./data/placeDetails.js";

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
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const detailId = detailRoutes[path];

  if (detailId) {
    return <PlaceDetail detail={placeDetails[detailId]} />;
  }

  return <Home />;
}
