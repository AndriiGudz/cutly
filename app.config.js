export default {
    expo: {
      name: "Cutly",
      slug: "cutly",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      scheme: "cutly",
      extra: {
        SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      },
    },
  };
  