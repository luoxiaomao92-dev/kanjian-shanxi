export const resolveAssetPath = (path) => {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

const homeSectionPaths = new Set(["map", "places", "themes"]);

const normalizeHashPath = (path = "/") => {
  const cleaned = String(path)
    .trim()
    .replace(/^#+/, "")
    .replace(/^\/+/, "");

  return cleaned ? `/${cleaned}` : "/";
};

export const resolveHashRoute = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}#${normalizeHashPath(path)}`;
};

export const resolveHomeSectionRoute = (sectionId) => resolveHashRoute(sectionId);

export const resolvePlaceRoute = (placeId) => resolveHashRoute(`/places/${placeId}`);

export const getHashRoute = () => {
  const hashValue = window.location.hash.replace(/^#/, "");

  if (!hashValue || !hashValue.startsWith("/")) {
    return { path: "/", sectionId: hashValue || "" };
  }

  const [rawPath, sectionId = ""] = hashValue.split("#");
  const path = rawPath.replace(/\/$/, "") || "/";
  const homeSectionId = path.replace(/^\/+/, "");

  if (homeSectionPaths.has(homeSectionId)) {
    return { path: "/", sectionId: homeSectionId };
  }

  return { path, sectionId };
};
