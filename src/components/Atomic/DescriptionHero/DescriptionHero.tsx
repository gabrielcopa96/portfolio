import { ReactElement } from 'react';

const DescriptionHero = (): ReactElement<HTMLElement> => {
  return (
    <div className="container-descriptionhero">
      <span className="text-top-description">Hola, soy Gabriel Copa, Me desempeño como Back End Developer Jr</span>
      <span>Soy de Salta, Argentina</span>
    </div>
  )
}

export default DescriptionHero;