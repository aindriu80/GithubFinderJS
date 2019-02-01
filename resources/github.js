class Github {
  constructor() {
    this.client_id = "a5688b3c7dca03d68e94";
    this.client_secret = "97d432056d74c834661d4befb5e08d5a3fd803fc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
