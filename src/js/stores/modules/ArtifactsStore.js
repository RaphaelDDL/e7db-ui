import HTTP, { errorHandler } from "@/js/stores/HTTP";

export default {
  namespaced: true,
  state: { artifactList: [] },
  mutations: {
    SET_ARTIFACTS(state, artifacts) {
      state.artifactList = artifacts;
    }
  },
  getters: {
    list: state => state.artifactList
  },
  actions: {
    getList({ dispatch, commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          let getArtifactsListResponse = await HTTP.getArtifactsList();
          let {
            data: { results: artifacts = [] } = {}
          } = getArtifactsListResponse;
          if (!artifacts.length) {
            throw new Error("results.length === 0 for artifacts list");
          }
          commit("SET_ARTIFACTS", artifacts);
          return resolve(artifacts);
        } catch (error) {
          return errorHandler({ dispatch, reject }, error, "artifacts list");
        }
      });
    },
    // getList({ dispatch, commit }) {
    //   return new Promise((resolve, reject) => {
    //     HTTP.getArtifactsList()
    //       .then(r => r.data.results)
    //       .catch(error => {
    //         errorHandler({ dispatch, reject }, error, "artifact list");
    //       })
    //       .then(artifacts => {
    //         if (artifacts && artifacts.length) {
    //           commit("SET_ARTIFACTS", artifacts);
    //           resolve(artifacts);
    //         } else {
    //           let error = {
    //             stack: `results.length === 0 for artifacts list`,
    //             message: "Error loading list"
    //           };
    //           errorHandler({ dispatch, reject }, error, "artifact list");
    //         }
    //       });
    //   });
    // },
    getSingle({ dispatch }, { fileId }) {
      return new Promise((resolve, reject) => {
        HTTP.getSingleArtifact(fileId)
          .then(r => r.data.results)
          .catch(error => {
            errorHandler({ dispatch, reject }, error, "artifact detail");
          })
          .then(artifact => {
            if (artifact && artifact.length) {
              resolve(artifact[0]);
            } else {
              let error = {
                stack: `results.length === 0 for ${fileId}`,
                message: "Error loading detail"
              };
              errorHandler({ dispatch, reject }, error, "artifact detail");
            }
          });
      });
    }
  }
};
