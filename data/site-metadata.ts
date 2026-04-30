export const SITE_METADATA = {
  title: `Unfiltered`,
  author: 'Anonymous',
  headerTitle: `Unfiltered`,
  description:
    "Raw thoughts, personal stories, and unfiltered experiences — the stuff that doesn't fit the main blog.",
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteUrl: 'https://unfiltered.venkateshraju.in',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/page.jpg`,
  mainBlogUrl: 'https://blog.venkateshraju.in',

  locale: 'en-US',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: '',
    },
  },
  comments: {
    giscusConfig: {
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
