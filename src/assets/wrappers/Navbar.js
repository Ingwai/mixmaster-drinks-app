import styled from 'styled-components';

const Wrapper = styled.nav`
	background: #fff;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
	.nav-center {
		width: var(--view-width);
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 1.5rem 2rem;
	}
	.logo {
		font-size: clamp(1.5rem, 2vw, 2rem);
		color: var(--primary-500);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	.orange {
		color: #de7b1e;
	}
	.nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	.nav-link {
		color: var(--grey-900);
		padding: 0.5rem 0.5rem 0.5rem 0;
		transition: var(--transition);
		letter-spacing: 2px;
	}
	.nav-link:hover {
		color: var(--primary-500);
	}
	.active {
		color: var(--primary-500);
	}
	@media (min-width: 768px) {
		.nav-center {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		.nav-links {
			flex-direction: row;
			margin-top: 0;
		}
	}
`;

export default Wrapper;
