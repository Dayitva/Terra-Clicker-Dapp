module.exports = ({ wallets, refs, config, client }) => ({
  getBooks: () => client.query("clicker", { get_books: {} }),
  getScores: () => client.query("clicker", { get_scores: {} }),

  upsertScore: (score, signer = wallets.validator) =>
    client.execute(signer, "clicker", { upsert_score: { score } }),
});
