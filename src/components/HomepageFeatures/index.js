import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Funciones',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Desde el procesamiento de datos hasta la gestión de solicitudes y respuestas, 
        examinamos cómo estas funciones trabajan juntas para mantener la funcionalidad y 
        eficiencia del sistema.
      </>
    ),
  },
  {
    title: 'Flujo',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Analizamos en detalle cómo se estructura 
        y gestiona este flujo, identificando posibles puntos de mejora y optimización.
      </>
    ),
  },
  {
    title: 'Logica',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Exploramos cómo se implementan algoritmos, 
        validaciones de datos, autorizaciones de usuarios y otros procesos fundamentales 
        para asegurar la coherencia y funcionalidad del sistema.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
