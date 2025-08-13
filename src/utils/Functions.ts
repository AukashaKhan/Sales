const { hostname } = window.location;

export const ImageUrl = (image: string) => {
  if (hostname.includes("github"))
    return `/Sales/images/${image}`;
  else return `/Sales/images/${image}`;
};