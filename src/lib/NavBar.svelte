<script>
	import HamburgerMenu from './HamburgerMenu.svelte';
	import IconPeacock from '$lib/assets/svg/icon-peacock.svelte';

	$: isMobileMenuOpen = false;

	const handleMobileIconClick = () => {
		if (isMobileMenuOpen === true) {
			isMobileMenuOpen = !isMobileMenuOpen;
		}
	};
</script>

<nav>
	<div class="inner">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<HamburgerMenu bind:isMobileMenuOpen />

		<a on:click={handleMobileIconClick} href="/" class="logo-link">
			<IconPeacock size={62} />
		</a>

		<div class={`navbar-list ${isMobileMenuOpen ? ' mobile' : ''}`}>
			<a on:click={handleMobileIconClick} href="/projects">PROJECTS</a>
			<a on:click={handleMobileIconClick} href="/coffee">COFFEE </a>
		</div>
	</div>
</nav>

<style lang="scss">
	nav {
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		width: 100%;
		position: fixed;
		z-index: 1000;
		top: 0;
		a {
			color: var(--p-text-color);
		}
		.inner {
			position: relative;
			background-color: var(--menu-background);
			box-shadow: rgba(17, 12, 46, 0.15) 0 10px 10px 0;
			& > .logo-link {
				margin-left: calc(50% - 25px);
			}
			& > .navbar-list {
				display: none;
				a {
					text-decoration: none;
					display: block;
					font-size: 2rem;
					align-self: center;
					text-align: center;
					padding: calc(50% - 75px) 0;
				}
				&.mobile {
					display: block;
					height: 100vh;
				}
			}
			@media only screen and (min-width: 650px) {
				display: flex;
				& > .logo-link {
					margin-left: calc(50% - 32px);
					z-index: 999;
				}
				& > .navbar-list {
					display: flex;
					position: fixed;
					width: 100%;
					align-self: center;
					a {
						padding: 26px 64px;
						margin: 0;
						font-size: 1.5rem;
						&:first {
							position: absolute;
							left: 0;
						}
						&:last-of-type {
							position: absolute;
							right: 0;
						}
					}
				}
			}
		}
	}
</style>
