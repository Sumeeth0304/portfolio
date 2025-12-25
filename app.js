const { useState, useEffect } = React;

// Header Component
const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header 
            className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-4 shadow-lg transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
            <div className="container mx-auto">
                <h1 
                    className={`text-4xl md:text-5xl font-bold text-center transition-all duration-1000 ease-out delay-100 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    Hi I am Sumeeth
                </h1>
            </div>
        </header>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            {/* Additional content will go here */}
        </div>
    );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
