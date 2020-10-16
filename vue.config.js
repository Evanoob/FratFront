module.exports = {
    devServer: {
      proxy: "https://frat-back.herokuapp.com/",
      host: "herokuapp",
      publicPath: "https://frat-front.herokuapp.com/" // utile pour supprimer l'erreur sockjs-node (Not Found) dans la console du navigateur
    },
  };