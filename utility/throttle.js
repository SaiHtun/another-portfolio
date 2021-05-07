export const throttle = (e, fn, delay) => {
  let timerId;
  if (timerId) {
    return;
  }

  timerId = setTimeout(() => {
    fn(e);
    timerId = undefined;
  }, delay);
};
