import { useEffect, useState } from "react";
import { getData, searchNewsData } from "../Services/apiService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export interface newsDataType {
    urlToImage: string;
    title: string;
    source: {
        id: string;
        name: string;
    };
    author: string;
    publishedAt: string;
    description: string;
}

export default function DashboardPage() {
    useEffect(() => {
        getNewsData();
    }, []);

    const [newsAllData, setNewsAllData] = useState<newsDataType[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const [searchNews, setSearchNews] = useState("");
    const navigate = useNavigate();

    async function getNewsData() {
        setLoader(true);
        const data = await getData();

        if (data.status === "ok") {
            toast.success("Data fetched successfully");
            setNewsAllData(data.articles);
        } else {
            toast.error("Data fetch unsuccessful");
        }
        setLoader(false);
    }

    async function searchNewsArticles() {
        setLoader(true);
        const searchedData = await searchNewsData(searchNews);

        if (searchedData.status === "ok") {
            toast.success("Data fetched successfully");
            setNewsAllData(searchedData.articles);
        } else {
            toast.error("Data fetch unsuccessful");
        }
        setLoader(false);
    }

    function goToDetailPage(uniqueId: string) {
        navigate(`/detail-page/${uniqueId}`);
    }

    // Helper to format timestamps gracefully
    const formatNewsDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            });
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="min-h-screen bg-[#fcfbf9] text-[#111111] font-sans antialiased">
            {/* Kyodo-Style Minimal Top Branding Bar */}
            <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
                    <div className="flex items-center space-x-6">
                        <span className="font-serif text-3xl font-black tracking-tighter uppercase cursor-pointer" onClick={getNewsData}>
                            Kyodo <span className="font-normal text-gray-500 text-2xl tracking-normal font-sans">News</span>
                        </span>
                    </div>
                    
                    {/* Modern Search Field */}
                    <div className="flex items-center gap-2 w-full sm:max-w-xs relative">
                        <input
                            type="text"
                            name="search"
                            onChange={(e) => setSearchNews(e.target.value)}
                            placeholder="Search news..."
                            className="w-full px-4 py-1.5 bg-gray-50 border border-gray-300 text-sm focus:outline-none focus:border-black placeholder-gray-400 transition-all"
                        />
                        <button onClick={searchNewsArticles} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Section Header */}
                <header className="border-b-2 border-black pb-2 mb-10 flex items-baseline justify-between">
                    <h1 className="font-serif text-4xl font-bold tracking-tight uppercase">Top News</h1>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:inline">Live Updates</span>
                </header>

                {/* Loader */}
                {loader && (
                    <div className="flex flex-col justify-center items-center py-24 space-y-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-black border-t-transparent"></div>
                        <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">Fetching Wire...</p>
                    </div>
                )}

                {/* Editorial Layout Grid */}
                {!loader && (
                    <main className="flex flex-col gap-12">
                        {/* Dynamic Grid: Asymmetrical Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
                            {newsAllData.map((data, idx) => {
                                // Designate the very first article as the "Hero Spotlight" spanning wider on desktop
                                const isHero = idx === 0;
                                return (
                                    <div 
                                        key={idx} 
                                        onClick={() => goToDetailPage(data.publishedAt)}
                                        className={`group cursor-pointer flex flex-col bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-400 hover:shadow-sm ${
                                            isHero ? "md:col-span-2 row-span-2" : ""
                                        }`}
                                    >
                                        {/* Image wrapper */}
                                        <figure className={`relative bg-gray-100 overflow-hidden ${isHero ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
                                            <img 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" 
                                                src={data.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800"} 
                                                alt={data.title} 
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-black text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5">
                                                    {data.source.name || "Wire"}
                                                </span>
                                            </div>
                                        </figure>

                                        {/* Meta and content text */}
                                        <div className="p-5 flex flex-col flex-1 justify-between">
                                            <div>
                                                <h2 className={`font-serif font-bold text-gray-900 group-hover:text-gray-700 leading-tight mb-3 transition-colors ${
                                                    isHero ? "text-2xl sm:text-3xl" : "text-lg"
                                                }`}>
                                                    {data.title}
                                                </h2>
                                                
                                                <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed font-normal">
                                                    {data.description}
                                                </p>
                                            </div>

                                            {/* Minimalist Border Footer */}
                                            <footer className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                                                <p className="truncate max-w-[150px]">By {data.author || "Staff Correspondent"}</p>
                                                <time dateTime={data.publishedAt}>{formatNewsDate(data.publishedAt)}</time>
                                            </footer>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </main>
                )}
            </div>
        </div>
    );
}