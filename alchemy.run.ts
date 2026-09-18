import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Effect from "effect/Effect";

export const Website = Cloudflare.Website.Vite("Website", {
  name: "r216yu-web",
  domain: {
    name: "r216yu.xyz",
    aliases: ["www.r216yu.xyz"],
  },
});

export type WebsiteEnv = Cloudflare.InferEnv<typeof Website>;

export default Alchemy.Stack(
  "r216yu-web",
  {
    providers: Cloudflare.providers(),
    state: Alchemy.localState(),
  },
  Effect.gen(function* () {
    const website = yield* Website;

    return {
      url: website.url.as<string>(),
    };
  }),
);
