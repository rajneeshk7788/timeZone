"use client";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

const countriesTimeZones = [
    { country: "Afghanistan", zone: "Asia/Kabul" },
    { country: "Albania", zone: "Europe/Tirane" },
    { country: "Algeria", zone: "Africa/Algiers" },
    { country: "Andorra", zone: "Europe/Andorra" },
    { country: "Angola", zone: "Africa/Luanda" },
    { country: "Argentina", zone: "America/Argentina/Buenos_Aires" },
    { country: "Armenia", zone: "Asia/Yerevan" },
    { country: "Australia", zone: "Australia/Sydney" },
    { country: "Austria", zone: "Europe/Vienna" },
    { country: "Bangladesh", zone: "Asia/Dhaka" },
    { country: "Belgium", zone: "Europe/Brussels" },
    { country: "Brazil", zone: "America/Sao_Paulo" },
    { country: "Canada", zone: "America/Toronto" },
    { country: "China", zone: "Asia/Shanghai" },
    { country: "Egypt", zone: "Africa/Cairo" },
    { country: "France", zone: "Europe/Paris" },
    { country: "Germany", zone: "Europe/Berlin" },
    { country: "India", zone: "Asia/Kolkata" },
    { country: "Indonesia", zone: "Asia/Jakarta" },
    { country: "Iran", zone: "Asia/Tehran" },
    { country: "Italy", zone: "Europe/Rome" },
    { country: "Japan", zone: "Asia/Tokyo" },
    { country: "Mexico", zone: "America/Mexico_City" },
    { country: "Netherlands", zone: "Europe/Amsterdam" },
    { country: "Nigeria", zone: "Africa/Lagos" },
    { country: "Pakistan", zone: "Asia/Karachi" },
    { country: "Russia", zone: "Europe/Moscow" },
    { country: "Saudi Arabia", zone: "Asia/Riyadh" },
    { country: "South Africa", zone: "Africa/Johannesburg" },
    { country: "Spain", zone: "Europe/Madrid" },
    { country: "Switzerland", zone: "Europe/Zurich" },
    { country: "Turkey", zone: "Europe/Istanbul" },
    { country: "United Kingdom", zone: "Europe/London" },
    { country: "United States", zone: "America/New_York" },
    { country: "Vietnam", zone: "Asia/Ho_Chi_Minh" },
];

const CountryTimeZones: React.FC = () => {
    const [currentTimes, setCurrentTimes] = useState<string[] | null>(null);

    useEffect(() => {
        // Set initial times after mount
        setCurrentTimes(
            countriesTimeZones.map(({ zone }) => moment().tz(zone).format("HH:mm:ss"))
        );
        // Update every second
        const interval = setInterval(() => {
            setCurrentTimes(
                countriesTimeZones.map(({ zone }) =>
                    moment().tz(zone).format("HH:mm:ss")
                )
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

   if (!currentTimes) {
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
                {countriesTimeZones.map(({ country, zone }, idx) => (
                    <div
                        key={zone}
                        className="bg-gradient-to-br from-white via-blue-100 to-purple-100 rounded-xl shadow-xl p-8 flex flex-col items-center justify-center
            transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        <span className="font-semibold text-xl mb-2 text-purple-800">{country}</span>
                        <span className="text-3xl font-mono mb-1 text-blue-700 drop-shadow">
                            {currentTimes[idx]}
                        </span>
                        <span className="text-3xl font-mono mb-1 text-blue-700 drop-shadow">
                            {new Date().toLocaleDateString()}
                        </span>
                        <span className="text-gray-500 text-sm mb-2">{zone}</span>
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