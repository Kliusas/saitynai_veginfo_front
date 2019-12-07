import Vue from "vue";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faWordpressSimple as fabWordpressSimple,
  faWordpress as fabWordpress,
  faGoogle as fabGoogle,
  faGithub as fabGithub,
  faFacebookF as fabFacebookF
} from "@fortawesome/free-brands-svg-icons";
import {
  faBell as farBell,
  faListAlt as farListAlt,
  faChartBar as farChartBar,
  faFrown as farFrown,
  faStar as farStar
} from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from "@fortawesome/vue-fontawesome";

dom.watch();

library.add(
  fas,
  farBell,
  fabWordpress,
  fabWordpressSimple,
  fabGoogle,
  fabGithub,
  fabFacebookF,
  farListAlt,
  farChartBar,
  farFrown,
  farStar
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
