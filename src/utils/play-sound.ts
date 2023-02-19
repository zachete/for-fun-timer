export const playSound = () => {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = 700;
  oscillator.connect(audioContext.destination);
  oscillator.start();

  setTimeout(() => {
    oscillator.stop();
  }, 400);
};
