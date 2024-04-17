import List from './views/List';
// import Modal from './components/Modal'

function App() {

    const getRandomNumber = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }

    function createCircle() {
        const circle = document.createElement('div');
        circle.className = 'circle';
        const size = getRandomNumber(1, 4);
        const left = getRandomNumber(0, window.innerWidth - size * 2);
        const top = getRandomNumber(0, window.innerHeight - size * 2);
        const opacity = Math.random() < 0.5 ? 0.1 : 1;

        //const opacity = getRandomNumber(0.25, 1);
        const transitionTime = getRandomNumber(0.25, 0.75);

        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.left = left + 'px';
        circle.style.top = top + 'px';
        circle.style.opacity = String(opacity);
        circle.style.transition = `opacity ${transitionTime}s`;

        document.body.appendChild(circle);

        setInterval(() => {
        circle.style.opacity = String(getRandomNumber(0.25, 1));
        circle.style.transition = `opacity ${getRandomNumber(0.25, 1)}s`;
        }, getRandomNumber(1000, 3000));
    }

    for (let i = 0; i < 100; i++) {
        createCircle();
    }

    return (
        <div>
            <>
                <h1 className='text-center text-white display-1 py-4'>Rick and Morty</h1>
                <List/>
            </>
        </div>
    );
}

export default App
