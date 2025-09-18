"use client";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

const countriesTimeZones = [
    { country: "Afghanistan" },
    { country: "Albania" },
    { country: "Algeria" },
    { country: "Andorra" },
    { country: "Angola" },
    { country: "Argentina" },
    { country: "Armenia" },
    { country: "Australia" },
    { country: "Austria" },
    { country: "Bangladesh" },
    { country: "Belgium" },
    { country: "Brazil" },
    { country: "Canada" },
    { country: "China" },
    { country: "Egypt" },
    { country: "France" },
    { country: "Germany" },
    { country: "India" },
    { country: "Indonesia" },
    { country: "Iran" },
    { country: "Italy" },
    { country: "Japan" },
    { country: "Mexico" },
    { country: "Netherlands" },
    { country: "Nigeria" },
    { country: "Pakistan" },
    { country: "Russia" },
    { country: "Saudi Arabia" },
    { country: "South Africa" },
    { country: "Spain" },
    { country: "Switzerland" },
    { country: "Turkey" },
    { country: "United Kingdom" },
    { country: "United States" },
    { country: "Vietnam" },
];

const CountryTimeZones: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const userZone = moment.tz.guess();
        const updateTime = () => {
            setCurrentTime(moment().tz(userZone).format("HH:mm:ss"));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!currentTime) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50">
                <span className="text-2xl text-purple-700 font-bold">Loading times...</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 py-10">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700 drop-shadow-lg">
                Multy country Time Zones
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-8">
                {countriesTimeZones.map(({ country }) => (
                    <div
                        key={country}
                        className="bg-gradient-to-br from-white via-blue-100 to-purple-100 rounded-xl shadow-xl p-8 flex flex-col items-center justify-center
            transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
                    >
                        <span className="font-semibold text-xl mb-2 text-purple-800">{country}</span>
                        <span className="text-3xl font-mono mb-1 text-blue-700 drop-shadow">
                            {currentTime}
                        </span>
                        <span className="text-3xl font-mono mb-1 text-blue-700 drop-shadow">
                            {new Date().toLocaleDateString()}
                        </span>
                        <span className="text-gray-500 text-sm mb-2">
                            {moment.tz.guess()}
                        </span>
                        <iframe
                            title={`${country} map`}
                            src={`https://www.google.com/maps?q=${encodeURIComponent(country)}&output=embed`}
                            width="100%"
                            height="120"
                            style={{ border: 0, borderRadius: '0.5rem' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryTimeZones;