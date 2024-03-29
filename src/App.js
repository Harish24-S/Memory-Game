import Background from './components/Background';
import useGetImages from './hooks/useGetImages';

const BASE_URL = 'https://api.pexels.com/v1/search';

function App() {
    useGetImages();
    return (
        <>
            <Background />
            <h1>Memory Game</h1>
        </>
    );
}

export default App;
