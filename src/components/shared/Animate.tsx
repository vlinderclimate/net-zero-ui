export const animation = {
  ".animate__animated &": {
    transform: "translate3d(0, 15px, 0)",
    transition: "transform 0.5s ease, opacity 0.3s ease",
    willChange: "transform, opacity",
    opacity: 0
  },
  ".animate__fadeIn &": {
    transform: "translate3d(0, 0, 0)",
    opacity: 1
  }
}
