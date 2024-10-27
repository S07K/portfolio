import NavbarStyle from '../css/navbar.module.css';
import useVarStyle from '../css/useVariables.module.css';

function scrollHandler() {
    window.addEventListener("scroll", function () {
        // console.log('scrolled')
        const nav = document.querySelector(`.${NavbarStyle.navWrapper}`);
    
        if(nav) {
            if (window.scrollY > 50) {
                nav.classList.add(useVarStyle.bgWhite);
                // nav.classList.add(useVarStyle.colorSlate);
                nav.style.paddingBottom = '10px'
                nav.style.boxShadow = '0px 0px 4px 4px #2525250d';
            }
            else {
                nav.classList.remove(useVarStyle.bgWhite);
                // nav.classList.remove(useVarStyle.colorSlate);
                nav.style.paddingBottom = '0px'
                nav.style.boxShadow = 'none';
            }
        }
    }, false);
}

export default scrollHandler