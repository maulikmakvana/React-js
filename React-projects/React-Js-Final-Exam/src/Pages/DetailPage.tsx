import { useParams, useNavigate } from "react-router";
import { getData } from "../Services/apiService";
import { useEffect, useState } from "react";
import type { newsDataType } from "./DashboardPage";

export default function DetailPage() {
    const navigate = useNavigate();
    const { uniqueId } = useParams();

    useEffect(() => {
        getFullData();
    }, [uniqueId]);

    // Keeping your exact hooks setup and logic intact
    const [article, setArticle] = useState<newsDataType[]>([]);
    const [detailedData, setDetailedData] = useState<newsDataType | any>([]);

    async function getFullData() {
        const data = await getData();
        const news = data.articles.find(
            (value: newsDataType) => value.publishedAt === uniqueId
        );
        setDetailedData(news || null);
    }

    const formatFullDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#111111] antialiased">
            {/* Clean Subheader Navigation */}
            <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Feed
                    </button>
                    <span className="font-serif text-sm font-black uppercase tracking-tight">
                        Kyodo <span className="font-sans font-normal text-gray-400">News File</span>
                    </span>
                </div>
            </nav>

            {detailedData && Object.keys(detailedData).length > 0 ? (
                <main className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
                    
                    {/* Source and Category Flag */}
                    <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest bg-gray-100 text-gray-800 px-2.5 py-1">
                            {detailedData.source?.name || "Global Wire"}
                        </span>
                    </div>

                    {/* Editorial Headline */}
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
                        {detailedData.title}
                    </h1>

                    {/* Metadata Signature Grid */}
                    <div className="border-y border-gray-200 py-3 my-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-2">
                        <div className="font-semibold text-gray-800 uppercase tracking-wide">
                            By {detailedData.author || "Kyodo Correspondents"}
                        </div>
                        <time className="font-medium" dateTime={detailedData.publishedAt}>
                            {formatFullDate(detailedData.publishedAt)}
                        </time>
                    </div>

                    {/* Wide Image Container */}
                    <figure className="my-8 aspect-[16/9] w-full bg-gray-50 border border-gray-200 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={detailedData.urlToImage}
                            alt=""
                        />
                    </figure>

                    {/* Story Paragraph with Dropcap Styling */}
                    <div className="mt-8 font-sans text-gray-800 text-base sm:text-lg leading-relaxed font-normal tracking-normal max-w-none">
                        <p className="whitespace-pre-line first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-black">
                            {detailedData.description}
                        </p>
                    </div>

                </main>
            ) : (
                /* Elegant Wire-Service Style Loader */
                <div className="max-w-xl mx-auto px-4 py-36 text-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-black border-t-transparent mx-auto mb-4"></div>
                    <p className="font-serif italic text-gray-400 text-sm tracking-wide">Downloading article contents...</p>
                </div>
            )}
        </div>
    );
}