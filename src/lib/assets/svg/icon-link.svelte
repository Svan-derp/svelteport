<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	/**
	 * @type {gsap.TweenTarget}
	 */
	let element;

	onMount(() => {
		gsap.from(element, {
			lazy: true,
			scale: 1.4,
			rotate: 45,
			repeat: -1,
			yoyo: true,
			ease: 'elastic',
			duration: 3
		});
	});
</script>

<svg
	bind:this={element}
	width="18px"
	height="18px"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_429_11072)">
		<path
			d="M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999"
			stroke="#000000"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9 14.9999L20 3.99994"
			stroke="#000000"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 3.99994H20V8.99994"
			stroke="#000000"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
</svg>
