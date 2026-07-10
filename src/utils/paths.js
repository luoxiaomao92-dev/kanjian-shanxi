export const resolveAssetPath = (path) => {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export const resolveHashRoute = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith("#/")) return path;
  const normalizedPath = path.replace(/\/$/, "") || "/";
  return `#${normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`}`;
};

export const resolveHomeSectionRoute = (sectionId) => `#/#${sectionId.replace(/^#/, "")}`;

export const resolvePlaceRoute = (placeId) => resolveHashRoute(`/places/${placeId}`);

export const getHashRoute = () => {
  const hashValue = window.location.hash.replace(/^#/, "");

  if (!hashValue || !hashValue.startsWith("/")) {
    return { path: "/", sectionId: hashValue || "" };
  }

  const [rawPath, sectionId = ""] = hashValue.split("#");
  const path = rawPath.replace(/\/$/, "") || "/";

  return { path, sectionId };
};
