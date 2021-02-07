import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={457}
    viewBox='0 0 280 457'
    backgroundColor='#dedede'
    foregroundColor='#ece1c6'
  >
    <circle cx='140' cy='100' r='100' />
    <rect x='0' y='215' rx='4' ry='4' width='280' height='24' />
    <rect x='0' y='256' rx='10' ry='10' width='280' height='84' />
    <rect x='0' y='362' rx='4' ry='4' width='92' height='27' />
    <rect x='129' y='353' rx='24' ry='24' width='152' height='44' />
  </ContentLoader>
);

export default Loader;
