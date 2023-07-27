document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	disableMute()
})

const disableMute = () => {
	const video = document.querySelector('.hero__video')
	setTimeout(() => {
		video.muted = false
	}, 300);
}