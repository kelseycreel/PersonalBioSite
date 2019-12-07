import utilities from '../../helpers/utilities';
import './tech.scss';

const technologiesUsed = [
  {
    technology: 'HTML',
    iconLink: 'https://unik.al/unik_content/uploads/2018/12/html-logo-png-2.png',
  },
  {
    technology: 'CSS',
    iconLink: 'https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png',
  },
  {
    technology: 'JAVASCRIPT',
    iconLink: 'https://mpng.pngfly.com/20181209/yvf/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d82819a4963.228658921544389249632.jpg',
  },
  {
    technology: 'GIT',
    iconLink: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  },
  {
    technology: 'Visual Studio',
    iconLink: 'https://www.stickpng.com/assets/images/58482afbcef1014c0b5e4a21.png',
  },
  {
    technology: 'Bootstrap',
    iconLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    technology: 'React',
    iconLink: 'https://cdn.worldvectorlogo.com/logos/react.svg',
  },
];

const printTech = () => {
  let stringtoPrint = '<div class="bioTech d-flex flex-row flex-wrap justify-content-center align-content-center">';
  for (let i = 0; i < technologiesUsed.length; i += 1) {
    stringtoPrint += `<img src="${technologiesUsed[i].iconLink}" title="${technologiesUsed[i].technology}"/>`;
  }
  stringtoPrint += '</div>';
  utilities.printToDom(stringtoPrint, 'technologiesPage');
};

export default { printTech };
