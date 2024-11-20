export const enterFullScreen = (element: HTMLElement): void => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if ((element as any).mozRequestFullScreen) { /* Firefox */
    (element as any).mozRequestFullScreen();
  } else if ((element as any).webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    (element as any).webkitRequestFullscreen();
  } else if ((element as any).msRequestFullscreen) { /* IE/Edge */
    (element as any).msRequestFullscreen();
  }
};

export const exitFullScreen = (): void => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ((document as any).mozCancelFullScreen) { /* Firefox */
    (document as any).mozCancelFullScreen();
  } else if ((document as any).webkitExitFullscreen) { /* Chrome, Safari & Opera */
    (document as any).webkitExitFullscreen();
  } else if ((document as any).msExitFullscreen) { /* IE/Edge */
    (document as any).msExitFullscreen();
  }
};
