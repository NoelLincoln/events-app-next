// nextImageMock.js
const NextImageMock = ({ src, alt, width, height }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt="TechTide Meetups"
    width={width} // Add width and height attributes
    height={height}
    loading="lazy" // Enable lazy loading
    // You can also add a placeholder here if needed
  />
);

export default NextImageMock;
