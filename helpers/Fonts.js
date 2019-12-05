import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const montserrat = new FontFaceObserver('Arsenal');

  montserrat.load().then(() => {
    document.documentElement.classList.add('arsenal-loaded');
  });
}

export default Fonts;
