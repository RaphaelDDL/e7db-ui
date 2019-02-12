import NProgress from "nprogress";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import { apiUrl } from "@/js/util/Constants";

Vue.use(VueAxios, axios);

Vue.config.errorHandler = function(err, vm, info) {
  errorHandler(
    { dispatch: vm.$store.dispatch },
    err,
    "Vue errorHandler" + info
  );
};

axios.defaults.baseURL = apiUrl;
axios.defaults.timeout = 5000;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["X-Custom-Header"] = "EpicSevenDB";

NProgress.configure({
  showSpinner: false
});

const errorHandler = ({ dispatch, reject }, error, when) => {
  NProgress.done();
  if (dispatch) {
    dispatch("globalError", { error, when }, { root: true });
  }
  if (reject) {
    return reject(error);
  }
  console.warn("[Global Error Handler]: Error " + when + ": " + error);
};

// scotch.io/tutorials/add-loading-indicators-to-your-vuejs-application
// before a request is made start the nprogress
axios.interceptors.request.use(
  config => {
    NProgress.inc();
    return config;
  },
  error => errorHandler({}, error, "request")
);

// before a response is returned stop nprogress
axios.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  error => errorHandler({}, error, "response")
);

const httpMethods = {
  getArtifactsList: () => {
    return axios.get("artifact");
  },
  getSingleArtifact: fileId => {
    return axios.get(`artifact/${fileId}`);
  },
  getHeroesList: () => {
    return axios.get("hero");
  },
  getSingleHero: fileId => {
    return axios.get(`hero/${fileId}`);
  }
};

export { errorHandler, axios };
export default httpMethods;
