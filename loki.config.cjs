module.exports = {
	configurations: {
		"chrome.laptop": {
			target: "chrome.docker",
			width: 800,
			height: 1080,
			deviceScaleFactor: 1,
			mobile: true,
		},
	},

	fileNameFormatter: ({ configurationName, kind, story }) =>
		`${configurationName}/${kind}.${story}`,
};
