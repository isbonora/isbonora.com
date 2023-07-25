import styled from 'styled-components';

//  <main className="flex flex-col items-center justify-between min-h-screen p-4 py-8 lg:pb-24">
export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 4rem 1rem 8rem;
    @media (min-width: 768px) {
        padding-bottom: 24rem;
    }
`;

// <div className="flex flex-col w-full max-w-3xl gap-12">
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 48rem;
    gap: 3rem;
`;