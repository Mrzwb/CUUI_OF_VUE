import {
    CuButton,
    CuWaveButton,
} from './button';
import Calendar from './calendar';
import { 
    CuCard,
    CuImageCard
} from './cards';
import { 
    CuIcon,
    CuIconArrow 
} from './icon';
    const version = '0.1.0';

    function install(Vue) {
      const components = [
        
    CuButton,
    CuWaveButton,
    Calendar,
     
    CuCard,
    CuImageCard
,
     
    CuIcon,
    CuIconArrow 

      ];
      components.forEach(item => {
        if (item.install) {
          Vue.use(item);
        } else if (item.name) {
          Vue.component(item.name, item);
        } 
      });
    }
    
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue);
    }
    
    export {
      install,
      version,
      
    CuButton,
    CuWaveButton,
    Calendar,
     
    CuCard,
    CuImageCard
,
     
    CuIcon,
    CuIconArrow 

    };
    
    export default {
      install: install,
      version: version
    };
    