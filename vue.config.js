module.exports = {
    devServer: {
      proxy: "https://fraternelles93b.herokuapp.com",
      host: "herokuapp",
      publicPath: "https://fraternelles93.herokuapp.com" // utile pour supprimer l'erreur sockjs-node (Not Found) dans la console du navigateur
    },
  };