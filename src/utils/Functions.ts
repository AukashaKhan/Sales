const { hostname } = window.location;

export const ImageUrl = (image: string) => {
  if (hostname.includes("github"))
    return `./images/${image}`;
  else return `./images/${image}`;
};
