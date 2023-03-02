
const getOpts = () => {
  return {
    neo4j_uri: core.getInput('neo4j-uri'),
    neo4j_user: core.getInput('neo4j-user'),
    neo4j_password: core.getInput('neo4j-password'),
    document: core.getInput('document'),
  };
};


async function run() {
  const opts = getOpts();
  console.log(opts);

}

run();
