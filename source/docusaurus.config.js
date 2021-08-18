const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Taminaru",
	tagline: "just another robot...",
	url: "https://taminaru.github.io/",
	baseUrl: "/",
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "throw",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.png",
	organizationName: "Taminaru", // Usually your GitHub org/user name.
	projectName: "site", // Usually your repo name.
	customFields: {
		description: "The Official documentation for the bot taminaru",
	},
	themeConfig: {
		navbar: {
			title: "Taminaru",
			logo: {
				alt: "My Site Logo",
				src: "img/small.svg",
			},
			hideOnScroll: true,
			items: [
				// ?left
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{ to: "/faq", label: "FAQ", position: "left" },
				{
					type: "localeDropdown",
					position: "left",
				},
				// ? right
				{
					to: "team",
					label: "Team",
					position: "right",
					activeBaseRegex: `team`,
				},

				{
					href: "https://github.com/taminaru/",
					label: "GitHub",
					position: "right",
				},
			],
		},

		/**
		 * ? Other options
		 */

		hideableSidebar: true,
		// Sets the color settings for the site
		colorMode: {
			// "light" | "dark"
			defaultMode: "dark",
			// Allows the user to configure the site dark and light mode
			disableSwitch: false,
			// Should we use the prefers-color-scheme media-query,
			// using user system preferences, instead of the hardcoded defaultMode
			respectPrefersColorScheme: true,
			// Dark/light switch icon options
			switchConfig: {
				// Icon for the switch while in dark mode
				darkIcon: "🌙",

				// CSS to apply to dark icon,
				// React inline style object
				// see https://reactjs.org/docs/dom-elements.html#style
				darkIconStyle: {
					marginLeft: "2px",
				},

				// Unicode icons such as '\u2600' will work
				// Unicode with 5 chars require brackets: '\u{1F602}'
				lightIcon: "\u{1F602}",

				lightIconStyle: {
					marginLeft: "1px",
				},
			},
			respectPrefersColorScheme: true,
		},

		liveCodeBlock: {
			/**
			 * The position of the live playground, above or under the editor
			 * Possible values: "top" | "bottom"
			 */
			playgroundPosition: "bottom",
		},

		// Shows on user load - kind of like an ad for our github :D
		announcementBar: {
			id: "support-us",
			content:
				'⭐️ If you like Taminaru please consider upvoting me on <a target="_blank" rel="noopener noreferrer" href="/site">Top.gg</a>! ⭐️',
		},

		//! Will be adding soon when docs complete
		// algolia: {
		// 	apiKey: "",
		// 	indexName: "docs-search-api",
		// 	contextualSearch: true,
		// },

		// Allows us to add markdown highlighting for more languages.
		prism: {
			additionalLanguages: ["powershell", "java", "ruby", "go", "groovy"],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Frequently Asked",
							to: "faq/",
						},
						{
							label: "Support Us",
							to: "/docs/contributors",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href: "https://discord.com/invite/N79DZsm3m2",
						},
						{
							label: "YouTube",
							href: "http://www.youtube.com/c/ThatGuyJamal",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/taminaru/",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Taminaru, Inc.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				debug: true, // force debug plugin usage
				docs: {
					path: "docs",
					sidebarPath: require.resolve("./sidebars.js"),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/taminaru/site/tree/main",
				},
				remarkPlugins: [
					[require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
				],
				blog: {
					showReadingTime: true,
					postsPerPage: 3,
					blogSidebarCount: "ALL",
					blogSidebarTitle: "All our posts",

					// Please change this to your repo.
					editUrl: "https://github.com/taminaru/site/tree/main",
					postsPerPage: 3,
					feedOptions: {
						type: "all",
						copyright: `Copyright © ${new Date().getFullYear()} Taminaru, Inc.`,
					},
				},
				pages: {
					remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	// Translation feature - work in progress
	i18n: {
		defaultLocale: "en",
		locales: ["en"], // - adding later (https://v2.docusaurus.io/docs/next/i18n/introduction)
		localeConfigs: {
			en: {
				label: "English",
			},
			fr: {
				label: "Français",
			},
		},
	},
}
