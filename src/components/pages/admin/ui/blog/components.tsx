export const components = {
  // h1: (props: any) => <h1 {...props} className="text-xl" />,
  youtube: ({ id }: { id: string }) => (
    <iframe
      className="youtube"
      src={`https://www.youtube.com/embed/` + id}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  ),
};
