module.exports = {
    apps: [
      {
        name: "must-next",
        script: "node_modules/next/dist/bin/next",
        args: "start -p 3000",
        cwd: "/home/must/htdocs/must.edu.pl",
        interpreter: "node",
        env: {
          NODE_ENV: "production",
          PORT: 3000
        }
      }
    ]
  };
  