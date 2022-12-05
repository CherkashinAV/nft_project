export const socialsVariants = {
	hidden: {
		opacity: 0,
		x: 500
	},
	visible: (i) => ({
		transition: {
			delay: i,
			duration: 0.5,
			type: 'spring'
		},
		opacity: 1,
		x: 0
	}),
	hover: {
		backgroundColor: '#8DFD1B',
		transition: {
			duration: 0.3,
			type: 'spring'
		}
	}
}