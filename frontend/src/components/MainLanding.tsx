import React from "react";

interface MainLandingProps {
    onJoinGame: () => void;
}

const MainLanding: React.FC<MainLandingProps> = ({ onJoinGame }) => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Hero Section */}
                <header className="mb-12 animate-fade-in">
                    <div className="inline-block p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-6 border border-cyan-500/30 animate-pulse">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-white animate-bounce"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text mb-6 animate-gradient">
                        Conway's Battle
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                        Experience the ultimate strategy game where{" "}
                        <span className="text-cyan-400 font-semibold">
                            Conway's Game of Life
                        </span>{" "}
                        meets competitive multiplayer action. Design your
                        cellular army and watch it evolve in real-time!
                    </p>
                </header>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-300 mb-2">
                            Strategic Gameplay
                        </h3>
                        <p className="text-slate-400">
                            Design your initial cellular patterns and watch them
                            evolve through Conway's rules
                        </p>
                    </div>

                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-red-300 mb-2">
                            Multiplayer Combat
                        </h3>
                        <p className="text-slate-400">
                            Battle against other players in real-time cellular
                            warfare
                        </p>
                    </div>

                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-300 mb-2">
                            Live Evolution
                        </h3>
                        <p className="text-slate-400">
                            Watch your designs come to life with smooth
                            animations and real-time updates
                        </p>
                    </div>
                </div>

                {/* Game Rules */}
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 mb-12">
                    <h2 className="text-3xl font-bold text-slate-200 mb-6">
                        How to Play
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div>
                            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                                Setup Phase
                            </h3>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 font-bold">
                                        1.
                                    </span>
                                    <span>
                                        Each player gets their own section of
                                        the grid
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 font-bold">
                                        2.
                                    </span>
                                    <span>
                                        Place your cells strategically in your
                                        area
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 font-bold">
                                        3.
                                    </span>
                                    <span>
                                        Use pre-made patterns or create your own
                                        designs
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-red-300 mb-3">
                                Battle Phase
                            </h3>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">
                                        1.
                                    </span>
                                    <span>
                                        Conway's Game of Life rules take effect
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">
                                        2.
                                    </span>
                                    <span>
                                        Cells evolve, survive, or die based on
                                        neighbors
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">
                                        3.
                                    </span>
                                    <span>
                                        Player with the most surviving cells
                                        wins!
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <section className="space-y-6 animate-fade-in">
                    <button
                        type="button"
                        onClick={onJoinGame}
                        aria-label="Start playing Conway's Battle"
                        className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 active:scale-95"
                    >
                        <div className="flex items-center gap-3">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m3 6V4a3 3 0 00-3-3H6a3 3 0 00-3 3v6h4.5m11.5 0h-4.5m0 0v6a3 3 0 003 3h3a3 3 0 003-3v-6m-9-6h4.5m0 0V4a3 3 0 00-3-3h-3a3 3 0 00-3 3v6"
                                />
                            </svg>
                            Start Playing
                        </div>
                    </button>

                    <p className="text-slate-400 text-sm">
                        Join the cellular revolution and prove your strategic
                        mastery!
                    </p>
                </section>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-slate-700/50">
                    <p className="text-slate-500 text-sm pb-1">
                        Built with React, Firebase, and the power of Conway's
                        Game of Life
                    </p>
                </div>
            </div>
        </main>
    );
};

export default MainLanding;
