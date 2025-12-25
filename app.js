const { useState, useEffect } = React;

// Header Component
const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-4 shadow-lg">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center">
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
